
//получаем массив опасных точек - на которых нельзя строить
const getDangersPoints = (zombies, mapElements,enemyBlocks,DON_T_CONSTRUCT_HERE) => {
    let newCoordinates = [];
    let zombiePoints = [];
    let worldDangersPointsResultArray=[];

    if(mapElements){
    //точка не должна быть стена и type: 'default' зомби рассадники
     worldDangersPointsResultArray = mapElements.map(item => {
        return {
            [`${item.x}_${item.y}`]: item.type
        };
    });
    }



    if(mapElements){
        //не должно строиться рядом с зомбирассадником
        mapElements.forEach(item => {
            if (item.type === 'default') {
                newCoordinates.push({x: item.x + 1, y: item.y});
                newCoordinates.push({x: item.x - 1, y: item.y});
                newCoordinates.push({x: item.x, y: item.y + 1});
                newCoordinates.push({x: item.x, y: item.y - 1});
            }
        });
    }

    for (let i = DON_T_CONSTRUCT_HERE.length - 1; i >= 0; i--) {
        let point = DON_T_CONSTRUCT_HERE[i];
        if(!point){
            continue;
        }
        const {x,y} = point;
        newCoordinates.push({x: x, y: y});
    }


    if(enemyBlocks){
    //enemyBlocks
    enemyBlocks.forEach(item => {
            newCoordinates.push({x: item.x + 1, y: item.y});
            newCoordinates.push({x: item.x - 1, y: item.y});
            newCoordinates.push({x: item.x, y: item.y + 1});
            newCoordinates.push({x: item.x, y: item.y - 1});
            newCoordinates.push({x: item.x + 1, y: item.y+1});
            newCoordinates.push({x: item.x + 1, y: item.y -1});
            newCoordinates.push({x: item.x-1, y: item.y -1});
            newCoordinates.push({x: item.x-1, y: item.y + 1});
    });}


    let newCoordinatesResultArray = newCoordinates.map(item => {
        return {
            [`${item.x}_${item.y}`]: 'cantBuild'
        };
    });

if(zombies){

    //точка не должна строиться на зомби
     zombiePoints = zombies.map(item => {
        return {
            [`${item.x}_${item.y}`]: item.type
        };
    });
}
    return worldDangersPointsResultArray.concat(zombiePoints).concat(newCoordinatesResultArray);
}

//получаем массив прилегающих точек к базе
const getAdjacentPoints = (units) => {
    //удаляем из сущности текущие координаты базы
    let basePoints = units.base.map(item => {
        return {
            [`${item.x}_${item.y}`]: 'base'
        };
    });


    let modifiedPoints = [];
    let newPoint ;
    let pointKey ='';
    let isContained =false;
    for (let point of units.base) {

        newPoint = {x: point.x + 1, y: point.y};
        pointKey = `${newPoint.x}_${newPoint.y}`;
        isContained = basePoints.some(item => Object.keys(item)[0] === pointKey);
        if (!isContained) {
            modifiedPoints.push(newPoint);
        }

        newPoint = {x: point.x - 1, y: point.y};
        pointKey = `${newPoint.x}_${newPoint.y}`;
        isContained = basePoints.some(item => Object.keys(item)[0] === pointKey);
        if (!isContained) {
            modifiedPoints.push(newPoint);
        }

        newPoint = {x: point.x, y: point.y + 1};
        pointKey = `${newPoint.x}_${newPoint.y}`;
        isContained = basePoints.some(item => Object.keys(item)[0] === pointKey);
        if (!isContained) {
            modifiedPoints.push(newPoint);
        }

        newPoint = {x: point.x, y: point.y - 1};
        pointKey = `${newPoint.x}_${newPoint.y}`;
        isContained = basePoints.some(item => Object.keys(item)[0] === pointKey);
        if (!isContained) {
            modifiedPoints.push(newPoint);
        }
    }
    return modifiedPoints;
}

//просчитываем дистанции до зомби
const getDistanceFromZombies = (potentialCoordinates,zombies) => {
    let result=[];

    let resultCoordinates = {
        // Добавление нового элемента
        addElement: function(x, y, element) {
            const key = `${x}_${y}`;
            if (this[key]) {
                this[key].push(element);
            } else {
                this[key] = [element];
            }
        },
    };


if(zombies){
    zombies.forEach(item => {
        potentialCoordinates.forEach(itemPoint => {
            let distance = Math.sqrt(
                Math.pow(itemPoint.x - item.x, 2) + Math.pow(itemPoint.y - item.y, 2)
            );
            resultCoordinates.addElement(itemPoint.x,itemPoint.y,distance);
        });
    });

}

    let average = 0;
    for (let key in resultCoordinates) {
        if(key === 'addElement') continue;
        average = 0;
        let elements = key.split("_");
        if (resultCoordinates[key].length !== 0) {
            let min = Math.min(...resultCoordinates[key]);
            // for (let i = 0; i < resultCoordinates[key].length; i++) {
            //     sum += resultCoordinates[key][i];
            // }
            average = min;
        }
        result.push({ x: elements[0], y:  elements[1], distance: average});
    }
    return result;
}


// куда ставим новую сущность базы
const getnewConstruction = (units,world,shouldrepair,DON_T_CONSTRUCT_HERE) => {
    let coordinatesArray = [];
    //получает текущие позиции зомби
    let zombies = units.zombies;
    //console.log('zombies: ', zombies);

    //получает текущие позиции зомби
    let enemyBlocks = units.enemyBlocks;
    //console.log('enemyBlocks: ', enemyBlocks);

    //получаем количество золота у нашей базы
    let gold = units.player.gold;
    let mapElements = world.zpots;
    //console.log('gold: ', gold);

    //находим опасные точки, на которых нельзя строить на текущий момент карты
    let dangersPoints = getDangersPoints(zombies,mapElements,enemyBlocks,DON_T_CONSTRUCT_HERE);
    //console.log('dangersPoints: ', dangersPoints);

    //находим точки, которые прилегают в текущий момент к базе
    let potentialCoordinates = getAdjacentPoints(units);
    for (let i = potentialCoordinates.length - 1; i >= 0; i--) {
        let point = potentialCoordinates[i];
        let pointKey = `${point.x}_${point.y}`;

        // Проверяем, содержится ли значение в transformedArray
        let isContained = dangersPoints.some(item => Object.keys(item)[0] === pointKey);

        if (isContained) {
            potentialCoordinates.splice(i, 1);
        }
    }
    //console.log('potentialCoordinates: ', potentialCoordinates);




    let resultCoordinates = getDistanceFromZombies(potentialCoordinates,zombies);
    // Сортировка массива в порядке убывания по полю distance
    resultCoordinates.sort((a, b) => b.distance - a.distance);
    //  console.log('resultCoordinates: ', resultCoordinates);

     if((gold === 1) && shouldrepair){
        for (let i = shouldrepair.length - 1; i >= 0; i--) {
            let point = shouldrepair[i];
            const [x,y] = point.split(':');
            
            resultCoordinates.forEach(item => {
                if((item.x == x) && (item.y == y)){
                    let coordinates = {
                        'x': Number(item.x),
                        'y': Number(item.y)
                    };
                    coordinatesArray.push(coordinates);
                    return coordinatesArray;
                }
            });
        }
     }
     else{   
        for (let i = resultCoordinates.length - 1; i >= 0; i--) {
            let point = resultCoordinates[i];
            
            let pointKey = `${point.x}_${point.y}`;
    
            // Проверяем, содержится ли значение в transformedArray
            let isContained = dangersPoints.some(item => Object.keys(item)[0] === pointKey);
    
            if (isContained) {
                potentialCoordinates.splice(i, 1);
            }
        }


     }

    let firstNElements = resultCoordinates.slice(0, gold);
    firstNElements.forEach(item => {
        let coordinates = {
            'x': Number(item.x),
            'y': Number(item.y)
        };
        coordinatesArray.push(coordinates);
    });

    //console.log('coordinatesArray: ', coordinatesArray);

    return coordinatesArray;
}

module.exports = getnewConstruction;


//выполняем строительство базы
// let result = getnewConstruction();



