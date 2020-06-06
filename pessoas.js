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
    calcularFemininos(){
        var feminino = 0
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="F"){
                feminino ++
            }else {feminino = feminino}
        } return feminino
    }
    calcularIdade(){
        var crianca = 0
        var adolecente = 0
        var adulto = 0
        var idoso = 0
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].idade<14){
                crianca ++
            }else {if(this.lista[i].idade>=14 && this.lista[i].idade<18){
                adolecente ++
            }else {if(this.lista[i].idade>=18 && this.lista[i].idade<60){
                adulto ++
            } else { idoso ++}
        }
            }
        } return `<div>Crianças: ${crianca}</div><div>Adolecentes: ${adolecente}</div><div>Adultos: ${adulto}</div><div>Idosos: ${idoso}</div>`
    }



}

var m = new Cadastro([])

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
    let age = parseFloat(document.getElementById("idade").value)
    p = new Pessoas (name, genero, age)
    m.lista.push(p)
    console.log(p)
    masculino.innerHTML = `<div>Masculino: ${m.calcularMasculinos()}</div>`
    feminino.innerHTML = `<div>Feminino: ${m.calcularFemininos()}</div>`
    imprimiridade.innerHTML = `${m.calcularIdade()}`

}
