function drawLine(pointArray, aContext) {
    if (pointArray.length < 2) {
        document.getElementById("message").innerHTML = "Задайте следующую координату точки:"
        return
    }

    pointArray = scaledY(pointArray);
    let vertex;

    vertex = pointArray[0];

    aContext.beginPath();
    aContext.strokeStyle = "black"
    aContext.lineWidth = 1;
    aContext.moveTo(vertex.x, vertex.y);


    for (let i = 1; i < pointArray.length; i++) {
        vertex = pointArray[i]
        aContext.lineTo(vertex.x, vertex.y);
    }

    aContext.stroke();
    aContext.closePath();

    pointArray == scaledY(pointArray)
}

function stringToCoordinate(aString) {
    let coord;

    try {
        coord = aString.split(';')
        coord = coord.map(each => Number(each));
        return coord
    } catch (e) {
        console.error("что-то пошло не так")
        return undefined
    }
}

function clickOnEnter(event) {
    return event.code === 'Enter'
}

function drawTriangle(pointArray, aContext) {
    if (pointArray.length < 3) {
        document.getElementById("message").innerHTML = "Задайте следущую координату через ';'"
        return
    }

    pointArray = scaledY(pointArray);

    drawCanvas(aContext, pointArray);
}


function drawReactangle(pointArray, aContext) {
    debugger
    pointArray = scaledY(pointArray);
    let firstPoint = pointArray[0];
    let secondPoint = pointArray[1]

    aContext.beginPath();
    aContext.strokeStyle = "black"
        
    aContext.moveTo(firstPoint.x, firstPoint.y);
    aContext.lineTo(secondPoint.x, firstPoint.y);
    aContext.lineTo(secondPoint.x, secondPoint.y);
    aContext.lineTo(secondPoint.x, firstPoint.y);
    aContext.lineTo(firstPoint.x, firstPoint.y);

    aContext.stroke();
}

function scaledY(array) {
    for (let i = 0; i < array.length; i++) {
        vertex = array[i]
        vertex.y = 800 - vertex.y
    }

    return array
}

function drawCanvas(aContext, pointArray) {
    aContext.beginPath();

    let vertex = pointArray[0]
    aContext.moveTo(vertex.x, vertex.y);

    for (let i = 1; i < pointArray.length; i++) {
        vertex = pointArray[i]
        aContext.lineTo(vertex.x, vertex.y);
    }

    vertex = pointArray[0]
    aContext.lineTo(vertex.x, vertex.y);

    aContext.stroke();
    aContext.closePath();
}

function coordinateTable(width, heigth, aContext) {
    aContext.beginPath();
    aContext.strokeStyle = "#dfe2e8"
    aContext.lineWidth = 0.5;

    xCoordinate(width, heigth, aContext);
    yCoordinate(width, heigth, aContext)

    aContext.stroke();
}

function xCoordinate(width, heigth, aContext) {
    for (let i = 0; i < width; i += 50) {
        aContext.moveTo(i, 0);
        aContext.lineTo(i, heigth);
        aContext.closePath();
    }
}

function yCoordinate(width, heigth, aContext) {
    for (let i = 0; i < heigth; i += 50) {
        aContext.moveTo(0, i);
        aContext.lineTo(width, i);
        aContext.closePath();
    }
}

function rulerY() {
    const canvas = document.getElementById("lineY");
    const context = canvas.getContext("2d")

    context.beginPath();
    context.font = "10pt Arial"
    let numberToString;

    for (let i = 0; i < 800; i += 50) {
        if (i != 0 && i != 800) {
            numberToString = i.toString();
            context.fillText(numberToString, 7, (800 - i))
        }
    }
}

function rulerX() {
    const canvas = document.getElementById("lineX");
    const context = canvas.getContext("2d")

    context.beginPath();
    context.font = "10pt Arial"
    let numberToString;

    for (let i = 0; i < 800; i += 50) {
        if (i != 0 && i != 800) {
            numberToString = i.toString();
            context.fillText(numberToString, i, 19)
        }
    }
}

function errorCoordinate(pointArray) {
    if (Number.isNaN(pointArray[0]) || Number.isNaN(pointArray[1]) || pointArray[0] === undefined || pointArray[1] === undefined || pointArray[0] < 0 || pointArray[1] < 0) {
        alert("error")
        return true
    }
    return false
}

function errorNigativeData(number) {
    if (number < 0) {
        alert("error");
        return true
    }
    return false
}