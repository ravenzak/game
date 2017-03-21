window.onload = init;

var map;
var ctxMap;

var drawButn;
var clearButn;

function init()
{
    map = document.getElementById("map");
    ctxMap = map.getContext("2d");

    drawButn = document.getElementById("drawButn");
    clearButn = document.getElementById("clearButn");

    drawButn.addEventlistener("click", drawRect, false);
    clearButn.addEventlistener("click", clearRect, false);
}
function drawRect()
{
ctxMap.fillStyle = "#333";
ctxMap.fillRect(10, 10, 100, 100);
}
function clearRect()
{
    ctxMap.clearRect(0, 0, 600, 600);

}