class Cadastro{
    constructor(lista){
        this.lista=lista
    }
    contarMasculino(){
        var masculino = 0
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="M"){
                masculino ++
            }else {masculino = masculino}
        }
        // somar idades masculinos
        var idademasc = 0
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="M"){
                idademasc += this.lista[i].idade
            }else {idademasc = idademasc}
        }
        // Ver maior idade masculinos
        var maiormasc = this.lista[0].idade
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="M" && maiormasc< this.lista[i].idade){
                maiormasc = this.lista[i].idade
            }else {maiormasc = maiormasc}
        } 
        // Ver menor idade masculinos
        var menormasc = this.lista[0].idade
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="M" && menormasc> this.lista[i].idade){
                menormasc = this.lista[i].idade
            }else {menormasc = menormasc}
        }
        return `Masculino: ${masculino} Cadastros; Menor idade é: ${menormasc}; Maior idade é: ${maiormasc}; A média de idade é:${(idademasc/masculino).toFixed(1)}`
    }
    contarFeminino(){
        var feminino = 0
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="F"){
                feminino ++
            }else {feminino = feminino}
        } return feminino
    }
    contarIdade(){
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
    masculino.innerHTML = `${m.contarMasculino()}`
    feminino.innerHTML = `<div>Feminino: ${m.contarFeminino()}</div>`
    imprimiridade.innerHTML = `${m.contarIdade()}`

}
