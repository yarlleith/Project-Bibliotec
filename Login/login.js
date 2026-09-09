


//console.log("Hello world!!")

//alert("Hello world!!")

//var nome = "Yarllei" nao usar
//let nome = "Yarllei"
//const nome = "Yarllei"


const campoSenha = document.getElementById("senha")
const bntSenha = document.querySelector("#mostrar-senha")


bntSenha.addEventListener("click", function(){
  //  e.preventDefault()
  //  if(campoSenha.type == "password"){
  //      campoSenha.type = "text"
  //  }
  //  else{
  //      campoSenha.type = "password"
  //  }

    campoSenha.type = campoSenha.type == "password" ? "text" : "password"
 })