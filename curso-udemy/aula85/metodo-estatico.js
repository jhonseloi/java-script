class ControleRemoto {
    // Métodos de instância
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    // Método estático
    static trocaPilha() {
        console.log('Vou trocar a pilha.') 
        console.log(this) // retorna a classe
        console.log(this.volume)
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.diminuirVolume()
console.log(controle1)
ControleRemoto.trocaPilha()
