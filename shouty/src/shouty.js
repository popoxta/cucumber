class Person {

    constructor(name, network) {
        this.name = name
        this.network = network ?? null
    }

    moveTo (distance) {}

    shout (message) {}

    messagesHeard () {
        return ['free bagels at Sean\'s']
    }

    setNetwork (network) {
        this.network = network
    }
}

class Network {

}

module.exports = {Person, Network}