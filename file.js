//aggiunto stile pulsante +
let subtract = document.querySelector("#increment"); //selezione elemento pulsante +
    
    //assegnazione funzione personalizzata
    function setHoverColor() {
        subtract.style.background = "#04aa6d";
    }

    function setNormalColor() {
        subtract.style.background = "";
    }

    //assegnazione listener pulsante +
    subtract.addEventListener("mouseover", setHoverColor);
    subtract.addEventListener("mouseout", setNormalColor); 



//aggiunta stile pulsante -
let add = document.querySelector("#decrement"); //selezione elemento pulsante -
    
    //assegnazione funzione personalizzata
    function setHoverColorDecrement() {
        add.style.background = "red";
    }

    function setNormalColorDecrement() {
        add.style.background = "";
    }

    //assegnazione listener pulsante -
    add.addEventListener("mouseover", setHoverColorDecrement);
    add.addEventListener("mouseout", setNormalColorDecrement);



//contatore
let number = document.querySelector("#number");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement")

    //attivazione pulsanti al click
    increment.addEventListener("click", plus);
    decrement.addEventListener("click", less);

    //aggiungi numero
    function plus() {
        number.innerHTML++;
        number.style.color = "#04aa6d";
    }

    //sottrai numero
    function less() {
        number.innerHTML--;
        number.style.color = "red";
    }
