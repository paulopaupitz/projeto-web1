import { auth } from "../firebase/config.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const message = document.getElementById("txtMessage")

const getEmail = () => {
    return document.getElementById("txtEmail").value 
    
}

const getPassword = () => {
    return document.getElementById("txtPassword").value

}

const cadastrarUsuario = () => {
    message.innerHTML = ''

    console.log(getEmail()+ ' ' +getPassword())

    createUserWithEmailAndPassword(auth, getEmail(), getPassword())

        .then((result) => {
        console.log("Usuario cadastrado com sucesso!" + JSON.stringify(result))
        })


        .catch((error) => {
            console.log("Erro ao cadastrar usuário: " + JSON.stringify(error))

            switch (error.code) {
                case "auth/weak-password":
                    message.innerHTML = "Senha fraca!"
                    break;
                case "auth/invalid-email":
                    message.innerHTML = "E-mail inválido!"
            }
        })
    
}

document.getElementById("btnCadastrar").addEventListener('click', () => {
    cadastrarUsuario()
})
