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
console.log('cubeLeftCol[0] parent = ', cubeLeftCol[0].parentElement.parentElement.parentElement);
console.log('cubeLeftCol[0] parent id = ', cubeLeftCol[0].parentElement.parentElement.parentElement.id);
console.log('left center parent = ', document.getElementById('left').parentElement.parentElement.parentElement.id);

for (i = 0; i < cubeLeftCol.length; i++) {
    cubeLeftCol[i].style.borderLeft = "6px solid #00ccff";
    cubeLeftCol[i].style.borderRight = "6px solid #00ccff";
}


/*-------------------------------------------------------------------------------------------------*/


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
    //Move Cube
    if (!(chosenCubes)) {
        switch (e.keyCode) {
            case 37: //Left
                cleanRow();
                chooseRow = 'none';
                switch (chooseCol) {
                    case 'none':
                        setBorderCol(cubeLeftCol);
                        chosenArr.push(document.getElementById('left').parentElement.parentElement.parentElement.id);
                        chooseCol = 'left';
                        break;
                    case 'left':
                        changeBorderCol(cubeLeftCol, cubeRightCol);
                        chosenArr.pop();
                        chosenArr.push(document.getElementById('right').parentElement.parentElement.parentElement.id);
                        chooseCol = 'right';
                        break;
                    case 'right':
                        changeBorderCol(cubeRightCol, cubeCenterCol);
                        chosenArr.pop();
                        chooseCol = 'center';
                        break;
                    case 'center':
                        changeBorderCol(cubeCenterCol, cubeLeftCol);
                        chosenArr.pop();
                        chosenArr.push(document.getElementById('left').parentElement.parentElement.parentElement.id);
                        chooseCol = 'left';
                        break;
                }
                break;
            case 38: //Up
                cleanCol();
                chooseCol = 'none';
                switch (chooseRow) {
                    case 'none':
                        setBorderRow(cubeTopRow);
                        chosenArr.push(document.getElementById('top').parentElement.parentElement.parentElement.id);
                        chooseRow = 'up';
                        break;
                    case 'up':
                        changeBorderRow(cubeTopRow, cubeBottomRow);
                        chosenArr.pop();
                        chosenArr.push(document.getElementById('bottom').parentElement.parentElement.parentElement.id);
                        chooseRow = 'down';
                        break;
                    case 'down':
                        changeBorderRow(cubeBottomRow, cubeMidRow);
                        chosenArr.pop();
                        chooseRow = 'middle';
                        break;
                    case 'middle':
                        changeBorderRow(cubeMidRow, cubeTopRow);
                        chosenArr.pop();
                        chosenArr.push(document.getElementById('top').parentElement.parentElement.parentElement.id);
                        chooseRow = 'up';
                        break;
                }
                break;
            case 39:  //Right
                cleanRow();
                chooseRow = 'none';
                switch (chooseCol) {
                    case 'none':
                        setBorderCol(cubeLeftCol);
                        chosenArr.push(document.getElementById('left').parentElement.parentElement.parentElement.id);
                        chooseCol = 'left';
                        break;
                    case 'left':
                        changeBorderCol(cubeLeftCol, cubeCenterCol);
                        chosenArr.pop();
                        chooseCol = 'center';
                        break;
                    case 'center':
                        changeBorderCol(cubeCenterCol, cubeRightCol);
                        chosenArr.pop();
                        chosenArr.push(document.getElementById('right').parentElement.parentElement.parentElement.id);
                        chooseCol = 'right';
                        break;
                    case 'right':
                        changeBorderCol(cubeRightCol, cubeLeftCol);
                        chosenArr.pop();
                        chosenArr.push(document.getElementById('left').parentElement.parentElement.parentElement.id);
                        chooseCol = 'left';
                        break;
                }
                break;
            case 40: //Down
                cleanCol();
                chooseCol = 'none';
                switch (chooseRow) {
                    case 'none':
                        setBorderRow(cubeTopRow);
                        chosenArr.push(document.getElementById('top').parentElement.parentElement.parentElement.id);
                        chooseRow = 'up';
                        break;
                    case 'up':
                        changeBorderRow(cubeTopRow, cubeMidRow);
                        chosenArr.pop();
                        chooseRow = 'middle';
                        break;
                    case 'middle':
                        changeBorderRow(cubeMidRow, cubeBottomRow);
                        chosenArr.pop();
                        chosenArr.push(document.getElementById('bottom').parentElement.parentElement.parentElement.id);
                        chooseRow = 'down';
                        break;
                    case 'down':
                        changeBorderRow(cubeBottomRow, cubeTopRow);
                        chosenArr.pop();
                        chosenArr.push(document.getElementById('top').parentElement.parentElement.parentElement.id);
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
                var degrees = 90;
                var topArr = [];
                var midArr = [];
                var bottomArr = [];
                for (i = 0; i < uniqueChosenArr.length; i++) {
                    document.getElementById(uniqueChosenArr[i]).style.transform = "translateZ(var(--negTransLarge))  rotateX(" + degrees + "deg)";
                    document.getElementById(uniqueChosenArr[i]).style.transition = "transform 0.7s";
                    // var square = document.getElementById(uniqueChosenArr[i]).childNodes[13].childNodes[1].getElementsByClassName('smallSquare');
                    var squareTop = document.getElementById(uniqueChosenArr[i]).childNodes[13].childNodes[1].querySelectorAll('.top');
                    var squareMid = document.getElementById(uniqueChosenArr[i]).childNodes[13].childNodes[1].querySelectorAll('.mid');
                    var squareBottom = document.getElementById(uniqueChosenArr[i]).childNodes[13].childNodes[1].querySelectorAll('.bottom');
                    squareTop.length > 0 ? topArr.push(squareTop) : null;
                    squareMid.length > 0 ? midArr.push(squareMid) : null;
                    squareBottom.length > 0 ? bottomArr.push(squareBottom) : null;
                }
                console.log("topArr[0] = ", topArr[0]);
                topArr[0][0].classList.remove("top");
                // while (topArr[0].length) {
                //     topArr[0][0].classList.remove("top");
                // }
                topArr[0][0].classList.add("testClass");
                console.log("topArr[0][0] = ", topArr[0][0]);

                chosenCubes = false;
                break;
            case 40:
                for (i = 0; i < uniqueChosenArr.length; i++) {
                    document.getElementById(uniqueChosenArr[i]).style.transform = "translateZ(var(--negTransLarge))  rotateX(-90deg)";
                    document.getElementById(uniqueChosenArr[i]).style.transition = "transform 0.7s";
                }
                chosenCubes = false;
                break;
        }
    }

    console.log("chosenArr = ", chosenArr);
}





function cleanCol() {
    for (i = 0; i < cubeLeftCol.length; i++) {
        cubeLeftCol[i].style.borderLeft = "3px solid black";
        cubeLeftCol[i].style.borderRight = "3px solid black";
    }
    for (i = 0; i < cubeCenterCol.length; i++) {
        cubeCenterCol[i].style.borderLeft = "3px solid black";
        cubeCenterCol[i].style.borderRight = "3px solid black";
    }
    for (i = 0; i < cubeRightCol.length; i++) {
        cubeRightCol[i].style.borderLeft = "3px solid black";
        cubeRightCol[i].style.borderRight = "3px solid black";
    }
}

function cleanRow() {
    for (i = 0; i < cubeTopRow.length; i++) {
        cubeTopRow[i].style.borderTop = "3px solid black";
        cubeTopRow[i].style.borderBottom = "3px solid black";
    }
    for (i = 0; i < cubeMidRow.length; i++) {
        cubeMidRow[i].style.borderTop = "3px solid black";
        cubeMidRow[i].style.borderBottom = "3px solid black";
    }
    for (i = 0; i < cubeBottomRow.length; i++) {
        cubeBottomRow[i].style.borderTop = "3px solid black";
        cubeBottomRow[i].style.borderBottom = "3px solid black";
    }
}

function setBorderCol(cubeFace) {
    for (i = 0; i < cubeFace.length; i++) {
        cubeFace[i].style.borderLeft = "6px solid #00ccff";
        cubeFace[i].style.borderRight = "6px solid #00ccff";
        chosenArr[i] = cubeFace[i].parentElement.parentElement.parentElement.id;
    }
}

function setBorderRow(cubeFace) {
    for (i = 0; i < cubeFace.length; i++) {
        cubeFace[i].style.borderTop = "6px solid #00ccff";
        cubeFace[i].style.borderBottom = "6px solid #00ccff";
        chosenArr[i] = cubeFace[i].parentElement.parentElement.parentElement.id;
    }
}

function changeBorderCol(cubeFace1, cubeFace2) {
    for (i = 0; i < cubeFace1.length; i++) {
        cubeFace1[i].style.borderLeft = "3px solid black";
        cubeFace1[i].style.borderRight = "3px solid black";
    }
    for (i = 0; i < cubeFace2.length; i++) {
        cubeFace2[i].style.borderLeft = "6px solid #00ccff";
        cubeFace2[i].style.borderRight = "6px solid #00ccff";
        chosenArr[i] = cubeFace2[i].parentElement.parentElement.parentElement.id;
    }
}

function changeBorderRow(cubeFace1, cubeFace2) {
    for (i = 0; i < cubeFace1.length; i++) {
        cubeFace1[i].style.borderTop = "3px solid black";
        cubeFace1[i].style.borderBottom = "3px solid black";
    }
    for (i = 0; i < cubeFace2.length; i++) {
        cubeFace2[i].style.borderTop = "6px solid #00ccff";
        cubeFace2[i].style.borderBottom = "6px solid #00ccff";
        chosenArr[i] = cubeFace2[i].parentElement.parentElement.parentElement.id;
    }
}



// left = 37
// up = 38
// right = 39
// down = 40
