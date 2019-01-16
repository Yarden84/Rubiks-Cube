/*----------------*/
/*    Settings    */
/*----------------*/
var switchCol = false;
var switchRow = false;
var changeSwitchCol = false;
var changeSwitchRow = false;

var chooseCol = 'left';
var chooseRow = 'none';
var chosenArr = [];

var cubeLeftCol = document.getElementsByClassName('left');
var cubeCenterCol = document.getElementsByClassName('center');
var cubeRightCol = document.getElementsByClassName('right');
var cubeTopRow = document.getElementsByClassName('top');
var cubeMidRow = document.getElementsByClassName('mid');
var cubeBottomRow = document.getElementsByClassName('bottom');
console.log('cubeLeftCol = ', cubeLeftCol);


var cubeDegrees = new Map();
var cubeLastChange = new Map();
var cubePosNeg = new Map();

for (i = 1; i <= 29; i++) {
    cubeDegrees.set('largeCube' + i, [0, 0, 0]);
    cubeLastChange.set('largeCube' + i, '');
    cubePosNeg.set('largeCube' + i, 1);
}

console.log('cubeDegrees =', cubeDegrees);

/*-------------------------------------------------------------------------------------------------*/
var degrees = 0;


/*-----------------*/
/*    Functions    */
/*-----------------*/

function chooseMark(e) {
    if (e.keyCode == 13) { //Enter key
        if (changeSwitchCol) {
            switchCol = true;
            changeSwitchCol = false;
        }
        if (changeSwitchRow) {
            switchRow = true;
            changeSwitchRow = false;
        }
    }
}



function playRC(e) {
    //Move Cube Mark
    if (!(switchCol) && !(switchRow)) {
        switch (e.keyCode) {
            case 37: //Left 
                chooseRow = 'none';
                switch (chooseCol) {
                    case 'none':
                        markCol(cubeLeftCol, 0);
                        chooseCol = 'left';
                        break;
                    case 'left':
                        markCol(cubeRightCol, 200);
                        chooseCol = 'right';
                        break;
                    case 'right':
                        markCol(cubeCenterCol, 100);
                        chooseCol = 'center';
                        break;
                    case 'center':
                        markCol(cubeLeftCol, 0);
                        chooseCol = 'left';
                        break;
                }
                changeSwitchCol = true;
                changeSwitchRow = false;
                break;
            case 38: //Up
                chooseCol = 'none';
                switch (chooseRow) {
                    case 'none':
                        markRow(cubeTopRow, 0);
                        chooseRow = 'top';
                        break;
                    case 'top':
                        markRow(cubeBottomRow, 200);
                        chooseRow = 'bottom';
                        break;
                    case 'bottom':
                        markRow(cubeMidRow, 100);
                        chooseRow = 'mid';
                        break;
                    case 'mid':
                        markRow(cubeTopRow, 0);
                        chooseRow = 'top';
                        break;
                }
                changeSwitchCol = false;
                changeSwitchRow = true;
                break;
            case 39:  //Right
                chooseRow = 'none';
                switch (chooseCol) {
                    case 'none':
                        markCol(cubeLeftCol, 0);
                        chooseCol = 'left';
                        break;
                    case 'left':
                        markCol(cubeCenterCol, 100);
                        chooseCol = 'center';
                        break;
                    case 'center':
                        markCol(cubeRightCol, 200);
                        chooseCol = 'right';
                        break;
                    case 'right':
                        markCol(cubeLeftCol, 0);
                        chooseCol = 'left';
                        break;
                }
                changeSwitchCol = true;
                changeSwitchRow = false;
                break;
            case 40: //Down     
                chooseCol = 'none';
                switch (chooseRow) {
                    case 'none':
                        markRow(cubeTopRow, 0);
                        chooseRow = 'top';
                        break;
                    case 'top':
                        markRow(cubeMidRow, 100);
                        chooseRow = 'mid';
                        break;
                    case 'mid':
                        markRow(cubeBottomRow, 200);
                        chooseRow = 'bottom';
                        break;
                    case 'bottom':
                        markRow(cubeTopRow, 0);
                        chooseRow = 'top';
                        break;
                }
                changeSwitchCol = false;
                changeSwitchRow = true;
                break;
        }
    }

    console.log('switchCol = ', switchCol);
    console.log('switchRow = ', switchRow);

    //Move Cube
    if (switchCol) {
        var chosen = new Set(chosenArr);
        var uniqueChosenArr = [...chosen];
        switch (e.keyCode) {
            case 38: //Up
                for (i = 0; i < uniqueChosenArr.length; i++) {


                    rotateCube(uniqueChosenArr[i], 90, 'up');
                    // console.log('cubeAxis1 = ',cubeAxis.get(uniqueChosenArr[i]));
                    // changeAxis(uniqueChosenArr[i], 'up');
                    cubeLastChange.set(uniqueChosenArr[i], 'up');
                    // cubePosNeg.set(uniqueChosenArr[i], cubePosNeg.get(uniqueChosenArr[i]) * (-1));

                }

                let upId1 = document.querySelectorAll('.' + chooseCol + '.top1')[0].id;
                let upId2 = document.querySelectorAll('.' + chooseCol + '.top2')[0].id;
                let upId3 = document.querySelectorAll('.' + chooseCol + '.top3')[0].id;
                let upId4 = document.querySelectorAll('.' + chooseCol + '.mid1')[0].id;
                let upId5 = document.querySelectorAll('.' + chooseCol + '.mid3')[0].id;
                let upId6 = document.querySelectorAll('.' + chooseCol + '.bottom1')[0].id;
                let upId7 = document.querySelectorAll('.' + chooseCol + '.bottom2')[0].id;
                let upId8 = document.querySelectorAll('.' + chooseCol + '.bottom3')[0].id;

                changeCubePlace(upId1, 'top', 'top', 'top1', 'top3');
                changeCubePlace(upId2, 'top', 'mid', 'top2', 'mid3');
                changeCubePlace(upId3, 'top', 'bottom', 'top3', 'bottom3');
                changeCubePlace(upId4, 'mid', 'top', 'mid1', 'top2');
                changeCubePlace(upId5, 'mid', 'bottom', 'mid3', 'bottom2');
                changeCubePlace(upId6, 'bottom', 'top', 'bottom1', 'top1');
                changeCubePlace(upId7, 'bottom', 'mid', 'bottom2', 'mid1');
                changeCubePlace(upId8, 'bottom', 'bottom', 'bottom3', 'bottom1');

                changeCubePlace(upId1, chooseCol, chooseCol, chooseCol + "1", chooseCol + "3");
                changeCubePlace(upId2, chooseCol, chooseCol, chooseCol + "2", chooseCol + "3");
                changeCubePlace(upId3, chooseCol, chooseCol, chooseCol + "3", chooseCol + "3");
                changeCubePlace(upId4, chooseCol, chooseCol, chooseCol + "1", chooseCol + "2");
                changeCubePlace(upId5, chooseCol, chooseCol, chooseCol + "3", chooseCol + "2");
                changeCubePlace(upId6, chooseCol, chooseCol, chooseCol + "1", chooseCol + "1");
                changeCubePlace(upId7, chooseCol, chooseCol, chooseCol + "2", chooseCol + "1");
                changeCubePlace(upId8, chooseCol, chooseCol, chooseCol + "3", chooseCol + "1");

                changeSwitchCol = true;
                switchCol = false;
                break;

            case 40: //Down
                for (i = 0; i < uniqueChosenArr.length; i++) {
                    cubeDegrees.set(uniqueChosenArr[i], [cubeDegrees.get(uniqueChosenArr[i])[0] - 90, cubeDegrees.get(uniqueChosenArr[i])[1]]);
                    document.getElementById(uniqueChosenArr[i]).style.transform = "translateZ(var(--negTransLarge)) rotateX(" + cubeDegrees.get(uniqueChosenArr[i])[0] + "deg) rotateY(" + cubeDegrees.get(uniqueChosenArr[i])[1] + "deg)";
                    document.getElementById(uniqueChosenArr[i]).style.transition = "transform 0.7s";
                }

                let downId1 = document.querySelectorAll('.' + chooseCol + '.top1')[0].id;
                let downId2 = document.querySelectorAll('.' + chooseCol + '.top2')[0].id;
                let downId3 = document.querySelectorAll('.' + chooseCol + '.top3')[0].id;
                let downId4 = document.querySelectorAll('.' + chooseCol + '.mid1')[0].id;
                let downId5 = document.querySelectorAll('.' + chooseCol + '.mid3')[0].id;
                let downId6 = document.querySelectorAll('.' + chooseCol + '.bottom1')[0].id;
                let downId7 = document.querySelectorAll('.' + chooseCol + '.bottom2')[0].id;
                let downId8 = document.querySelectorAll('.' + chooseCol + '.bottom3')[0].id;

                changeCubePlace(downId1, 'top', 'bottom', 'top1', 'bottom1');
                changeCubePlace(downId2, 'top', 'mid', 'top2', 'mid1');
                changeCubePlace(downId3, 'top', 'top', 'top3', 'top1');
                changeCubePlace(downId4, 'mid', 'bottom', 'mid1', 'bottom2');
                changeCubePlace(downId5, 'mid', 'top', 'mid3', 'top2');
                changeCubePlace(downId6, 'bottom', 'bottom', 'bottom1', 'bottom3');
                changeCubePlace(downId7, 'bottom', 'mid', 'bottom2', 'mid3');
                changeCubePlace(downId8, 'bottom', 'top', 'bottom3', 'top3');

                changeCubePlace(downId1, chooseCol, chooseCol, chooseCol + "1", chooseCol + "1");
                changeCubePlace(downId2, chooseCol, chooseCol, chooseCol + "2", chooseCol + "1");
                changeCubePlace(downId3, chooseCol, chooseCol, chooseCol + "3", chooseCol + "1");
                changeCubePlace(downId4, chooseCol, chooseCol, chooseCol + "1", chooseCol + "2");
                changeCubePlace(downId5, chooseCol, chooseCol, chooseCol + "3", chooseCol + "2");
                changeCubePlace(downId6, chooseCol, chooseCol, chooseCol + "1", chooseCol + "3");
                changeCubePlace(downId7, chooseCol, chooseCol, chooseCol + "2", chooseCol + "3");
                changeCubePlace(downId8, chooseCol, chooseCol, chooseCol + "3", chooseCol + "3");

                changeSwitchCol = true;
                switchCol = false;
                break;

        }

    }

    if (switchRow) {
        var chosen = new Set(chosenArr);
        var uniqueChosenArr = [...chosen];
        switch (e.keyCode) {
            case 37: //Left
                for (i = 0; i < uniqueChosenArr.length; i++) {

                    // (i === (uniqueChosenArr.length - 1) ? rotateCube(uniqueChosenArr[i], 0, -90, 90) : rotateCube(uniqueChosenArr[i], 0, (-90 * cubePosNeg.get(uniqueChosenArr[i])), 0));
                    (i === (uniqueChosenArr.length - 1) ? rotateCube(uniqueChosenArr[i], -90, 'leftCol') : rotateCube(uniqueChosenArr[i], (-90 * cubePosNeg.get(uniqueChosenArr[i])), 'left'));

                    // changeAxis(uniqueChosenArr[i], 'left');
                    cubeLastChange.set(uniqueChosenArr[i], 'left');

                }

                let leftId1 = document.querySelectorAll('.' + chooseRow + '.left1')[0].id;
                let leftId2 = document.querySelectorAll('.' + chooseRow + '.left2')[0].id;
                let leftId3 = document.querySelectorAll('.' + chooseRow + '.left3')[0].id;
                let leftId4 = document.querySelectorAll('.' + chooseRow + '.center1')[0].id;
                let leftId5 = document.querySelectorAll('.' + chooseRow + '.center3')[0].id;
                let leftId6 = document.querySelectorAll('.' + chooseRow + '.right1')[0].id;
                let leftId7 = document.querySelectorAll('.' + chooseRow + '.right2')[0].id;
                let leftId8 = document.querySelectorAll('.' + chooseRow + '.right3')[0].id;

                changeCubePlace(leftId1, 'left', 'left', 'left1', 'left3');
                changeCubePlace(leftId2, 'left', 'center', 'left2', 'center3');
                changeCubePlace(leftId3, 'left', 'right', 'left3', 'right3');
                changeCubePlace(leftId4, 'center', 'left', 'center1', 'left2');
                changeCubePlace(leftId5, 'center', 'right', 'center3', 'right2');
                changeCubePlace(leftId6, 'right', 'left', 'right1', 'left1');
                changeCubePlace(leftId7, 'right', 'center', 'right2', 'center1');
                changeCubePlace(leftId8, 'right', 'right', 'right3', 'right1');

                changeCubePlace(leftId1, chooseRow, chooseRow, chooseRow + "1", chooseRow + "3");
                changeCubePlace(leftId2, chooseRow, chooseRow, chooseRow + "2", chooseRow + "3");
                changeCubePlace(leftId3, chooseRow, chooseRow, chooseRow + "3", chooseRow + "3");
                changeCubePlace(leftId4, chooseRow, chooseRow, chooseRow + "1", chooseRow + "2");
                changeCubePlace(leftId5, chooseRow, chooseRow, chooseRow + "3", chooseRow + "2");
                changeCubePlace(leftId6, chooseRow, chooseRow, chooseRow + "1", chooseRow + "1");
                changeCubePlace(leftId7, chooseRow, chooseRow, chooseRow + "2", chooseRow + "1");
                changeCubePlace(leftId8, chooseRow, chooseRow, chooseRow + "3", chooseRow + "1");


                console.log('left works');
                changeSwitchRow = true;
                switchRow = false;
                break;

            case 39: //Right
                for (i = 0; i < uniqueChosenArr.length; i++) {
                    cubeDegrees.set(uniqueChosenArr[i], [cubeDegrees.get(uniqueChosenArr[i])[0], cubeDegrees.get(uniqueChosenArr[i])[1] + 90]);
                    document.getElementById(uniqueChosenArr[i]).style.transform = "translateZ(var(--negTransLarge)) rotateY(" + cubeDegrees.get(uniqueChosenArr[i])[1] + "deg)  rotateX(" + cubeDegrees.get(uniqueChosenArr[i])[0] + "deg)" + (i === (uniqueChosenArr.length - 1) ? " rotateZ(90deg)" : "");
                    document.getElementById(uniqueChosenArr[i]).style.transition = "transform 0.7s";
                }

                let rightId1 = document.querySelectorAll('.' + chooseRow + '.left1')[0].id;
                let rightId2 = document.querySelectorAll('.' + chooseRow + '.left2')[0].id;
                let rightId3 = document.querySelectorAll('.' + chooseRow + '.left3')[0].id;
                let rightId4 = document.querySelectorAll('.' + chooseRow + '.center1')[0].id;
                let rightId5 = document.querySelectorAll('.' + chooseRow + '.center3')[0].id;
                let rightId6 = document.querySelectorAll('.' + chooseRow + '.right1')[0].id;
                let rightId7 = document.querySelectorAll('.' + chooseRow + '.right2')[0].id;
                let rightId8 = document.querySelectorAll('.' + chooseRow + '.right3')[0].id;

                changeCubePlace(rightId1, 'left', 'right', 'left1', 'right1');
                changeCubePlace(rightId2, 'left', 'center', 'left2', 'center1');
                changeCubePlace(rightId3, 'left', 'left', 'left3', 'left1');
                changeCubePlace(rightId4, 'center', 'right', 'center1', 'right2');
                changeCubePlace(rightId5, 'center', 'left', 'center3', 'left2');
                changeCubePlace(rightId6, 'right', 'right', 'right1', 'right3');
                changeCubePlace(rightId7, 'right', 'center', 'right2', 'center3');
                changeCubePlace(rightId8, 'right', 'left', 'right3', 'left3');

                changeCubePlace(rightId1, chooseRow, chooseRow, chooseRow + "1", chooseRow + "1");
                changeCubePlace(rightId2, chooseRow, chooseRow, chooseRow + "2", chooseRow + "1");
                changeCubePlace(rightId3, chooseRow, chooseRow, chooseRow + "3", chooseRow + "1");
                changeCubePlace(rightId4, chooseRow, chooseRow, chooseRow + "1", chooseRow + "2");
                changeCubePlace(rightId5, chooseRow, chooseRow, chooseRow + "3", chooseRow + "2");
                changeCubePlace(rightId6, chooseRow, chooseRow, chooseRow + "1", chooseRow + "3");
                changeCubePlace(rightId7, chooseRow, chooseRow, chooseRow + "2", chooseRow + "3");
                changeCubePlace(rightId8, chooseRow, chooseRow, chooseRow + "3", chooseRow + "3");


                console.log('left works');
                changeSwitchRow = true;
                switchRow = false;
                break;
        }
    }

    console.log("chosenArr = ", chosenArr);
    // console.log('cubeAxis of largeCube7 =', cubeAxis.get('largeCube7'));
}





function markCol(cubeFace, placeEle) {
    document.getElementById('rowContainer').style.display = "none";
    document.getElementById('colContainer').style.display = "initial";
    document.getElementById('colContainer').style.left = placeEle + "px";
    for (i = 0; i < cubeFace.length; i++) {
        chosenArr[i] = cubeFace[i].id;
    }
    chosenArr[cubeFace.length] = document.getElementById('colContainer').parentElement.id;
}

function markRow(cubeFace, placeEle) {
    document.getElementById('colContainer').style.display = "none";
    document.getElementById('rowContainer').style.display = "initial";
    document.getElementById('rowContainer').style.left = placeEle + "px";
    for (i = 0; i < cubeFace.length; i++) {
        chosenArr[i] = cubeFace[i].id;
    }
    chosenArr[cubeFace.length] = document.getElementById('rowContainer').parentElement.id;
}

function changeCubePlace(id, class1Remove, class1Add, class2Remove, class2Add) {

    document.getElementById(id).classList.add(class1Add, class2Add);

    if (class2Remove !== class2Add) {
        document.getElementById(id).classList.remove(class2Remove);
    }

    if (class1Remove !== class1Add) {
        document.getElementById(id).classList.remove(class1Remove);
    }

}

function rotateCube(cube, num, keyDir) {

    switch (keyDir) {
        case 'up':
            switch (cubeLastChange.get(cube)) {
                case 'left':
                    cubeDegrees.set(cube, [cubeDegrees.get(cube)[2], cubeDegrees.get(cube)[1], cubeDegrees.get(cube)[0]]);
                    cubeDegrees.set(cube, [cubeDegrees.get(cube)[0] + num, cubeDegrees.get(cube)[1], cubeDegrees.get(cube)[2]]);
                    break;
                default:
                    cubeDegrees.set(cube, [cubeDegrees.get(cube)[0] + num, cubeDegrees.get(cube)[1], cubeDegrees.get(cube)[2]]);
                    break;
            }
            cubePosNeg.set(cube, cubePosNeg.get(cube) * (-1));
            break;
        case 'left':
            switch (cubeLastChange.get(cube)) {
                case 'up':
                    cubeDegrees.set(cube, [cubeDegrees.get(cube)[0], cubeDegrees.get(cube)[1] + num, cubeDegrees.get(cube)[2]]);
                    cubeDegrees.set(cube, [cubeDegrees.get(cube)[0], cubeDegrees.get(cube)[2], cubeDegrees.get(cube)[1]]);
                    // cubeDegrees.set(cube, [cubeDegrees.get(cube)[0], cubeDegrees.get(cube)[1], cubeDegrees.get(cube)[2] + num]);
                    break;
                default:
                    cubeDegrees.set(cube, [cubeDegrees.get(cube)[0], cubeDegrees.get(cube)[1] + num, cubeDegrees.get(cube)[2]]);
                    break;
            }

            break;
        case 'leftCol':
            cubeDegrees.set(cube, [cubeDegrees.get(cube)[0], cubeDegrees.get(cube)[1] + num, 90]);
            break;
    }


    // cubePosNeg.set(cube, cubePosNeg.get(cube) * (-1));




    document.getElementById(cube).style.transform = "translateZ(var(--negTransLarge)) rotateX(" + cubeDegrees.get(cube)[0] + "deg)  rotateY(" + cubeDegrees.get(cube)[1] + "deg) rotateZ(" + cubeDegrees.get(cube)[2] + "deg)";

    document.getElementById(cube).style.transition = "transform 0.7s";

    // console.log('cubeAxis in rotateCube =', cubeAxis.get(cube));
    // console.log('cubeDegrees in rotateCube =', cubeDegrees.get(cube));
}




// left = 37
// up = 38
// right = 39
// down = 40
