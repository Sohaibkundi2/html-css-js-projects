let input = document.querySelector(".input");
let btn = document.querySelector(".btn");


function rev(str){
    return str.split("").reverse().join("");
}


function check(){
    let para = input.value;
    const reverse = rev(para);
    
    if (para===reverse) {
        alert("PALINDROME")
    } else {
        alert(" Not palindrome")
    }
        input.value="";
}