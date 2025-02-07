// Superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/C: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(11, 22, 10)
conta1.depositar(11)
conta1.depositar(10)
conta1.sacar(30)
conta1.sacar(2)
console.log()

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

const cc = new ContaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)
console.log()

function ContaPoupança(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança

const cp = new ContaPoupança(22, 33, 0)
cp.depositar(10)
cp.sacar(10)
cp.sacar(1)
