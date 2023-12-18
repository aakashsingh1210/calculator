let screen=document.getElementById("text");
function display(num){
if(screen.value.length<=13)
{
screen.value+=num;
}
}
function clears(){
    screen.value="";
}
function cut(){
    screen.value=screen.value.substring(0,screen.value.length-1);
}
function calculate(){
    if(screen.value){
        screen.value=eval(screen.value);
    }
    else{
        screen.value=false;
    }
}
function switchfun()
{
let target_link=document.getElementById('target_switch').checked;
if(target_link)
{
    console.log('switch clicked');
let target=document.getElementById('target_link');
target.href="project_calci/style.css";
}
else{
    let target=document.getElementById('target_link');
    target.href="project_calci/style2.css"; 
}
}

// let screen=document.getElementById("text");
// function display(num){
// screen.textContent+=num;
// screen.value=screen.textContent;
// }
// function clears(){
//     screen.textContent="";
//     screen.value="";
// }
// function cut(){
//     screen.textContent=screen.textContent.substring(0,screen.textContent.length-1);
//     screen.value=screen.textContent;
// }
// function calculate(){
//     if(screen.textContent){
//         screen.textContent=eval(screen.textContent);
//     }
//     else{
//         screen.textContent=false;
//     }
//     screen.value=screen.textContent;
//     screen.textContent="";
// }
