const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");

const imagemRobo = document.querySelector("#robotron");
const corRobo = document.querySelectorAll("[data-cor]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {

    elemento.addEventListener("click", (e) => {
        manipulaDados(e.target.dataset.controle, e.target.parentNode);
        atualizaEstatisticas(e.target.dataset.peca);
    })
})


corRobo.forEach((elemento) =>{
    elemento.addEventListener("click", (e) =>{
        trocaCor(e.target.dataset.cor);
    })
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    //console.log(pecas[peca]);

    estatistica.forEach( (elemento) => {
       //console.log(elemento.dataset.estatistica)
        //console.log(elemento.textContent)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]; 
    })
}

function trocaCor(cor){

    if(cor === "amarelo"){
        console.log("Mudou para Amarelo");
        imagemRobo.setAttribute('src', "img/Robotron-Amarelo.png") 
    }
    if(cor === "azul"){
        console.log("Mudou para Azul");
        imagemRobo.setAttribute('src', "img/Robotron-Azul.png") 
    }
    if(cor === "preto"){
        console.log("Mudou para Preto");
        imagemRobo.setAttribute('src', "img/Robotron-Preto.png") 
    }
    if(cor === "vermelho"){
        console.log("Mudou para Vermelho");
        imagemRobo.setAttribute('src', "img/Robotron-Vermelho.png") 
    }
    if(cor === "branco"){
        console.log("Mudou para Branco");
        imagemRobo.setAttribute('src', "img/Robotron-Branco.png") 
    }
    if(cor === "rosa"){
        console.log("Mudou para Rosa");
        imagemRobo.setAttribute('src', "img/Robotron-Rosa.png") 
    }
   
}

