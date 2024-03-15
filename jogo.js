class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

        if (tipo === "mago") {
            this.ataque = "magia"
        } else if (tipo === "guerreiro") {
            this.ataque = "espada"
        } else if (tipo === "monge"){
            this.ataque = "artes marciais"
        } else if (tipo === "ninja"){
            this.ataque = "shuriken"
        }
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}
let descHero = new Hero ("Saiadin", 25, "ninja")
descHero.atacar()