//header
document.getElementById("header").innerText = "JavaScript Made This!!";
    document.getElementById("header").style.fontFamily = 'serif';
    document.getElementById("header").style.textAlign = 'center';
    document.getElementById("header").style.fontSize = '36px';

var paragraph = document.createElement("p");
    header.append(paragraph);
    paragraph.innerHTML = "<p><span>Braden</span> wrote this JavaScript</p>";
    paragraph.setAttribute('id', 'para');
    document.getElementById('para').style.fontSize = '24px';
    
var myName = document.querySelector('span');
    myName.setAttribute('class', 'name');
    myName.style.color = "blue";

//messages
document.querySelector("div.message.left").innerHTML = "Was that you that won the Bronze in the 100m?";

document.querySelector("div.message.right").innerHTML = "Yes, it was! Were you there to see it in person?";

document.querySelectorAll("div.message.left")[1].innerHTML = "I was! I've never felt patriotism like I have there.";

document.querySelectorAll("div.message.right")[1].innerHTML = "I agree! It's always an honor to represent your country.";

//clear button
document.getElementById('clear-button').addEventListener("click", clearConversation)
    function clearConversation(){
        document.querySelector("div.messages").style.display = 'none';
    }