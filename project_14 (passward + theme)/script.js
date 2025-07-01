const tougleEl = document.getElementById("tougle");
    tougleEl.addEventListener("change",()=>{
        var passwordEl = document.getElementById("password");
    if (tougleEl.checked) {
        passwordEl.type = "text";
    } else{
        passwordEl.type = "password";
    }
});
