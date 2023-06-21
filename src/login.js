import { auth } from "../firebase/config.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";


const message = document.getElementById("txtMessage")

const autenticarUsuario = () => {

    signInWithEmailAndPassword(auth, getEmail(), getPassword())
    .then((loggedUser) => {
        message.innerHTML = "Usuário autenticado com sucesso"
        window.location.href = "home.html"; 
    })
    .catch((error) => {
        message.innerHTML = "Erro: " + JSON.stringify(error)
    });


}

const getEmail = () => {
    return document.getElementById("txtEmail").value
}

const getPassword = () => {
    return document.getElementById("txtPassword").value
}

document.getElementById("btnEntrar").addEventListener('click', () => {
    autenticarUsuario()
})