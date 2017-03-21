window.onload = init;

var map;
var ctxMap;

var drawButton;
var clearButton;

function init()
{
    map = document.getElementById("map");
    ctxMap = map.getContext("2d");
    drawButton = document.getElementById("drawButton");
    clearButton = document.getElementById("clearButton");

    drawButton.addEventlistener("click", drawRect, false);
    clearButton.addEventlistener("click", clearRect, false);
}
function drawRect()
{
ctxMap.fillStyle = "#3D3D3D";
ctxMap.fillRect(10, 10, 100, 100);
}
function clearRect()
{
    ctxMap.clearRect(0, 0, 600, 600);

}