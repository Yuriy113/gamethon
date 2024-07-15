const UNITS = require('./mock-units.js');

function getNearestZombie(zombies, baseItem) {
    let nearestZombie = zombies[0];
    let minDistance = Infinity;

    const zombieFromLeft = (zombie) => zombie.x < baseItem.x && zombie.direction === 'right';
    const zombieFromRight = (zombie) => zombie.x > baseItem.x && zombie.direction === 'left';
    const zombieFromTop = (zombie) => zombie.y < baseItem.y && zombie.direction === 'up';
    const zombieFromBottom = (zombie) => zombie.y > baseItem.y && zombie.direction === 'down';

    zombies = zombies.filter(
        (z) => zombieFromRight(z) || zombieFromLeft(z) || zombieFromTop(z) || zombieFromBottom(z)
    );

    zombies.sort((a, b) => a.health - b.health);

    zombies.forEach((zombie) => {
        let distance = Math.sqrt(
            Math.pow(zombie.x - baseItem.x, 2) + Math.pow(zombie.y - baseItem.y, 2)
        );

        if (distance < minDistance) {
            nearestZombie = zombie;
            minDistance = distance;
        }
    });

    return {
        minDistance,
        nearestZombie,
    };
}

function getNearestEnemy(enemies = [], baseItem) {
    let nearestEnemy = enemies[0];
    let minDistance = Infinity;

    const enemyFromLeft = (enemy) => enemy.x < baseItem.x;
    const enemyFromRight = (enemy) => enemy.x > baseItem.x;
    const enemyFromTop = (enemy) => enemy.y < baseItem.y;
    const enemyFromBottom = (enemy) => enemy.y > baseItem.y;

    enemies = enemies.filter(
        (z) => enemyFromRight(z) || enemyFromLeft(z) || enemyFromTop(z) || enemyFromBottom(z)
    );

    enemies.forEach((enemy) => {
        let distance = Math.sqrt(
            Math.pow(enemy.x - baseItem.x, 2) + Math.pow(enemy.y - baseItem.y, 2)
        );

        if (distance < minDistance) {
            nearestEnemy = enemy;
            minDistance = distance;
        }
    });

    return {
        minDistance,
        nearestEnemy,
    };
}

function identifyZombie(zombie) {
    if (
        zombie.type === 'normal' ||
        zombie.type === 'bomber' ||
        zombie.type === 'juggernaut' ||
        zombie.type === 'liner'
    ) {
        switch (zombie.direction) {
            case 'left':
                return { x: zombie.x - 1, y: zombie.y };
            case 'right':
                return { x: zombie.x + 1, y: zombie.y };
            case 'up':
                return { x: zombie.x, y: zombie.y - 1 };
            case 'down':
                return { x: zombie.x, y: zombie.y + 1 };
        }
    } else if (zombie.type === 'fast') {
        switch (zombie.direction) {
            case 'left':
                return { x: zombie.x - 2, y: zombie.y };
            case 'right':
                return { x: zombie.x + 2, y: zombie.y };
            case 'up':
                return { x: zombie.x, y: zombie.y - 2 };
            case 'down':
                return { x: zombie.x, y: zombie.y + 2 };
        }
    } else if (zombie.type === 'chaos_knight') {
        switch (zombie.direction) {
            case 'left':
                return { x: zombie.x - 2, y: zombie.y - 1 };
            case 'right':
                return { x: zombie.x + 2, y: zombie.y - 1 };
            case 'up':
                return { x: zombie.x + 1, y: zombie.y - 2 };
            case 'down':
                return { x: zombie.x + 1, y: zombie.y + 2 };
        }
    }
}

function attackNearestTarget(baseItem, zTargetObj, eTargetObj) {
    if (zTargetObj.minDistance < baseItem.range) {
        const zombieNextTickCoords = identifyZombie(zTargetObj.nearestZombie);

        const reqData = {
            blockId: baseItem.id,
            target: {
                x: zombieNextTickCoords.x,
                y: zombieNextTickCoords.y,
            },
        };
        return reqData;
    } else if (eTargetObj.minDistance < baseItem.range) {
        const reqData = {
            blockId: baseItem.id,
            target: {
                x: eTargetObj.nearestEnemy.x,
                y: eTargetObj.nearestEnemy.y,
            },
        };
        return reqData;
    }
}

function attackZombies(UNITS) {
    if (UNITS.zombies) {
        const targets = [];
        for (let base of UNITS.base) {
            nearestZObj = getNearestZombie(UNITS.zombies, base);
            nearestEObj = getNearestEnemy(UNITS.enemyBlocks, base);
            targets.push(attackNearestTarget(base, nearestZObj, nearestEObj));
        }
        return targets.filter((el) => el);
    }
}

console.log(attackZombies(UNITS))

module.exports = attackZombies;
