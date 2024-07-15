const UNITS = require('./mock-units.js');

// console.log(getZombieTargets())
// let DANGER_POINTS = new Set();

// не учитывает что база что нет
function getTargetsByZombieType(zombie, base, pointTarget) {
    switch (zombie.type) {
        case 'fast':
            switch (zombie.direction) {
                case 'left':
                    return [{ x: zombie.x, y: zombie.x - 2 }];
                case 'right':
                    return [{ y: zombie.y, x: zombie.x + 2 }];
                case 'up':
                    return [{ y: zombie.y - 2, x: zombie.x }];
                case 'down':
                    return [{ y: zombie.y + 2, x: zombie.x }];
            }
            return null;
        case 'bomber':
            //  атакует все клетки в радиусе 1 от себя. Самоуничтожается после атаки.
            return [
                pointTarget,
                // по тупому, все клетки по которым будет урон
                // вне зависимости от того, есть у нас там клетка или нет
                { x: pointTarget.x, y: pointTarget.y + 1 },
                { x: pointTarget.x, y: pointTarget.y - 1 },

                { x: pointTarget.x + 1, y: pointTarget.y },
                { x: pointTarget.x - 1, y: pointTarget.y },

                { x: pointTarget.x + 1, y: pointTarget.y + 1 },
                { x: pointTarget.x - 1, y: pointTarget.y - 1 },

                { x: pointTarget.x + 1, y: pointTarget.y - 1 },
                { x: pointTarget.x - 1, y: pointTarget.y + 1 },
            ];
        // todo: не учитывает вхождение в базу
        case 'chaos_knight':
            // ходит буквой Г (конем)
            // всегда на 2 клетки вперед и одну клетку в сторону, сторона и поворот Г определяется рандомно каждый ход
            // не должен возвращать pointTarget
            // (т.к. из-за рандомного движения она не может быть целью)
            // TODO суммарно 8 вариантов, но в зависимости от направления всего по 2 варианта
            switch (zombie.direction) {
                case 'left':
                    return [
                        { y: zombie.y - 1, x: zombie.x - 2 },
                        { y: zombie.y + 1, x: zombie.x - 2 },
                    ];
                case 'right':
                    return [
                        { y: zombie.y - 1, x: zombie.x + 2 },
                        { y: zombie.y + 1, x: zombie.x + 2 },
                    ];
                case 'up':
                    return [
                        { x: zombie.x - 1, y: zombie.y - 2 },
                        { x: zombie.x + 1, y: zombie.y - 2 },
                    ];
                case 'down':
                    return [
                        { x: zombie.x - 1, y: zombie.y + 2 },
                        { x: zombie.x + 1, y: zombie.y + 2 },
                    ];
            }
            return null;
        case 'liner':
        case 'juggernaut':
            return [
                {
                    ...pointTarget,
                    isLinerTarget: true,
                    linerDirection: zombie.direction,
                },
            ];
        default:
            return [pointTarget];
    }
}

/*
возвращает потенциальных дамагеров зомбарей с потенциальными целями (в какую нашу клетку движется)
*/
function getZombieWithPotentialTargets(zombie, base, direction, DANGER_POINTS) {
    const getMax = (maxObj, obj) => (obj.x > maxObj.x ? obj : maxObj);
    const getMin = (minObj, obj) => (obj.x < minObj.x ? obj : minObj);

    // todo: отдать более точную потенциальную цель
    //   нужно отсортировать
    // TODO: УЧЕСТЬ АТАКИ
    const potentialTarget = ((target = null) => {
        let potentialTarget = target;

        // TODO: juggernaut и chaos_knight могут быть внутри!!!
        switch (direction) {
            // TODO в UP DOWN могут быть проблемы. -Y, +Y
            //  если да, то надо поменять местами getMax и getMin
            //  и наверное поменять > и <
            case 'up':
                {
                    const matchedLine = base.filter((b) => b.x === zombie.x);

                    // нужна крайняя нижняя где самый большой Y
                    potentialTarget = matchedLine.length ? matchedLine.reduce(getMax) : null;

                    if (potentialTarget) {
                        return potentialTarget.y < zombie.y ? potentialTarget : null;
                    }
                }
                break;
            case 'down':
                {
                    const matchedLine = base.filter((b) => b.x === zombie.x);

                    // нужна крайняя верхняя где самый маленький Y
                    potentialTarget = matchedLine.length ? matchedLine.reduce(getMin) : null;

                    if (potentialTarget) {
                        return potentialTarget.y > zombie.y ? potentialTarget : null;
                    }
                }
                break;
            case 'left':
                {
                    const matchedLine = base.filter((b) => b.y === zombie.y);

                    // нужна крайняя правая где самый большой X
                    potentialTarget = matchedLine.length ? matchedLine.reduce(getMax) : null;

                    if (potentialTarget) {
                        return potentialTarget.x < zombie.x ? potentialTarget : null;
                    }
                }
                break;
            case 'right':
                {
                    const matchedLine = base.filter((b) => b.y === zombie.y);

                    // нужна крайняя левая где самый меньшее X
                    const potentialTarget = matchedLine.length ? matchedLine.reduce(getMin) : null;

                    if (potentialTarget) {
                        return zombie.x < potentialTarget.x ? potentialTarget : null;
                    }
                }
                break;

            default:
                console.log('ВНЕЗАПНО direction', direction);
                return null;
        }

        return target;
    })();

    if (potentialTarget) {
        const distance = Math.sqrt(
            Math.pow(zombie.x - potentialTarget.x, 2) + Math.pow(zombie.y - potentialTarget.y, 2)
        );

        if (distance === 1) {
            // зомбарь уже пришел к базе
        }

        const dangerZones = getTargetsByZombieType(zombie, base, potentialTarget);

        dangerZones.forEach(({ x, y }) => {
            DANGER_POINTS.add(`${x}:${y}`);
        });

        // вернуть зомбака с потенциальными целями
        // TODO: предсказать джагернаута
        return {
            ...zombie,
            _payload: {
                distance,
                potentialTargets: dangerZones,
            },
        };
    }

    return zombie;
}

/**
 * получить гипотетическую цель зомбака
 */
function getZombieTargets(units = UNITS) {
    const { base, zombies } = units;

    const baseCenter = base.find((b) => b.isHead);

    const CENTER_POINT = `${baseCenter?.x}:${baseCenter?.y}`;
    // todo использовать в potentialKillers
    const baseCenterCoords = new Set([CENTER_POINT]);

    const ranges = new Set();
    // todo: отсортировать по хп
    // const hps = new Set();]

    base.some((b) => {
        ranges.add(b.range);
        if (ranges.size === 2) {
            return true;
        }
    });

    const minRange = Math.min(...ranges);
    const maxRange = Math.max(...ranges);

    const BASE_POINTS = new Set(base.map((b) => `${b.x}:${b.y}`));
    const DANGER_POINTS = new Set();

    const SAFE_POINTS = new Set();

    // кто движется в сторону нашей клетки
    const potentialDamagers = (zombies || []).reduce((acc, z, index, zombies) => {
        const potentialDamagers = zombies
            .map((zombie) =>
                getZombieWithPotentialTargets(zombie, base, z.direction, DANGER_POINTS)
            )
            .filter((z) => z?._payload?.potentialTargets);

        return [...acc, ...potentialDamagers];
    }, []);

    // console.log('DANGER_POINTS',DANGER_POINTS)

    // кто может херахнуть по центру (TODO: если такие есть, перемещать базу)
    const potentialKillers = potentialDamagers.filter((z) => {
        // todo: доработать, т.к. ЦЕНТР состоит из 4х точек, то нужно проверить еще 3 координаты
        //  (-Y, +Y может влиять и на это)

        return (
            z._payload.potentialTargets.some((base) =>
                baseCenterCoords.has(`${base.x}:${base.y}`)
            ) && z.distance <= minRange
        ); // не учитывает расстояние коня
    });

    // console.log('potentialDamagers',potentialDamagers.length)
    // console.log('potentialKillers',potentialKillers.length)

    // TODO если на нас движется киллер, строиться в противоположную сторону?
    const nearestDamagers = potentialDamagers.toSorted(
        (a, b) => a._payload.distance - b._payload.distance
    );
    const nearestKillers = potentialKillers.toSorted(
        (a, b) => a._payload.distance - b._payload.distance
    );

    // console.log('nearestDamagers',nearestDamagers)
    // console.log('nearestKillers',nearestKillers)

    const targetsForShoot = nearestDamagers.filter((z) => z.distance <= minRange);
    const targetsForCenter = nearestDamagers.filter((z) => z.distance <= maxRange);

    // console.log('targetsForShoot',targetsForShoot)
    // console.log('targetsForCenter',targetsForCenter)

    const STRIPE_LENGTH = 10;
    const DON_T_CONSTRUCT_HERE = potentialDamagers
        .map((z) => {
            if (z.isLinerTarget) {
                const direction = z.linerDirection;
                switch (direction) {
                    case 'left': {
                        const res = [];
                        for (let i = z.x; i >= z.x - STRIPE_LENGTH; i--) {
                            res.push({ y: z.y, x: i });
                        }
                        return res;
                    }
                    case 'up': {
                        const res = [];
                        for (let i = z.y; i >= z.y - STRIPE_LENGTH; i--) {
                            res.push({ y: i, x: z.x });
                        }
                        return res;
                    }
                    case 'right': {
                        const res = [];
                        for (let i = z.x; i <= z.x + STRIPE_LENGTH; i++) {
                            res.push({ y: z.y, x: i });
                        }
                        return res;
                    }
                    case 'down': {
                        const res = [];
                        for (let i = z.y; i <= z.y + STRIPE_LENGTH; i++) {
                            res.push({ y: i, x: z.x });
                        }
                        return res;
                    }
                }
            }
            return null;
        })
        .filter((v) => v);

    const WILL_REPAIR_FIRST = potentialDamagers
        .map((z) => {
            if (z.isLinerTarget) {
                const direction = z.linerDirection;

                switch (direction) {
                    case 'left':
                        return Array.from(BASE_POINTS).filter((point) => {
                            const [x, y] = point.split(':');
                            return z.y === y && z.x >= x;
                        });
                    case 'up':
                        return Array.from(BASE_POINTS).filter((point) => {
                            const [x, y] = point.split(':');
                            return z.y >= y && z.x === x;
                        });
                    case 'right':
                        return Array.from(BASE_POINTS).filter((point) => {
                            const [x, y] = point.split(':');
                            return z.y === y && z.x <= x;
                        });
                    case 'down':
                        return Array.from(BASE_POINTS).filter((point) => {
                            const [x, y] = point.split(':');
                            return z.y <= y && z.x === x;
                        });
                }
            }
            return null;
        })
        .filter((v) => v);

    // TODO кажется это не правильно
    // const WILL_REPAIR_FIRST = potentialDamagers.map(z => {
    //     if(z.isLinerTarget){
    //         const direction = z.linerDirection;

    //         switch(direction){
    //             case 'left':
    //                 return Array.from(BASE_POINTS).filter(point => {
    //                     const [x,y] = point.split(':');
    //                     return z.y === y && z.x <= x;
    //                 });
    //             case 'right':
    //                 return Array.from(BASE_POINTS).filter(point => {
    //                     const [x,y] = point.split(':');
    //                     return z.y === y && z.x >= x;
    //                 });
    //             case 'up':
    //                 return Array.from(BASE_POINTS).filter(point => {
    //                     const [x,y] = point.split(':');
    //                     return z.y >= y && z.x === x;
    //                 });
    //             case 'down':
    //                 return Array.from(BASE_POINTS).filter(point => {
    //                     const [x,y] = point.split(':');
    //                     return z.y <= y && z.x === x;
    //                 });
    //         }
    //     }
    //     return null;
    // }).filter(v=>v)

    BASE_POINTS.forEach((point) => {
        if (!DANGER_POINTS.has(point)) {
            SAFE_POINTS.add(point);
        }
    });

    // const ezZombies = nearestDamagers.

    return {
        potentialDamagers,
        potentialKillers,

        nearestDamagers,
        nearestKillers,

        targetsForShoot,
        targetsForCenter,

        DANGER_POINTS,
        BASE_POINTS,
        CENTER_POINTS: baseCenterCoords,
        CENTER_POINT,
        SAFE_POINTS,
        WILL_REPAIR_FIRST,
        DON_T_CONSTRUCT_HERE,
    };
}

const moveBase = (CENTER_POINT, SAFE_POINTS, DANGER_POINTS, WILL_REPAIR_FIRST) => {
    // двигать базу если ШАХ
    // или длетит джагер/хуй в сторону базы
    // todo move to safe zone
    // рандомная точка

    // if(DANGER_POINTS.size){
    //     // точки DANGER_POINTS, которых нет в WILL_REPAIR_FIRST
    //     const DDDANGERRR = new Set(WILL_REPAIR_FIRST);
    //     const MOVE_POINTS = new Set(
    //         [...DANGER_POINTS].filter(point => !DDDANGERRR.has(point))
    //     );

    //     const randomDangerPoint = Array.from(MOVE_POINTS)[Math.floor(Math.random() * MOVE_POINTS.size)];
    //     const [x,y] = randomDangerPoint.split(':');
    //     return { x: Number(x) , y:Number(y) }
    // }

    if (SAFE_POINTS.size === 0) {
        const [x, y] = CENTER_POINT.split(':');
        return { x: Number(x), y: Number(y) };
    }

    const randomSafePoint = Array.from(SAFE_POINTS)[Math.floor(Math.random() * SAFE_POINTS.size)];
    const [x, y] = randomSafePoint.split(':');
    return { x: Number(x), y: Number(y) };

    // todo move для огневой поддержки
};

// const {SAFE_POINTS, CENTER_POINT} = getZombieTargets()
// console.log(moveBase(CENTER_POINT, SAFE_POINTS))

// getZombieTargets();

module.exports = { getZombieTargets, moveBase };
