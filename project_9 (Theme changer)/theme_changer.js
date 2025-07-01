/*let body = document.querySelectorAll("body")[0]
let bgcolor=(color)=>{
    body.style.backgroundColor="color";
}
*/
let a= document.getElementsByTagName("body")[0]
function bgcolor(colr) {
    a.style.backgroundColor = colr;    
    
}
function randcolor(){
const red=Math.round(Math.random() * 255)
const green=Math.round(Math.random() * 255)
const blue=Math.round(Math.random() * 255)
const colors=`rgb(${red}, ${green}, ${blue})`
a.style.backgroundColor = colors;
}