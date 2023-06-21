import { auth, db } from "../firebase/config.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { collection, addDoc } from  "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"


const message = document.getElementById("txtMessage");

const getEmail = () => {
    return document.getElementById("txtEmail").value;
}

const getPassword = () => {
    return document.getElementById("txtPassword").value;
}

const getName = () => {
    return document.getElementById("txtNome").value;
}

const getGender = () => {
    const rbMasculino = document.getElementById("rbMasculino");
    if (rbMasculino.checked) {
        return rbMasculino.value;
    }

    const rbFeminino = document.getElementById("rbFeminino");
    if (rbFeminino.checked) {
        return rbFeminino.value;
    }

    return "";
}

const getBirthDate = () => {
    return document.getElementById("calDataNasc").value;
}

const cadastrarUsuario = () => {
    message.innerHTML = '';

    console.log(getEmail() + ' ' + getPassword());

    createUserWithEmailAndPassword(auth, getEmail(), getPassword())
        .then((result) => {
            console.log("Usuario cadastrado com sucesso!" + JSON.stringify(result));
            window.location.href = "entrar.html";

            // Cadastrar usuário dentro do Firestore
            const colecao = collection(db, "usuarios");
            const doc = {
                nome: getName(),
                genero: getGender(),
                dataNascimento: getBirthDate()
            };

            addDoc(colecao, doc)
                .then((retorno) => {
                    console.log("Documento cadastrado com sucesso: " + JSON.stringify(retorno));
                })
                .catch((error) => {
                    console.log("Erro ao criar documento: " + JSON.stringify(error));
                });
        })
        .catch((error) => {
            console.log("Erro ao cadastrar usuário: " + JSON.stringify(error));

            switch (error.code) {
                case "auth/weak-password":
                    message.innerHTML = "Senha fraca!";
                    break;
                case "auth/invalid-email":
                    message.innerHTML = "E-mail inválido!";
                    break;
            }
        });
}

document.getElementById("btnCadastrar").addEventListener('click', () => {
    cadastrarUsuario();
});