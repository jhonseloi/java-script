class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} ligado.`)
            return 
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} desligado.`)
            return 
        }

        this.ligado = false
    } 
}

const disp = new DispositivoEletronico('Smartphone')

disp.ligar()
disp.ligar()
console.log(disp)

disp.desligar()
disp.desligar()
console.log(disp)

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const smartp = new Smartphone('Samsung', 'Preto', 'Galaxy S10')
smartp.ligar()
console.log(smartp)
smartp.desligar()
console.log(smartp)

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    ligar() {
        console.log(`Você mudou o método ligar.`) // Sobrescrvendo método da superclasse
        this.ligado = true
    }
}

const tb = new Tablet('iPad', true)
tb.ligar()
console.log(tb)
