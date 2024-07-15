const getnewConstruction = require('./createNewConstruction.js');
const attackZombies = require('./attackNearestZombie.js');
const { getZombieTargets, moveBase } = require('./moveBase.js');
const { drawMap } = require('./drawMap.js');
const { turnEndsInMs } = require('./mock-units.js');

const token = '66855629dd2c166855629dd2c4';
const baseUrl = 'https://games-test.datsteam.dev/';
//  const baseUrl = 'https://games.datsteam.dev/';

// const getUnits = 'play/zombidef/units'; //Type get
// const getMapObjects = 'play/zombidef/world'; //Type get
// const getRound = 'rounds/zombidef'; //Type get
// const actionCommand = 'play/zombidef/command'; //Type POST

(async () => {
    try {
        const whenStart = await putParticipate();
        console.log(whenStart);

        if (whenStart.startsInSec >= 0) {
            let timeInMs = whenStart.startsInSec * 1000;

            await sleep(timeInMs);

            gameLoop();
        }
    } catch (e) {
        console.log('Error', e);
    }
})();

// gameLoop();

async function gameLoop() {
    console.log('game started');
    const world = await getWord();

    let time = 10;

    async function oneGameTick() {
        const units = await getUnits();

        if (!units.gameEndedAt) {
            const {
                SAFE_POINTS,
                CENTER_POINT,
                nearestDamagers,
                nearestKillers,
                WILL_REPAIR_FIRST,
                DANGER_POINTS,
                DON_T_CONSTRUCT_HERE,
            } = getZombieTargets(units);

            // const move = moveBase(CENTER_POINT, SAFE_POINTS, DANGER_POINTS, WILL_REPAIR_FIRST);
            const move = {};

            const req = {
                attack: attackZombies(units),
                build: getnewConstruction(units, world, WILL_REPAIR_FIRST, DON_T_CONSTRUCT_HERE),
                moveBase: move,
            };

            const postAnswer = await postCommand(req);
            console.log(postAnswer);
            drawMap(units.base, units.zombies, units.enemyBlocks);
        } else {
            console.log('GAME OVER');
        }

        time = turnEndsInMs + 10; 

        console.log(units.player);

        setTimeout(oneGameTick, time);
    }

    setTimeout(oneGameTick, time)
}

async function putParticipate() {
    const data = await fetch(baseUrl + '/play/zombidef/participate', {
        method: 'PUT',
        headers: { 'X-Auth-Token': token },
    });
    return await data.json();
}

async function getRounds() {
    const data = await fetch(baseUrl + 'rounds/zombidef', {
        method: 'GET',
        headers: { 'X-Auth-Token': token },
    });

    return await data.json();
}

async function getWord() {
    const data = await fetch(baseUrl + 'play/zombidef/world', {
        method: 'GET',
        headers: { 'X-Auth-Token': token },
    });

    return await data.json();
}

async function getUnits() {
    const data = await fetch(baseUrl + 'play/zombidef/units', {
        method: 'GET',
        headers: { 'X-Auth-Token': token },
    });

    return await data.json();
}

async function postCommand(body) {
    const data = await fetch(baseUrl + 'play/zombidef/command', {
        method: 'POST',
        headers: { 'X-Auth-Token': token },
        body: JSON.stringify(body),
    });

    return await data.json();
}

function sleep(timeInMs) {
    return new Promise((resolve) => setTimeout(resolve, timeInMs));
}

// console.timeEnd();

// console.log('req: ', req);
// console.log('base size: ', units.base.length);
// console.log('move',move);
// console.log('nearestDamagers',nearestDamagers.length);
// console.log('nearestKillers',nearestKillers.length);
