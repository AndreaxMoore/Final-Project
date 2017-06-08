var button = [];
for(var i = 1; i < 145; i++) button[i] = document.getElementById('canvas' + i);

var ctx = [];
for(var i = 1; i < 145; i++) ctx[i] = button[i].getContext('2d');

var bDisabled = [];
for(var i = 1; i < 145; i++) bDisabled[i] = false;

var isResult = false;
var content = []; //decides winner

function loop(x) 
{   
    if(!bDisabled[x])
    {
        bDisabled[x] = true; //disable the button by setting it to true
        button[x].style.opacity = 0.7;
        content[x] = 'x';

        button[x].style.webkitTransform = "rotateY(180deg)";
		
		setTimeout(function()//delay this code for drawing
		{
			ctx[x].beginPath();
    ctx[x].moveTo(75, 40);
    ctx[x].bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx[x].bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx[x].bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx[x].bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx[x].bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx[x].bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx[x].fill();
			/*ctx[x].lineWidth = 3;
			ctx[x].beginPath();
			ctx[x].moveTo(10, 10);
			ctx[x].lineTo(40, 40);
			ctx[x].moveTo(40, 10);
			ctx[x].lineTo(10, 40);
			ctx[x].stroke();
			ctx[x].closePath();*/
		
			computerTurn();
		},300);
	
		checkWinner();
    }
	
	
}

function computerTurn()
{
	var r = Math.random();
	if(content[40] == 'x' && content[41] == 'x' && content[42] == 'x' && content[43] == 'x'&& !bDisabled[44]) draw0Steps(44);
	else if(content[44] == 'x' && content[41] == 'x' && content[42] == 'x' && content[43] == 'x'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'x' && content[44] == 'x' && content[42] == 'x' && content[43] == 'x'&& !bDisabled[41]) draw0Steps(41);
	else if(content[40] == 'x' && content[41] == 'x' && content[44] == 'x' && content[43] == 'x'&& !bDisabled[42]) draw0Steps(42);
	else if(content[40] == 'x' && content[41] == 'x' && content[42] == 'x' && content[44] == 'x'&& !bDisabled[43]) draw0Steps(43);
	
	else if(content[40] == 'x' && content[52] == 'x' && content[64] == 'x' && content[76] == 'x'&& !bDisabled[88]) draw0Steps(88);
	else if(content[88] == 'x' && content[52] == 'x' && content[64] == 'x' && content[76] == 'x'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'x' && content[88] == 'x' && content[64] == 'x' && content[76] == 'x'&& !bDisabled[52]) draw0Steps(52);
	else if(content[40] == 'x' && content[52] == 'x' && content[88] == 'x' && content[76] == 'x'&& !bDisabled[64]) draw0Steps(64);
	else if(content[40] == 'x' && content[52] == 'x' && content[64] == 'x' && content[88] == 'x'&& !bDisabled[76]) draw0Steps(76);
	
	else if(content[41] == 'x' && content[53] == 'x' && content[65] == 'x'&& content[77] == 'x'&& !bDisabled[89]) draw0Steps(89);
	else if(content[89] == 'x' && content[53] == 'x' && content[65] == 'x'&& content[77] == 'x'&& !bDisabled[41]) draw0Steps(41);
	else if(content[41] == 'x' && content[89] == 'x' && content[65] == 'x'&& content[77] == 'x'&& !bDisabled[53]) draw0Steps(53);
	else if(content[41] == 'x' && content[53] == 'x' && content[89] == 'x'&& content[77] == 'x'&& !bDisabled[65]) draw0Steps(65);
	else if(content[41] == 'x' && content[53] == 'x' && content[65] == 'x'&& content[89] == 'x'&& !bDisabled[77]) draw0Steps(77);
	
	else if(content[42] == 'x' && content[54] == 'x' && content[66] == 'x'&& content[78] == 'x'&& !bDisabled[90]) draw0Steps(90);
	else if(content[90] == 'x' && content[54] == 'x' && content[66] == 'x'&& content[78] == 'x'&& !bDisabled[42]) draw0Steps(42);
	else if(content[42] == 'x' && content[90] == 'x' && content[66] == 'x'&& content[78] == 'x'&& !bDisabled[54]) draw0Steps(54);
	else if(content[42] == 'x' && content[54] == 'x' && content[90] == 'x'&& content[78] == 'x'&& !bDisabled[66]) draw0Steps(66);
	else if(content[42] == 'x' && content[54] == 'x' && content[66] == 'x'&& content[90] == 'x'&& !bDisabled[78]) draw0Steps(78);
	
	
	else if(content[43] == 'x' && content[55] == 'x' && content[67] == 'x'&& content[79] == 'x'&& !bDisabled[91]) draw0Steps(91);
	else if(content[91] == 'x' && content[55] == 'x' && content[67] == 'x'&& content[79] == 'x'&& !bDisabled[43]) draw0Steps(43);
	else if(content[43] == 'x' && content[91] == 'x' && content[67] == 'x'&& content[79] == 'x'&& !bDisabled[55]) draw0Steps(55);
	else if(content[43] == 'x' && content[55] == 'x' && content[91] == 'x'&& content[79] == 'x'&& !bDisabled[67]) draw0Steps(67);
	else if(content[43] == 'x' && content[55] == 'x' && content[67] == 'x'&& content[91] == 'x'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[44] == 'x' && content[56] == 'x' && content[68] == 'x'&& content[80] == 'x'&& !bDisabled[92]) draw0Steps(92);
	else if(content[92] == 'x' && content[56] == 'x' && content[68] == 'x'&& content[80] == 'x'&& !bDisabled[44]) draw0Steps(44);
	else if(content[44] == 'x' && content[92] == 'x' && content[68] == 'x'&& content[80] == 'x'&& !bDisabled[56]) draw0Steps(56);
	else if(content[44] == 'x' && content[56] == 'x' && content[92] == 'x'&& content[80] == 'x'&& !bDisabled[68]) draw0Steps(68);
	else if(content[44] == 'x' && content[56] == 'x' && content[68] == 'x'&& content[92] == 'x'&& !bDisabled[80]) draw0Steps(80);
	
	
	else if(content[52] == 'x' && content[53] == 'x' && content[54] == 'x'&& content[55] == 'x'&& !bDisabled[56]) draw0Steps(56);
	else if(content[56] == 'x' && content[53] == 'x' && content[54] == 'x'&& content[55] == 'x'&& !bDisabled[52]) draw0Steps(52);
	else if(content[52] == 'x' && content[56] == 'x' && content[54] == 'x'&& content[55] == 'x'&& !bDisabled[53]) draw0Steps(53);
	else if(content[52] == 'x' && content[53] == 'x' && content[56] == 'x'&& content[55] == 'x'&& !bDisabled[54]) draw0Steps(54);
	else if(content[52] == 'x' && content[53] == 'x' && content[54] == 'x'&& content[56] == 'x'&& !bDisabled[55]) draw0Steps(55);
	
	
	else if(content[64] == 'x' && content[65] == 'x' && content[66] == 'x'&& content[67] == 'x'&& !bDisabled[68]) draw0Steps(68);
	else if(content[68] == 'x' && content[65] == 'x' && content[66] == 'x'&& content[67] == 'x'&& !bDisabled[64]) draw0Steps(64);
	else if(content[64] == 'x' && content[68] == 'x' && content[66] == 'x'&& content[67] == 'x'&& !bDisabled[65]) draw0Steps(65);
	else if(content[64] == 'x' && content[65] == 'x' && content[68] == 'x'&& content[67] == 'x'&& !bDisabled[66]) draw0Steps(66);
	else if(content[64] == 'x' && content[65] == 'x' && content[66] == 'x'&& content[68] == 'x'&& !bDisabled[67]) draw0Steps(67);
	
	
	else if(content[76] == 'x' && content[77] == 'x' && content[78] == 'x'&& content[79] == 'x'&& !bDisabled[80]) draw0Steps(80);
	else if(content[80] == 'x' && content[77] == 'x' && content[78] == 'x'&& content[79] == 'x'&& !bDisabled[76]) draw0Steps(76);
	else if(content[76] == 'x' && content[80] == 'x' && content[78] == 'x'&& content[79] == 'x'&& !bDisabled[77]) draw0Steps(77);
	else if(content[76] == 'x' && content[77] == 'x' && content[80] == 'x'&& content[79] == 'x'&& !bDisabled[78]) draw0Steps(78);
	else if(content[76] == 'x' && content[77] == 'x' && content[78] == 'x'&& content[80] == 'x'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[88] == 'x' && content[89] == 'x' && content[90] == 'x'&& content[91] == 'x'&& !bDisabled[92]) draw0Steps(92); 
	else if(content[92] == 'x' && content[89] == 'x' && content[90] == 'x'&& content[91] == 'x'&& !bDisabled[88]) draw0Steps(88); 
	else if(content[88] == 'x' && content[92] == 'x' && content[90] == 'x'&& content[91] == 'x'&& !bDisabled[89]) draw0Steps(89); 
	else if(content[88] == 'x' && content[89] == 'x' && content[92] == 'x'&& content[91] == 'x'&& !bDisabled[90]) draw0Steps(90); 
	else if(content[88] == 'x' && content[89] == 'x' && content[90] == 'x'&& content[92] == 'x'&& !bDisabled[91]) draw0Steps(91); 
	
	
	else if(content[40] == 'x' && content[53] == 'x' && content[66] == 'x'&& content[79] == 'x'&& !bDisabled[92]) draw0Steps(92);
	else if(content[92] == 'x' && content[53] == 'x' && content[66] == 'x'&& content[79] == 'x'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'x' && content[92] == 'x' && content[66] == 'x'&& content[79] == 'x'&& !bDisabled[53]) draw0Steps(53);
	else if(content[40] == 'x' && content[53] == 'x' && content[92] == 'x'&& content[79] == 'x'&& !bDisabled[66]) draw0Steps(66);
	else if(content[40] == 'x' && content[53] == 'x' && content[66] == 'x'&& content[92] == 'x'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[44] == 'x' && content[55] == 'x' && content[66] == 'x'&& content[77] == 'x'&& !bDisabled[88]) draw0Steps(88);
	else if(content[88] == 'x' && content[55] == 'x' && content[66] == 'x'&& content[77] == 'x'&& !bDisabled[44]) draw0Steps(44);
	else if(content[44] == 'x' && content[88] == 'x' && content[66] == 'x'&& content[77] == 'x'&& !bDisabled[55]) draw0Steps(55);
	else if(content[44] == 'x' && content[55] == 'x' && content[88] == 'x'&& content[77] == 'x'&& !bDisabled[66]) draw0Steps(66);
	else if(content[44] == 'x' && content[55] == 'x' && content[66] == 'x'&& content[88] == 'x'&& !bDisabled[77]) draw0Steps(77);
	//for o
	else if(content[40] == 'o' && content[41] == 'o' && content[42] == 'o' && content[43] == 'x'&& !bDisabled[44]) draw0Steps(44);
	else if(content[44] == 'o' && content[41] == 'o' && content[42] == 'o' && content[43] == 'o'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'o' && content[44] == 'o' && content[42] == 'o' && content[43] == 'o'&& !bDisabled[41]) draw0Steps(41);
	else if(content[40] == 'o' && content[41] == 'o' && content[44] == 'o' && content[43] == 'o'&& !bDisabled[42]) draw0Steps(42);
	else if(content[40] == 'o' && content[41] == 'o' && content[42] == 'o' && content[44] == 'o'&& !bDisabled[43]) draw0Steps(43);
	
	else if(content[40] == 'o' && content[52] == 'o' && content[64] == 'o' && content[76] == 'o'&& !bDisabled[88]) draw0Steps(88);
	else if(content[88] == 'o' && content[52] == 'o' && content[64] == 'o' && content[76] == 'o'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'o' && content[88] == 'o' && content[64] == 'o' && content[76] == 'o'&& !bDisabled[52]) draw0Steps(52);
	else if(content[40] == 'o' && content[52] == 'o' && content[88] == 'o' && content[76] == 'o'&& !bDisabled[64]) draw0Steps(64);
	else if(content[40] == 'o' && content[52] == 'o' && content[64] == 'o' && content[88] == 'o'&& !bDisabled[76]) draw0Steps(76);
	
	else if(content[41] == 'o' && content[53] == 'o' && content[65] == 'o'&& content[77] == 'o'&& !bDisabled[89]) draw0Steps(89);
	else if(content[89] == 'o' && content[53] == 'o' && content[65] == 'o'&& content[77] == 'o'&& !bDisabled[41]) draw0Steps(41);
	else if(content[41] == 'o' && content[89] == 'o' && content[65] == 'o'&& content[77] == 'o'&& !bDisabled[53]) draw0Steps(53);
	else if(content[41] == 'o' && content[53] == 'o' && content[89] == 'o'&& content[77] == 'o'&& !bDisabled[65]) draw0Steps(65);
	else if(content[41] == 'o' && content[53] == 'o' && content[65] == 'o'&& content[89] == 'o'&& !bDisabled[77]) draw0Steps(77);
	
	else if(content[42] == 'o' && content[54] == 'o' && content[66] == 'o'&& content[78] == 'o'&& !bDisabled[90]) draw0Steps(90);
	else if(content[90] == 'o' && content[54] == 'o' && content[66] == 'o'&& content[78] == 'o'&& !bDisabled[42]) draw0Steps(42);
	else if(content[42] == 'o' && content[90] == 'o' && content[66] == 'o'&& content[78] == 'o'&& !bDisabled[54]) draw0Steps(54);
	else if(content[42] == 'o' && content[54] == 'o' && content[90] == 'o'&& content[78] == 'o'&& !bDisabled[66]) draw0Steps(66);
	else if(content[42] == 'o' && content[54] == 'o' && content[66] == 'o'&& content[90] == 'o'&& !bDisabled[78]) draw0Steps(78);
	
	
	else if(content[43] == 'o' && content[55] == 'o' && content[67] == 'o'&& content[79] == 'o'&& !bDisabled[91]) draw0Steps(91);
	else if(content[91] == 'o' && content[55] == 'o' && content[67] == 'o'&& content[79] == 'o'&& !bDisabled[43]) draw0Steps(43);
	else if(content[43] == 'o' && content[91] == 'o' && content[67] == 'o'&& content[79] == 'o'&& !bDisabled[55]) draw0Steps(55);
	else if(content[43] == 'o' && content[55] == 'o' && content[91] == 'o'&& content[79] == 'o'&& !bDisabled[67]) draw0Steps(67);
	else if(content[43] == 'o' && content[55] == 'o' && content[67] == 'o'&& content[91] == 'o'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[44] == 'o' && content[56] == 'o' && content[68] == 'o'&& content[80] == 'o'&& !bDisabled[92]) draw0Steps(92);
	else if(content[92] == 'o' && content[56] == 'o' && content[68] == 'o'&& content[80] == 'o'&& !bDisabled[44]) draw0Steps(44);
	else if(content[44] == 'o' && content[92] == 'o' && content[68] == 'o'&& content[80] == 'o'&& !bDisabled[56]) draw0Steps(56);
	else if(content[44] == 'o' && content[56] == 'o' && content[92] == 'o'&& content[80] == 'o'&& !bDisabled[68]) draw0Steps(68);
	else if(content[44] == 'o' && content[56] == 'o' && content[68] == 'o'&& content[92] == 'o'&& !bDisabled[80]) draw0Steps(80);
	
	
	else if(content[52] == 'o' && content[53] == 'o' && content[54] == 'o'&& content[55] == 'o'&& !bDisabled[56]) draw0Steps(56);
	else if(content[56] == 'o' && content[53] == 'o' && content[54] == 'o'&& content[55] == 'o'&& !bDisabled[52]) draw0Steps(52);
	else if(content[52] == 'o' && content[56] == 'o' && content[54] == 'o'&& content[55] == 'o'&& !bDisabled[53]) draw0Steps(53);
	else if(content[52] == 'o' && content[53] == 'o' && content[56] == 'o'&& content[55] == 'o'&& !bDisabled[54]) draw0Steps(54);
	else if(content[52] == 'o' && content[53] == 'o' && content[54] == 'o'&& content[56] == 'o'&& !bDisabled[55]) draw0Steps(55);
	
	
	else if(content[64] == 'o' && content[65] == 'o' && content[66] == 'o'&& content[67] == 'o'&& !bDisabled[68]) draw0Steps(68);
	else if(content[68] == 'o' && content[65] == 'o' && content[66] == 'o'&& content[67] == 'o'&& !bDisabled[64]) draw0Steps(64);
	else if(content[64] == 'o' && content[68] == 'o' && content[66] == 'o'&& content[67] == 'o'&& !bDisabled[65]) draw0Steps(65);
	else if(content[64] == 'o' && content[65] == 'o' && content[68] == 'o'&& content[67] == 'o'&& !bDisabled[66]) draw0Steps(66);
	else if(content[64] == 'o' && content[65] == 'o' && content[66] == 'o'&& content[68] == 'o'&& !bDisabled[67]) draw0Steps(67);
	
	
	else if(content[76] == 'o' && content[77] == 'o' && content[78] == 'o'&& content[79] == 'o'&& !bDisabled[80]) draw0Steps(80);
	else if(content[80] == 'o' && content[77] == 'o' && content[78] == 'o'&& content[79] == 'o'&& !bDisabled[76]) draw0Steps(76);
	else if(content[76] == 'o' && content[80] == 'o' && content[78] == 'o'&& content[79] == 'o'&& !bDisabled[77]) draw0Steps(77);
	else if(content[76] == 'o' && content[77] == 'o' && content[80] == 'o'&& content[79] == 'o'&& !bDisabled[78]) draw0Steps(78);
	else if(content[76] == 'o' && content[77] == 'o' && content[78] == 'o'&& content[80] == 'o'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[88] == 'o' && content[89] == 'o' && content[90] == 'o'&& content[91] == 'o'&& !bDisabled[92]) draw0Steps(92); 
	else if(content[92] == 'o' && content[89] == 'o' && content[90] == 'o'&& content[91] == 'o'&& !bDisabled[88]) draw0Steps(88); 
	else if(content[88] == 'o' && content[92] == 'o' && content[90] == 'o'&& content[91] == 'o'&& !bDisabled[89]) draw0Steps(89); 
	else if(content[88] == 'o' && content[89] == 'o' && content[92] == 'o'&& content[91] == 'o'&& !bDisabled[90]) draw0Steps(90); 
	else if(content[88] == 'o' && content[89] == 'o' && content[90] == 'o'&& content[92] == 'o'&& !bDisabled[91]) draw0Steps(91); 
	
	
	else if(content[40] == 'o' && content[53] == 'o' && content[66] == 'o'&& content[79] == 'o'&& !bDisabled[92]) draw0Steps(92);
	else if(content[92] == 'o' && content[53] == 'o' && content[66] == 'o'&& content[79] == 'o'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'o' && content[92] == 'o' && content[66] == 'o'&& content[79] == 'o'&& !bDisabled[53]) draw0Steps(53);
	else if(content[40] == 'o' && content[53] == 'o' && content[92] == 'o'&& content[79] == 'o'&& !bDisabled[66]) draw0Steps(66);
	else if(content[40] == 'o' && content[53] == 'o' && content[66] == 'o'&& content[92] == 'o'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[44] == 'o' && content[55] == 'o' && content[66] == 'o'&& content[77] == 'o'&& !bDisabled[88]) draw0Steps(88);
	else if(content[88] == 'o' && content[55] == 'o' && content[66] == 'o'&& content[77] == 'o'&& !bDisabled[44]) draw0Steps(44);
	else if(content[44] == 'o' && content[88] == 'o' && content[66] == 'o'&& content[77] == 'o'&& !bDisabled[55]) draw0Steps(55);
	else if(content[44] == 'o' && content[55] == 'o' && content[88] == 'o'&& content[77] == 'o'&& !bDisabled[66]) draw0Steps(66);
	else if(content[44] == 'o' && content[55] == 'o' && content[66] == 'o'&& content[88] == 'o'&& !bDisabled[77]) draw0Steps(77);
	
	
	
	//change all 44 to 39
	else if(content[40] == 'x' && content[41] == 'x' && content[42] == 'x' && content[43] == 'x'&& !bDisabled[39]) draw0Steps(39);
	else if(content[39] == 'x' && content[41] == 'x' && content[42] == 'x' && content[43] == 'x'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'x' && content[39] == 'x' && content[42] == 'x' && content[43] == 'x'&& !bDisabled[41]) draw0Steps(41);
	else if(content[40] == 'x' && content[41] == 'x' && content[39] == 'x' && content[43] == 'x'&& !bDisabled[42]) draw0Steps(42);
	else if(content[40] == 'x' && content[41] == 'x' && content[42] == 'x' && content[39] == 'x'&& !bDisabled[43]) draw0Steps(43);
	
	else if(content[40] == 'x' && content[52] == 'x' && content[64] == 'x' && content[76] == 'x'&& !bDisabled[88]) draw0Steps(88);
	else if(content[88] == 'x' && content[52] == 'x' && content[64] == 'x' && content[76] == 'x'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'x' && content[88] == 'x' && content[64] == 'x' && content[76] == 'x'&& !bDisabled[52]) draw0Steps(52);
	else if(content[40] == 'x' && content[52] == 'x' && content[88] == 'x' && content[76] == 'x'&& !bDisabled[64]) draw0Steps(64);
	else if(content[40] == 'x' && content[52] == 'x' && content[64] == 'x' && content[88] == 'x'&& !bDisabled[76]) draw0Steps(76);
	
	else if(content[41] == 'x' && content[53] == 'x' && content[65] == 'x'&& content[77] == 'x'&& !bDisabled[89]) draw0Steps(89);
	else if(content[89] == 'x' && content[53] == 'x' && content[65] == 'x'&& content[77] == 'x'&& !bDisabled[41]) draw0Steps(41);
	else if(content[41] == 'x' && content[89] == 'x' && content[65] == 'x'&& content[77] == 'x'&& !bDisabled[53]) draw0Steps(53);
	else if(content[41] == 'x' && content[53] == 'x' && content[89] == 'x'&& content[77] == 'x'&& !bDisabled[65]) draw0Steps(65);
	else if(content[41] == 'x' && content[53] == 'x' && content[65] == 'x'&& content[89] == 'x'&& !bDisabled[77]) draw0Steps(77);
	
	else if(content[42] == 'x' && content[54] == 'x' && content[66] == 'x'&& content[78] == 'x'&& !bDisabled[90]) draw0Steps(90);
	else if(content[90] == 'x' && content[54] == 'x' && content[66] == 'x'&& content[78] == 'x'&& !bDisabled[42]) draw0Steps(42);
	else if(content[42] == 'x' && content[90] == 'x' && content[66] == 'x'&& content[78] == 'x'&& !bDisabled[54]) draw0Steps(54);
	else if(content[42] == 'x' && content[54] == 'x' && content[90] == 'x'&& content[78] == 'x'&& !bDisabled[66]) draw0Steps(66);
	else if(content[42] == 'x' && content[54] == 'x' && content[66] == 'x'&& content[90] == 'x'&& !bDisabled[78]) draw0Steps(78);
	
	
	else if(content[43] == 'x' && content[55] == 'x' && content[67] == 'x'&& content[79] == 'x'&& !bDisabled[91]) draw0Steps(91);
	else if(content[91] == 'x' && content[55] == 'x' && content[67] == 'x'&& content[79] == 'x'&& !bDisabled[43]) draw0Steps(43);
	else if(content[43] == 'x' && content[91] == 'x' && content[67] == 'x'&& content[79] == 'x'&& !bDisabled[55]) draw0Steps(55);
	else if(content[43] == 'x' && content[55] == 'x' && content[91] == 'x'&& content[79] == 'x'&& !bDisabled[67]) draw0Steps(67);
	else if(content[43] == 'x' && content[55] == 'x' && content[67] == 'x'&& content[91] == 'x'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[39] == 'x' && content[51] == 'x' && content[63] == 'x'&& content[75] == 'x'&& !bDisabled[87]) draw0Steps(87);
	else if(content[39] == 'x' && content[51] == 'x' && content[63] == 'x'&& content[87] == 'x'&& !bDisabled[75]) draw0Steps(75);
	else if(content[39] == 'x' && content[51] == 'x' && content[75] == 'x'&& content[87] == 'x'&& !bDisabled[63]) draw0Steps(63);
	else if(content[39] == 'x' && content[63] == 'x' && content[75] == 'x'&& content[87] == 'x'&& !bDisabled[51]) draw0Steps(51);
	else if(content[51] == 'x' && content[63] == 'x' && content[75] == 'x'&& content[87] == 'x'&& !bDisabled[39]) draw0Steps(39);
	
	
	else if(content[52] == 'x' && content[53] == 'x' && content[54] == 'x'&& content[55] == 'x'&& !bDisabled[51]) draw0Steps(51);
	else if(content[51] == 'x' && content[53] == 'x' && content[54] == 'x'&& content[55] == 'x'&& !bDisabled[52]) draw0Steps(52);
	else if(content[52] == 'x' && content[51] == 'x' && content[54] == 'x'&& content[55] == 'x'&& !bDisabled[53]) draw0Steps(53);
	else if(content[52] == 'x' && content[53] == 'x' && content[51] == 'x'&& content[55] == 'x'&& !bDisabled[54]) draw0Steps(54);
	else if(content[52] == 'x' && content[53] == 'x' && content[54] == 'x'&& content[51] == 'x'&& !bDisabled[55]) draw0Steps(55);
	
	
	else if(content[64] == 'x' && content[65] == 'x' && content[66] == 'x'&& content[67] == 'x'&& !bDisabled[63]) draw0Steps(63);
	else if(content[63] == 'x' && content[65] == 'x' && content[66] == 'x'&& content[67] == 'x'&& !bDisabled[64]) draw0Steps(64);
	else if(content[64] == 'x' && content[63] == 'x' && content[66] == 'x'&& content[67] == 'x'&& !bDisabled[65]) draw0Steps(65);
	else if(content[64] == 'x' && content[65] == 'x' && content[63] == 'x'&& content[67] == 'x'&& !bDisabled[66]) draw0Steps(66);
	else if(content[64] == 'x' && content[65] == 'x' && content[66] == 'x'&& content[63] == 'x'&& !bDisabled[67]) draw0Steps(67);
	
	
	else if(content[76] == 'x' && content[77] == 'x' && content[78] == 'x'&& content[79] == 'x'&& !bDisabled[75]) draw0Steps(75);
	else if(content[75] == 'x' && content[77] == 'x' && content[78] == 'x'&& content[79] == 'x'&& !bDisabled[76]) draw0Steps(76);
	else if(content[76] == 'x' && content[75] == 'x' && content[78] == 'x'&& content[79] == 'x'&& !bDisabled[77]) draw0Steps(77);
	else if(content[76] == 'x' && content[77] == 'x' && content[75] == 'x'&& content[79] == 'x'&& !bDisabled[78]) draw0Steps(78);
	else if(content[76] == 'x' && content[77] == 'x' && content[78] == 'x'&& content[75] == 'x'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[88] == 'x' && content[89] == 'x' && content[90] == 'x'&& content[91] == 'x'&& !bDisabled[87]) draw0Steps(87); 
	else if(content[87] == 'x' && content[89] == 'x' && content[90] == 'x'&& content[91] == 'x'&& !bDisabled[88]) draw0Steps(88); 
	else if(content[88] == 'x' && content[87] == 'x' && content[90] == 'x'&& content[91] == 'x'&& !bDisabled[89]) draw0Steps(89); 
	else if(content[88] == 'x' && content[89] == 'x' && content[87] == 'x'&& content[91] == 'x'&& !bDisabled[90]) draw0Steps(90); 
	else if(content[88] == 'x' && content[89] == 'x' && content[90] == 'x'&& content[87] == 'x'&& !bDisabled[91]) draw0Steps(91); 
	
	
	else if(content[39] == 'x' && content[52] == 'x' && content[65] == 'x'&& content[78] == 'x'&& !bDisabled[91]) draw0Steps(91);
	else if(content[39] == 'x' && content[52] == 'x' && content[65] == 'x'&& content[91] == 'x'&& !bDisabled[78]) draw0Steps(78);
	else if(content[39] == 'x' && content[52] == 'x' && content[78] == 'x'&& content[91] == 'x'&& !bDisabled[65]) draw0Steps(65);
	else if(content[39] == 'x' && content[65] == 'x' && content[78] == 'x'&& content[91] == 'x'&& !bDisabled[52]) draw0Steps(52);
	else if(content[52] == 'x' && content[65] == 'x' && content[78] == 'x'&& content[91] == 'x'&& !bDisabled[39]) draw0Steps(39);
	
	
	else if(content[43] == 'x' && content[54] == 'x' && content[65] == 'x'&& content[76] == 'x'&& !bDisabled[87]) draw0Steps(87);
	else if(content[43] == 'x' && content[54] == 'x' && content[65] == 'x'&& content[87] == 'x'&& !bDisabled[87]) draw0Steps(76);
	else if(content[43] == 'x' && content[54] == 'x' && content[87] == 'x'&& content[76] == 'x'&& !bDisabled[65]) draw0Steps(65);
	else if(content[43] == 'x' && content[65] == 'x' && content[76] == 'x'&& content[87] == 'x'&& !bDisabled[54]) draw0Steps(54);
	else if(content[54] == 'x' && content[65] == 'x' && content[76] == 'x'&& content[87] == 'x'&& !bDisabled[43]) draw0Steps(43);
	//for o
	else if(content[40] == 'o' && content[41] == 'o' && content[42] == 'x' && content[43] == 'x'&& !bDisabled[39]) draw0Steps(39);
	else if(content[39] == 'o' && content[41] == 'o' && content[42] == 'x' && content[43] == 'x'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'o' && content[39] == 'o' && content[42] == 'x' && content[43] == 'x'&& !bDisabled[41]) draw0Steps(41);
	else if(content[40] == 'o' && content[41] == 'o' && content[39] == 'x' && content[43] == 'x'&& !bDisabled[42]) draw0Steps(42);
	else if(content[40] == 'o' && content[41] == 'o' && content[42] == 'x' && content[39] == 'x'&& !bDisabled[43]) draw0Steps(43);
	
	else if(content[40] == 'o' && content[52] == 'o' && content[64] == 'x' && content[76] == 'x'&& !bDisabled[88]) draw0Steps(88);
	else if(content[88] == 'o' && content[52] == 'o' && content[64] == 'x' && content[76] == 'x'&& !bDisabled[40]) draw0Steps(40);
	else if(content[40] == 'o' && content[88] == 'o' && content[64] == 'x' && content[76] == 'x'&& !bDisabled[52]) draw0Steps(52);
	else if(content[40] == 'o' && content[52] == 'o' && content[88] == 'x' && content[76] == 'x'&& !bDisabled[64]) draw0Steps(64);
	else if(content[40] == 'o' && content[52] == 'o' && content[64] == 'x' && content[88] == 'x'&& !bDisabled[76]) draw0Steps(76);
	
	else if(content[41] == 'o' && content[53] == 'o' && content[65] == 'x'&& content[77] == 'x'&& !bDisabled[89]) draw0Steps(89);
	else if(content[89] == 'o' && content[53] == 'o' && content[65] == 'x'&& content[77] == 'x'&& !bDisabled[41]) draw0Steps(41);
	else if(content[41] == 'o' && content[89] == 'o' && content[65] == 'x'&& content[77] == 'x'&& !bDisabled[53]) draw0Steps(53);
	else if(content[41] == 'o' && content[53] == 'o' && content[89] == 'x'&& content[77] == 'x'&& !bDisabled[65]) draw0Steps(65);
	else if(content[41] == 'o' && content[53] == 'o' && content[65] == 'x'&& content[89] == 'x'&& !bDisabled[77]) draw0Steps(77);
	
	else if(content[42] == 'o' && content[54] == 'o' && content[66] == 'x'&& content[78] == 'x'&& !bDisabled[90]) draw0Steps(90);
	else if(content[90] == 'o' && content[54] == 'o' && content[66] == 'x'&& content[78] == 'x'&& !bDisabled[42]) draw0Steps(42);
	else if(content[42] == 'o' && content[90] == 'o' && content[66] == 'x'&& content[78] == 'x'&& !bDisabled[54]) draw0Steps(54);
	else if(content[42] == 'o' && content[54] == 'o' && content[90] == 'x'&& content[78] == 'x'&& !bDisabled[66]) draw0Steps(66);
	else if(content[42] == 'o' && content[54] == 'o' && content[66] == 'x'&& content[90] == 'x'&& !bDisabled[78]) draw0Steps(78);
	
	
	else if(content[43] == 'o' && content[55] == 'o' && content[67] == 'o'&& content[79] == 'o'&& !bDisabled[91]) draw0Steps(91);
	else if(content[91] == 'o' && content[55] == 'o' && content[67] == 'o'&& content[79] == 'o'&& !bDisabled[43]) draw0Steps(43);
	else if(content[43] == 'o' && content[91] == 'o' && content[67] == 'o'&& content[79] == 'o'&& !bDisabled[55]) draw0Steps(55);
	else if(content[43] == 'o' && content[55] == 'o' && content[91] == 'o'&& content[79] == 'o'&& !bDisabled[67]) draw0Steps(67);
	else if(content[43] == 'o' && content[55] == 'o' && content[67] == 'o'&& content[91] == 'o'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[39] == 'o' && content[51] == 'o' && content[63] == 'o'&& content[75] == 'o'&& !bDisabled[87]) draw0Steps(87);
	else if(content[39] == 'o' && content[51] == 'o' && content[63] == 'o'&& content[87] == 'o'&& !bDisabled[75]) draw0Steps(75);
	else if(content[39] == 'o' && content[51] == 'o' && content[75] == 'o'&& content[87] == 'o'&& !bDisabled[63]) draw0Steps(63);
	else if(content[39] == 'o' && content[63] == 'o' && content[75] == 'o'&& content[87] == 'o'&& !bDisabled[51]) draw0Steps(51);
	else if(content[51] == 'o' && content[63] == 'o' && content[75] == 'o'&& content[87] == 'o'&& !bDisabled[39]) draw0Steps(39);
	
	
	else if(content[52] == 'o' && content[53] == 'o' && content[54] == 'o'&& content[55] == 'o'&& !bDisabled[51]) draw0Steps(51);
	else if(content[51] == 'o' && content[53] == 'o' && content[54] == 'o'&& content[55] == 'o'&& !bDisabled[52]) draw0Steps(52);
	else if(content[52] == 'o' && content[51] == 'o' && content[54] == 'o'&& content[55] == 'o'&& !bDisabled[53]) draw0Steps(53);
	else if(content[52] == 'o' && content[53] == 'o' && content[51] == 'o'&& content[55] == 'o'&& !bDisabled[54]) draw0Steps(54);
	else if(content[52] == 'o' && content[53] == 'o' && content[54] == 'o'&& content[51] == 'o'&& !bDisabled[55]) draw0Steps(55);
	
	
	else if(content[64] == 'o' && content[65] == 'o' && content[66] == 'o'&& content[67] == 'o'&& !bDisabled[63]) draw0Steps(63);
	else if(content[63] == 'o' && content[65] == 'o' && content[66] == 'o'&& content[67] == 'o'&& !bDisabled[64]) draw0Steps(64);
	else if(content[64] == 'o' && content[63] == 'o' && content[66] == 'o'&& content[67] == 'o'&& !bDisabled[65]) draw0Steps(65);
	else if(content[64] == 'o' && content[65] == 'o' && content[63] == 'o'&& content[67] == 'o'&& !bDisabled[66]) draw0Steps(66);
	else if(content[64] == 'o' && content[65] == 'o' && content[66] == 'o'&& content[63] == 'o'&& !bDisabled[67]) draw0Steps(67);
	
	
	else if(content[76] == 'o' && content[77] == 'o' && content[78] == 'o'&& content[79] == 'o'&& !bDisabled[75]) draw0Steps(75);
	else if(content[75] == 'o' && content[77] == 'o' && content[78] == 'o'&& content[79] == 'o'&& !bDisabled[76]) draw0Steps(76);
	else if(content[76] == 'o' && content[75] == 'o' && content[78] == 'o'&& content[79] == 'o'&& !bDisabled[77]) draw0Steps(77);
	else if(content[76] == 'o' && content[77] == 'o' && content[75] == 'o'&& content[79] == 'o'&& !bDisabled[78]) draw0Steps(78);
	else if(content[76] == 'o' && content[77] == 'o' && content[78] == 'o'&& content[75] == 'o'&& !bDisabled[79]) draw0Steps(79);
	
	
	else if(content[88] == 'o' && content[89] == 'o' && content[90] == 'o'&& content[91] == 'o'&& !bDisabled[87]) draw0Steps(87); 
	else if(content[87] == 'o' && content[89] == 'o' && content[90] == 'o'&& content[91] == 'o'&& !bDisabled[88]) draw0Steps(88); 
	else if(content[88] == 'o' && content[87] == 'o' && content[90] == 'o'&& content[91] == 'o'&& !bDisabled[89]) draw0Steps(89); 
	else if(content[88] == 'o' && content[89] == 'o' && content[87] == 'o'&& content[91] == 'o'&& !bDisabled[90]) draw0Steps(90); 
	else if(content[88] == 'o' && content[89] == 'o' && content[90] == 'o'&& content[87] == 'o'&& !bDisabled[91]) draw0Steps(91); 
	
	
	else if(content[39] == 'o' && content[52] == 'o' && content[65] == 'o'&& content[78] == 'o'&& !bDisabled[91]) draw0Steps(91);
	else if(content[39] == 'o' && content[52] == 'o' && content[65] == 'o'&& content[91] == 'o'&& !bDisabled[78]) draw0Steps(78);
	else if(content[39] == 'o' && content[52] == 'o' && content[78] == 'o'&& content[91] == 'o'&& !bDisabled[65]) draw0Steps(65);
	else if(content[39] == 'o' && content[65] == 'o' && content[78] == 'o'&& content[91] == 'o'&& !bDisabled[52]) draw0Steps(52);
	else if(content[52] == 'o' && content[65] == 'o' && content[78] == 'o'&& content[91] == 'o'&& !bDisabled[39]) draw0Steps(39);
	
	
	else if(content[43] == 'o' && content[54] == 'o' && content[65] == 'o'&& content[76] == 'o'&& !bDisabled[87]) draw0Steps(87);
	else if(content[43] == 'o' && content[54] == 'o' && content[65] == 'o'&& content[87] == 'o'&& !bDisabled[87]) draw0Steps(76);
	else if(content[43] == 'o' && content[54] == 'o' && content[87] == 'o'&& content[76] == 'o'&& !bDisabled[65]) draw0Steps(65);
	else if(content[43] == 'o' && content[65] == 'o' && content[76] == 'o'&& content[87] == 'o'&& !bDisabled[54]) draw0Steps(54);
	else if(content[54] == 'o' && content[65] == 'o' && content[76] == 'o'&& content[87] == 'o'&& !bDisabled[43]) draw0Steps(43);
	
else if(r < 0.1 && !bDisabled[1]) draw0Steps(1); //if r(a random #) is less than 0.1, if bDisabled[1] is false, then run draw0Steps(1)
else if(r < 0.2 && !bDisabled[41]) draw0Steps(41);
else if(r < 0.3 && !bDisabled[52]) draw0Steps(52);
else if(r < 0.4 && !bDisabled[4]) draw0Steps(4);
else if(r < 0.5 && !bDisabled[53]) draw0Steps(53);
else if(r < 0.6 && !bDisabled[63]) draw0Steps(63);
else if(r < 0.7 && !bDisabled[73]) draw0Steps(73);
else if(r < 0.8 && !bDisabled[84]) draw0Steps(84);
else if(r < 0.9 && !bDisabled[95]) draw0Steps(95);
else if(r < 0.10 && !bDisabled[110]) draw0Steps(110);
else if(r < 0.11 && !bDisabled[113]) draw0Steps(113);
else if(r < 0.12 && !bDisabled[122]) draw0Steps(122);

else if(r < 0.13 && !bDisabled[13]) draw0Steps(13);
else if(r < 0.14 && !bDisabled[14]) draw0Steps(14);
else if(r < 0.15 && !bDisabled[15]) draw0Steps(15);
else if(r < 0.16 && !bDisabled[16]) draw0Steps(16);
else if(r < 0.17 && !bDisabled[17]) draw0Steps(17);
else if(r < 0.18 && !bDisabled[18]) draw0Steps(18);
else if(r < 0.19 && !bDisabled[19]) draw0Steps(19);
else if(r < 0.20 && !bDisabled[20]) draw0Steps(20);
else if(r < 0.21 && !bDisabled[21]) draw0Steps(21);
else if(r < 0.22 && !bDisabled[22]) draw0Steps(22);
else if(r < 0.23 && !bDisabled[23]) draw0Steps(23);
else if(r < 0.24 && !bDisabled[24]) draw0Steps(24);
else computerTurn();
		
		
		
		
}

function draw0Steps(x)//when click on button 1, random draw o on button 5, x = 5, disables button 5 by setting it to true
{
	bDisabled[x] = true;
	button[x].style.opacity = 0.7;
	content[x] = 'o'; 
	button[x].style.webkitTransform = "rotateX(180deg)";
	
	setTimeout(function()
	{
		
		ctx[x].beginPath();
		ctx[x].lineWidth = 3;
		ctx[x].arc(25,25,17,0,Math.PI*2,false);//location of center(left, top), radius, starting and ending angle of circle,counterclockwise
		ctx[x].stroke();
		ctx[x].closePath();
	}, 300);
}

function checkWinner()
{
	if(!isResult)
	{
		if(content[40] == 'x' && content[41] == 'x' && content[42] == 'x' && content[43] == 'x'&& content[44] == 'x') showWinner('You win');
		else if(content[40] == 'x' && content[52] == 'x' && content[64] == 'x'&& content[76] == 'x'&& content[88] == 'x') showWinner('You win');
		else if(content[41] == 'x' && content[53] == 'x' && content[65] == 'x'&& content[77] == 'x'&& content[89] == 'x') showWinner('You win');
		else if(content[42] == 'x' && content[54] == 'x' && content[66] == 'x'&& content[78] == 'x'&& content[90] == 'x') showWinner('You win');
		else if(content[43] == 'x' && content[55] == 'x' && content[67] == 'x'&& content[79] == 'x'&& content[91] == 'x') showWinner('You win');
		else if(content[44] == 'x' && content[56] == 'x' && content[68] == 'x'&& content[80] == 'x'&& content[92] == 'x') showWinner('You win');
		else if(content[52] == 'x' && content[53] == 'x' && content[54] == 'x'&& content[55] == 'x'&& content[56] == 'x') showWinner('You win');
		else if(content[64] == 'x' && content[65] == 'x' && content[66] == 'x'&& content[67] == 'x'&& content[68] == 'x') showWinner('You win');
		else if(content[76] == 'x' && content[77] == 'x' && content[78] == 'x'&& content[79] == 'x'&& content[80] == 'x') showWinner('You win');
		else if(content[88] == 'x' && content[89] == 'x' && content[90] == 'x'&& content[91] == 'x'&& content[92] == 'x') showWinner('You win');
		else if(content[40] == 'x' && content[53] == 'x' && content[66] == 'x'&& content[79] == 'x'&& content[92] == 'x') showWinner('You win');
		else if(content[44] == 'x' && content[55] == 'x' && content[66] == 'x'&& content[77] == 'x'&& content[88] == 'x') showWinner('You win');
		//remember to change x to o!!!
		else if(content[40] == 'o' && content[41] == 'o' && content[42] == 'o'&& content[43] == 'o'&& content[44] == 'o') showWinner('You lose');
		else if(content[40] == 'o' && content[52] == 'o' && content[64] == 'o'&& content[76] == 'o'&& content[88] == 'o') showWinner('You lose');
		else if(content[41] == 'o' && content[53] == 'o' && content[65] == 'o'&& content[77] == 'o'&& content[89] == 'o') showWinner('You lose');
		else if(content[42] == 'o' && content[54] == 'o' && content[66] == 'o'&& content[78] == 'o'&& content[90] == 'o') showWinner('You lose');
		else if(content[43] == 'o' && content[55] == 'o' && content[67] == 'o'&& content[79] == 'o'&& content[91] == 'o') showWinner('You lose');
		else if(content[44] == 'o' && content[56] == 'o' && content[68] == 'o'&& content[80] == 'o'&& content[92] == 'o') showWinner('You lose');
		else if(content[52] == 'o' && content[53] == 'o' && content[54] == 'o'&& content[55] == 'o'&& content[56] == 'o') showWinner('You lose');
		else if(content[64] == 'o' && content[65] == 'o' && content[66] == 'o'&& content[67] == 'o'&& content[68] == 'o') showWinner('You lose');
		else if(content[76] == 'o' && content[77] == 'o' && content[78] == 'o'&& content[79] == 'o'&& content[80] == 'o') showWinner('You lose');
		else if(content[88] == 'o' && content[89] == 'o' && content[90] == 'o'&& content[91] == 'o'&& content[92] == 'o') showWinner('You lose');
		else if(content[40] == 'o' && content[53] == 'o' && content[66] == 'o'&& content[79] == 'o'&& content[92] == 'o') showWinner('You lose');
		else if(content[44] == 'o' && content[55] == 'o' && content[66] == 'o'&& content[77] == 'o'&& content[88] == 'o') showWinner('You lose');
		
	}	
}

function showWinner(x)
{
	alert(x)
	isResult = true;
}