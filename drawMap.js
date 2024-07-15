const UNITS = require('./mock-units.js');

function drawMap(base, zombies, enemies) {
    const allObjects = [...base, ...(zombies || []), ...(enemies || [])];

    const minX = Math.min(...allObjects.map((obj) => obj.x));
    const maxX = Math.max(...allObjects.map((obj) => obj.x));
    const minY = Math.min(...allObjects.map((obj) => obj.y));
    const maxY = Math.max(...allObjects.map((obj) => obj.y));

    const grid = Array.from({ length: maxY - minY + 1 }, () => Array(maxX - minX + 1).fill(' '));

    base.forEach((obj) => {
        if (obj.isHead) {
            grid[obj.y - minY][obj.x - minX] = '@';
        } else {
            grid[obj.y - minY][obj.x - minX] = '#';
        }
    });

    if (zombies) {
        zombies.forEach((obj) => {
            // grid[obj.y - minY][obj.x - minX] = 'Z';
            grid[obj.y - minY][obj.x - minX] = obj.type.slice(0,1).toUpperCase();
        });
    }

    if (enemies) {
        enemies.forEach((obj) => {
            grid[obj.y - minY][obj.x - minX] = 'E';
        });
    }

    grid.forEach((row) => {
        console.log(row.join(''));
    });
}

// drawMap(UNITS.base, UNITS.zombies, UNITS.enemyBlocks);
module.exports = { drawMap };
