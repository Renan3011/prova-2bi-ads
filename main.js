const API_URL = "https://6a29f508f59cb8f65f1ddf9f.mockapi.io/:materiais";

const inputNome = document.getElementById("input-nome");
const inputQuantidade = document.getElementById("input-quantidade");
const btnCadastrar = document.getElementById("btn-cadastrar");
const listaMateriais = document.getElementById("lista-materiais");


async function carregarMateriais() {
    listaMateriais.innerHTML = "";
    const response = await fetch(API_URL);
    const materiais = await response.json();
    materiais.forEach(mat => {
        const li = document.createElement("li");
        li.textContent = `${mat.nome} - ${mat.quantidade}`;
        listaMateriais.appendChild(li);
    });
}


async function cadastrarMaterial() {
    const novoMaterial = {
        nome: inputNome.value,
        quantidade: inputQuantidade.value
    };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoMaterial)
    });

    inputNome.value = "";
    inputQuantidade.value = "";
    carregarMateriais();
}


btnCadastrar.addEventListener("click", cadastrarMaterial);

carregarMateriais();
