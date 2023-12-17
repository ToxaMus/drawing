function drawLine(pointArray, aContext) {
    pointArray = scaledY(pointArray);       
    drawPoint(pointArray, aContext);
    pointArray == scaledY(pointArray);
}

function stringToCoordinate(aString) {
    let coord;

    try {
        coord = aString.split(';');
        coord = coord.map(each => Number(each));
        return coord
    } catch (e) {
        console.error("что-то пошло не так");
        return undefined
    }
}

function clickOnEnter(event) {
    return event.code === 'Enter'
}

function drawTriangle(pointArray, aContext) {
    scaledY(pointArray);
    drawPoint(pointArray, aContext);

    aContext.closePath();
    aContext.stroke();
 
    scaledY(pointArray);
}

function drawReactangle(pointArray, aContext) {
    pointArray = scaledY(pointArray);
    let firstPoint = pointArray[0];
    let secondPoint = pointArray[1];

    drawPointForReactangle(aContext, firstPoint, secondPoint);
}

function drawPointForReactangle(aContext, firstPoint, secondPoint) {
    drawingCriteria(aContext);

    aContext.moveTo(firstPoint.x, firstPoint.y);
    aContext.lineTo(firstPoint.x, secondPoint.y);
    aContext.lineTo(secondPoint.x, secondPoint.y);
    aContext.lineTo(secondPoint.x, firstPoint.y);
    aContext.lineTo(firstPoint.x, firstPoint.y);
    aContext.stroke();
    aContext.closePath();
}

function drawCircle(pointArray, rad, aContext) {
    scaledY(pointArray);
    let vertex = pointArray[0];

    drawingCriteria(aContext);

    aContext.arc(vertex.x, vertex.y, rad, 0, 2 * Math.PI);
    aContext.stroke();
    aContext.closePath();
}

function drawPoint(array, aContext) {
    drawingCriteria(aContext);
    let vertex = array[0];
    aContext.moveTo(vertex.x, vertex.y);
    
    for (let i = 1; i < array.length; i++) {
        vertex = array[i];
        aContext.lineTo(vertex.x, vertex.y);
    }
    aContext.stroke();
}

function drawHrombus(pointArray, aContext) {
    scaledY(pointArray);
    drawPointForHrombus(aContext, pointArray);
}

function drawPointForHrombus(aContext, pointArray) {
    drawingCriteria(aContext);

    let vertex = pointArray[2];
    aContext.moveTo(vertex.x, vertex.y);

    vertex = pointArray[3];
    aContext.lineTo(vertex.x, vertex.y);

    vertex = pointArray[1];
    aContext.lineTo(vertex.x, vertex.y);

    vertex = pointArray[2];
    aContext.lineTo(vertex.x, vertex.y);

    vertex = pointArray[0];
    aContext.lineTo(vertex.x, vertex.y);

    vertex = pointArray[3];
    aContext.lineTo(vertex.x, vertex.y);
    aContext.stroke();
}

function drawParallelogram(aContext, pointArray) {
    scaledY(pointArray);
    drawPointForParalleogram(aContext, pointArray);
}

function drawPointForParalleogram(aContext, pointArray) {
    drawingCriteria(aContext);

    let vertex = pointArray[1];
    aContext.moveTo(vertex.x, vertex.y);

    vertex = pointArray[3];
    aContext.lineTo(vertex.x, vertex.y);

    vertex = pointArray[2];
    aContext.lineTo(vertex.x, vertex.y);

    vertex = pointArray[0];
    aContext.lineTo(vertex.x, vertex.y);

    aContext.stroke();
}

function drawingCriteria(aContext) {
    aContext.beginPath();
    aContext.strokeStyle = "black"
    aContext.lineWidth = 1;
}

function scaledY(array) {
    for (let i = 0; i < array.length; i++) {
        vertex = array[i]
        vertex.y = 800 - vertex.y
    }

    return array

}

function coordinateTable(aContext) {
    aContext.beginPath();
    aContext.strokeStyle = "#dfe2e8"
    aContext.lineWidth = 0.5;

    xCoordinate(aContext);
    yCoordinate(aContext)

    aContext.stroke();
}

function xCoordinate(aContext) {
    for (let i = 0; i < 800; i += 50) {
        aContext.moveTo(i, 0);
        aContext.lineTo(i, 800);
        aContext.closePath();
    }
}

function yCoordinate(aContext) {
    for (let i = 0; i < 800; i += 50) {
        aContext.moveTo(0, i);
        aContext.lineTo(800, i);
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
            if (i == 50) {
                context.fillText("–", 14, 800 - 25);
            }
            numberToString = i.toString();
            context.fillText(numberToString, 10, (800 - i))
            context.fillText("–", 14, 800 - (i + 25));
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
            if (i == 50) {
                context.fillText("|", i - 25, 19);
            }

            context.fillText("|", i + 25, 19);

            context.font = "9pt Arial"
            numberToString = i.toString();
            context.fillText(numberToString, i, 19);
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

function newFigure(type) {
    if (type === "rhombus") {
        document.getElementById("message").innerHTML = "Задайте координаты первой диагонали:";
    } else if (type === "parallelogram" || type === "trapezoid") {
        document.getElementById("message").innerHTML = "Задайте координаты точек первой прямой:";
    } else if (type == "tetrahedron") {
        document.getElementById("message").innerHTML = "Задайте координаты первой точки основания:";
    } else {
        document.getElementById("message").innerHTML = "Задайте координату точки:";
    }
}

function rubber(pointArray, aWidht, aHeight, aContext) {
    pointArray = scaledY(pointArray);
    const vertex = pointArray[0];

    aContext.beginPath();
    aContext.clearRect(vertex.x, vertex.y, aWidht, -aHeight);
    aContext.stroke();
    aContext.closePath();

    coordinateTable(aContext);
}

function errorData(number) {
    if (Number.isNaN(number) || number == undefined) {
        alert("error");
        return true;
    } else if (number <= 1) {
        alert("error");
        return true;
    }
    return false;
}

function drawTetrahedron(pointArray, aContext) {
    pointArray = scaledY(pointArray);

    dottedLine(aContext, pointArray);
    tetrahedronEdges(pointArray, aContext)
}

function dottedLine(aContext, pointArray) {
    const firstVertexBase = pointArray[0];
    const secondVertexBase = pointArray[1]

    aContext.beginPath();

    for (let i = 0; i + firstVertexBase.x < secondVertexBase.x; i += 20) {
        let coordX = i + firstVertexBase.x;
        aContext.clearRect(coordX, firstVertexBase.y, 10, -1);
        aContext.stroke();
        aContext.closePath();
    }

}

function tetrahedronEdges(pointArray, aContext) {
    let vertex;

    aContext.beginPath();
    for (let i = 0; i < pointArray.length; i++) {
        vertex = pointArray[i];
        aContext.moveTo(vertex.x, vertex.y);
        aContext.lineTo(point.x, point.y);
    }

    aContext.stroke();
    aContext.closePath(); 
    
}
