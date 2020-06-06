class Pessoas{
    constructor(nome,sexo,idade){
        this.nome=nome;
        this.sexo=sexo;
        this.idade=idade;
    }
}

function clique(){
    let name = document.getElementById("nome").value
    let age = document.getElementById("idade").value
    let genero = document.querySelector("input[type=radio]:checked").value

    p = new Pessoas (name, age, genero)
}
