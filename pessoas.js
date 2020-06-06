class Cadastro{
    constructor(lista){
        this.lista=lista
    }
    calcularMasculinos(){
        var masculino = 0
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="M"){
                masculino ++
            }else {masculino = masculino}
        } return masculino
    }
}

var m = new Lista([])

class Pessoas{
    constructor(nome,sexo,idade){
        this.nome=nome;
        this.sexo=sexo;
        this.idade=idade;
    }
    

        }

function clique(){
    let name = document.getElementById("nome").value
    let genero = document.querySelector("input[type=radio]:checked").value
    let age = document.getElementById("idade").value
    p = new Pessoas (name, genero, age)
    m.lista.push(p)
    console.log(p)
}
