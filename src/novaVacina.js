import { db } from "../firebase/config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const message = document.getElementById("txtMessage");

const getDataVacinacao = () => {
  return document.getElementById("calDataVax").value;
};

const getNomeVacina = () => {
  return document.getElementById("txtVacina").value;
};

const getTipoDose = () => {
  const doseRadios = document.getElementsByName("tipo");
  for (let i = 0; i < doseRadios.length; i++) {
    if (doseRadios[i].checked) {
      return doseRadios[i].value;
    }
  }
};

const getProximaDataVacinacao = () => {
  return document.getElementById("calProxVax").value;
};

const cadastrarVacina = () => {
  const idUsuario = 'Mx54JGtsMDXKM7UsCpWCxEvRHyR2';

  const colecao = collection(db, `usuarios/${idUsuario}/vacinas`);
  const doc = {
    nomeVac: getNomeVacina(),
    proVac: getProximaDataVacinacao(),
    dataVac: getDataVacinacao(),
    tipoDose: getTipoDose() 
  };

  addDoc(colecao, doc)
    .then((result) => {
      console.log("Vacina cadastrada com sucesso: " + JSON.stringify(result));
    })
    .catch((error) => {
      console.log("Erro ao cadastrar a vacina: " + JSON.stringify(error));
    });
};

document.getElementById("btnCadastrarVacina").addEventListener("click", () => {
  cadastrarVacina();
});
