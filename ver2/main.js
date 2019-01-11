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
// console.log('cubeLeftCol[0] parent = ', cubeLeftCol[0].parentElement.parentElement.parentElement);
// console.log('cubeLeftCol[0] parent id = ', cubeLeftCol[0].parentElement.parentElement.parentElement.id);



/*-------------------------------------------------------------------------------------------------*/
var degrees = 0;
var degreesLeft = 0;
var degreesCenter = 0;
var degreesRight = 0;

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

    // var degrees = 0;
    //Move Cube
    if (chosenCubes) {
        var chosen = new Set(chosenArr);
        var uniqueChosenArr = [...chosen];
        switch (e.keyCode) {
            case 38:
                degrees += 90;
                // var topArr = [];
                // var midArr = [];
                // var bottomArr = [];
                for (i = 0; i < uniqueChosenArr.length; i++) {
                    // switch (chooseCol){
                    //     case left:
                    //         document.getElementById(uniqueChosenArr[i]).style.transform = "translateZ(var(--negTransLarge))  rotateX(" + degrees + "deg)";
                    // }
                    document.getElementById(uniqueChosenArr[i]).style.transform = "translateZ(var(--negTransLarge))  rotateX(" + degrees + "deg)";
                    document.getElementById(uniqueChosenArr[i]).style.transition = "transform 0.7s";

                    // var squareTop = document.getElementById(uniqueChosenArr[i]).childNodes[13].childNodes[1].querySelectorAll('.top');
                    // var squareMid = document.getElementById(uniqueChosenArr[i]).childNodes[13].childNodes[1].querySelectorAll('.mid');
                    // var squareBottom = document.getElementById(uniqueChosenArr[i]).childNodes[13].childNodes[1].querySelectorAll('.bottom');
                    // squareTop.length > 0 ? topArr.push(squareTop) : null;
                    // squareMid.length > 0 ? midArr.push(squareMid) : null;
                    // squareBottom.length > 0 ? bottomArr.push(squareBottom) : null;
                }


                chosenCubes = false;
                break;
            case 40:
                degrees -= 90;
                for (i = 0; i < uniqueChosenArr.length; i++) {
                    document.getElementById(uniqueChosenArr[i]).style.transform = "translateZ(var(--negTransLarge)) rotateX(" + degrees + "deg)";
                    document.getElementById(uniqueChosenArr[i]).style.transition = "transform 0.7s";
                }
                chosenCubes = false;
                break;
        }
        console.log("degrees = ", degrees);
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



// left = 37
// up = 38
// right = 39
// down = 40
