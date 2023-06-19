import { auth } from "../firebase/config.js"
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const message = document.getElementById("txtMessage")

const getEmail = () => {
    return document.getElementById("txtEmail").value 
}

const recuperarSenha = () => {
    sendPasswordResetEmail(auth, getEmail())
        .then(() => {
            message.innerHTML = "Um e-mail de redefinição foi enviado."
        })
        .catch((error) => {
            message.innerHTML = error.code;  
    })
}

document.getElementById("btnRecuperar").addEventListener('click', () => {
    recuperarSenha()
})
