
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const statusRetirada = document.querySelectorAll(".status")



checkBoxes.forEach((caixinha, indice, lista) => {
    // console.log("caixinha: ", caixinha)
    // console.log("indice: ", indice)
    // console.log("lista: ", lista)

    caixinha.addEventListener("change", () => {

        console.log(statusRetirada)
        console.log(statusRetirada[indice])

        if(caixinha.checked == true) {
            statusRetirada[indice].classList.remove("aguardando")
            statusRetirada[indice].classList.add("retirado")
            statusRetirada[indice].textContent ="Retirado"
        
        } else {
            statusRetirada[indice].classList.remove("retirado")
            statusRetirada[indice].classList.add("aguardando")
            statusRetirada[indice].textContent = "Aguardando retirada"
            
        }

    })
})  

