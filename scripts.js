var button = [];
for(var i = 1; i < 145; i++) button[i] = document.getElementById('canvas' + i);
//fill array with buttons(canvases)

var ctx = [];
for(var a = 1; a < 145; i++) ctx[i] = button[a].getContext('2d');
//draw o and x

var bDisabled = [];
for(var b = 1; b < 145; i++) bDisabled[b] = false;

var isResult = false;
var content = [];

function loop(x) //x = the button user clicks
{   //all bDisabled buttons are already false by default
    if(!bDisabled[x])//if bDisabled[1] = false, then run the code this if()
    {
        bDisabled[x] = true; //disable the clicked button so can't draw again
        button[x].style.opacity = 0.7;
        content[x] = 'x';//decides winner, set content[1] to 'x'

        button[x].style.webkitTransform = "rotateY(180deg)";//rotate on y axis
    }
}
