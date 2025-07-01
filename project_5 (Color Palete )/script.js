const colorContainerEl = document.querySelector(".container");



    for (let index = 0; index < 120; index++) {
        const colorContainer = document.createElement("div");
        colorContainer.classList.add("color-container");
        colorContainerEl.appendChild(colorContainer);
        
    }

    const colorContainerEls = document.querySelectorAll(".color-container");




    const randColor=()=>{
        const chars = "0123456789abcdef";
        const colorCodelen= 6;
        let colorCode= "";

        for (let index = 0; index < colorCodelen; index++) {
            
            const randumColor = Math.floor(Math.random()*chars.length);
            colorCode += chars.substring(randumColor, randumColor +1);
        }
        return(colorCode);
    }

    const colorGenerate=()=>{

        colorContainerEls.forEach(
            (colorContainerEl)=>{
                const newColorCode = randColor();
                colorContainerEl.style.backgroundColor=`#${newColorCode}`;
                colorContainerEl.innerText = "#"+newColorCode;
//                colorContainerEl.style.border="#" + newColorCode;
            }
        )
    }

    colorGenerate();