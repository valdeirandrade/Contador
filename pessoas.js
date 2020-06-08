class Cadastro{
    constructor(lista){
        this.lista=lista
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

    contarMasculino(){
        //cria um array para colocarmos apenas as idades dos cadastros
        var masculino = []
        var feminino = []
        
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="M"){
                masculino.push(this.lista[i].idade)                          
            }else {feminino.push(this.lista[i].idade)}
        }
        var idademasc = 0
        for(var i = 0; i<masculino.length; i++){
            idademasc += masculino[i]
        }
        var mediamasc = idademasc/masculino.length
        
        var maiormasc = masculino[0]
        for(var i = 0; i<masculino.length; i++){
            if (maiormasc< masculino[i]){
                maiormasc = masculino[i]
            }else {maiormasc = maiormasc}}

        var menormasc = masculino[0]
        for(var i = 0; i<masculino.length; i++){
            if (menormasc> masculino[i]){
                menormasc = masculino[i]
            }else {menormasc = menormasc}
        }
        return `Masculino: ${masculino.length} Cadastros; Menor idade é: ${menormasc}; Maior idade é: ${maiormasc}; A média de idade é:${mediamasc.toFixed(1)}`
    }
    contarFeminino(){
        var feminino = 0
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="F"){
                feminino ++
            }else {feminino = feminino}
        } 
        // somar idades femininos
        var idadefem = 0
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="F"){
                idadefem += this.lista[i].idade
            }else {idadefem = idadefem}
        }
        // Ver maior idade femininos
        var maiorfem = this.lista[0].idade
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="F" && maiorfem< this.lista[i].idade){
                maiorfem = this.lista[i].idade
            }else {maiorfem = maiorfem}
        } 
        // Ver menor idade femininos
        var menorfem = this.lista[0].idade
        for(var i = 0; i<this.lista.length; i++){
            if (this.lista[i].sexo=="M" && menorfem> this.lista[i].idade){
                menorfem = this.lista[i].idade
            }else {menorfem = menorfem}
        }
        return `Feminino: ${feminino} Cadastros; Menor idade é: ${menorfem}; Maior idade é: ${maiorfem}; A média de idade é:${(idadefem/feminino).toFixed(1)}`
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
    feminino.innerHTML = `${m.contarFeminino()}`
    imprimiridade.innerHTML = `${m.contarIdade()}`

}
