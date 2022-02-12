/* The square's color will change as follows:

- Blue when the mouse hovers over the square
- Red when the mouse button is held down over the square
- Yellow when the mouse button is let go over the square
- Green when the mouse is double clicked in the square
- Orange when the mouse scroll is used somewhere in the window (not just over the square).

You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color.*/

/*colors.setDefaultOptions({limit: ['blue', 'red', 'yellow', 'green', 'orange', 'keypress']});
let colors = document.getElementById("square")

switch(colors) {
    case [0]:
        document.getElementById("square").addEventListener("mouseover", changeToBlue)
        function changeToBlue(){
            this.style.backgroundColor = "blue";
            console.log('I am blue!');
        }
        break;
    case [1]:
        document.getElementById("square").addEventListener("mousedown", changeToRed)
        function changeToRed(){
            document.getElementById("square").style.backgroundColor = "red";
            console.log('I am red!');
        }
        break;
    case [2]:
        document.getElementById("square").addEventListener("mouseup", changeToYellow)
        function changeToYellow(){
            document.getElementById("square").style.backgroundColor = "yellow";
            console.log('I am yellow!');
        }
        break;
    case [3]:
        document.getElementById("square").addEventListener("dblclick", changeToGreen)
        function changeToGreen(){
            document.getElementById("square").style.backgroundColor = "green";
            console.log('I am green!');
        }
        break;
    case [4]:
        document.addEventListener("wheel", changeToOrange)
        function changeToOrange(){
            document.getElementById("square").style.backgroundColor = "orange";
            console.log('I am orange!')
        }
        break;
    case [5]:
        document.getElementById("square").addEventListener("keypress", colorSelect)
        function colorSelect(){
            //background-color change based on key; switch?
        }
        break;
    default: 
            //code
}*/

document.getElementById("square").addEventListener("mouseover", changeToBlue)
        function changeToBlue(){
            document.getElementById("square").style.backgroundColor = "blue";
            console.log('I am blue!');
        }

document.getElementById("square").addEventListener("mousedown", changeToRed)
        function changeToRed(){
            document.getElementById("square").style.backgroundColor = "red";
            console.log('I am red!');
        }

document.getElementById("square").addEventListener("mouseup", changeToYellow)
        function changeToYellow(){
            document.getElementById("square").style.backgroundColor = "yellow";
            console.log('I am yellow!');
        }

document.getElementById("square").addEventListener("dblclick", changeToGreen)
        function changeToGreen(){
            document.getElementById("square").style.backgroundColor = "green";
            console.log('I am green!');
        }

document.addEventListener("wheel", changeToOrange)
        function changeToOrange(){
            document.getElementById("square").style.backgroundColor = "orange";
            console.log('I am orange!')
        }

document.addEventListener("keypress", colorSelect)
        function colorSelect(e){
            var key = e.key;
            console.log(e);
            var colors = {
                b: 'blue',
                r: 'red',
                y: 'yellow',
                g: 'green',
                o: 'orange'
            }
            document.getElementById("square").style.backgroundColor = colors[key];
        }