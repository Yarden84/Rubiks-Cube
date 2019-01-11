/*----------------*/
/*    Settings    */
/*----------------*/
var chosenCubes = false;

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

for (i = 1; i <= 29; i++) {
    cubeDegrees.set('largeCube' + i, [0, 0]);
}

console.log('cubeDegrees =', cubeDegrees);

/*-------------------------------------------------------------------------------------------------*/
var degrees = 0;


/*-----------------*/
/*    Functions    */
/*-----------------*/

function chooseMark(e) {
    if (e.keyCode == 13) { //Enter key
        // alert('enter clicked');
        chosenCubes = true;
    }
}



function playRC(e) {
    //Move Cube Mark
    if (!(chosenCubes)) {
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
                break;
            case 38: //Up
                chooseCol = 'none';
                switch (chooseRow) {
                    case 'none':
                        markRow(cubeTopRow, 0);
                        chooseRow = 'up';
                        break;
                    case 'up':
                        markRow(cubeBottomRow, 200);
                        chooseRow = 'down';
                        break;
                    case 'down':
                        markRow(cubeMidRow, 100);
                        chooseRow = 'middle';
                        break;
                    case 'middle':
                        markRow(cubeTopRow, 0);
                        chooseRow = 'up';
                        break;
                }
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
                break;
            case 40: //Down
                chooseCol = 'none';
                switch (chooseRow) {
                    case 'none':
                        markRow(cubeTopRow, 0);
                        chooseRow = 'up';
                        break;
                    case 'up':
                        markRow(cubeMidRow, 100);
                        chooseRow = 'middle';
                        break;
                    case 'middle':
                        markRow(cubeBottomRow, 200);
                        chooseRow = 'down';
                        break;
                    case 'down':
                        markRow(cubeTopRow, 0);
                        chooseRow = 'up';
                        break;
                }
                break;
        }
    }

    //Move Cube
    if (chosenCubes) {
        var chosen = new Set(chosenArr);
        var uniqueChosenArr = [...chosen];
        switch (e.keyCode) {
            case 38:
                for (i = 0; i < uniqueChosenArr.length; i++) {
                    cubeDegrees.set(uniqueChosenArr[i], [cubeDegrees.get(uniqueChosenArr[i])[0] + 90, cubeDegrees.get(uniqueChosenArr[i])[1]]);
                    document.getElementById(uniqueChosenArr[i]).style.transform = "translateZ(var(--negTransLarge))  rotateX(" + cubeDegrees.get(uniqueChosenArr[i])[0] + "deg)";
                    document.getElementById(uniqueChosenArr[i]).style.transition = "transform 0.7s";
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

                console.log('largeCube1 = ', document.getElementById('largeCube1'));
                console.log('largeCube2 = ', document.getElementById('largeCube2'));
                console.log('largeCube3 = ', document.getElementById('largeCube3'));
                console.log('largeCube4 = ', document.getElementById('largeCube4'));
                console.log('largeCube5 = ', document.getElementById('largeCube5'));
                console.log('largeCube6 = ', document.getElementById('largeCube6'));
                console.log('largeCube7 = ', document.getElementById('largeCube7'));
                console.log('largeCube8 = ', document.getElementById('largeCube8'));
                console.log('largeCube9 = ', document.getElementById('largeCube9'));


                chosenCubes = false;
                break;

            case 40:
                for (i = 0; i < uniqueChosenArr.length; i++) {
                    cubeDegrees.set(uniqueChosenArr[i], [cubeDegrees.get(uniqueChosenArr[i])[0] - 90, cubeDegrees.get(uniqueChosenArr[i])[1]]);
                    document.getElementById(uniqueChosenArr[i]).style.transform = "translateZ(var(--negTransLarge)) rotateX(" + cubeDegrees.get(uniqueChosenArr[i])[0] + "deg)";
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

                console.log('largeCube1 = ', document.getElementById('largeCube1'));
                console.log('largeCube2 = ', document.getElementById('largeCube2'));
                console.log('largeCube3 = ', document.getElementById('largeCube3'));
                console.log('largeCube4 = ', document.getElementById('largeCube4'));
                console.log('largeCube5 = ', document.getElementById('largeCube5'));
                console.log('largeCube6 = ', document.getElementById('largeCube6'));
                console.log('largeCube7 = ', document.getElementById('largeCube7'));
                console.log('largeCube8 = ', document.getElementById('largeCube8'));
                console.log('largeCube9 = ', document.getElementById('largeCube9'));

                chosenCubes = false;
                break;
        }

    }

    console.log("chosenArr = ", chosenArr);
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
    document.getElementById(id).classList.remove(class2Remove);

    if (class1Remove !== class1Add) {
        document.getElementById(id).classList.remove(class1Remove);
    }

}



// left = 37
// up = 38
// right = 39
// down = 40
