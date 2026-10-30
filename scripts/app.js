
function toScreen(buttonValue) {

    screen = document.getElementById("display");
    screen.value = screen.value + buttonValue;
}


function clearScreen() {
screen.value = "";
}



function calculate() {
    
    if (this.screen.value == undefined || this.screen.value == "") {
        this.screen.value = "0";
    }
    else {
        this.screen.value = eval(this.screen.value);
    }
}
function remember() {

    memory = document.getElementById('memory');
	
	if(memory.value)
	{
		toScreen(memory.value);
	}
	else if (screen.value != '')
	{
		memory.value = screen.value;
        screen.value = '';
	}
}

function toPercent() {
    if (screen.value ) {
       screen.value = eval(screen.value) / 100;
    }
}

function switchSigns()
{
	screen.value = screen.value * -1;
}