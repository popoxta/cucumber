const {Given, When, Then} = require('@cucumber/cucumber')
const {Person, Network} = require("../../src/shouty");
const {assertThat, is} = require("hamjest");

Given('{person} is standing/located {int} metre(s) from Sean', function (person, distance) {
    this.network = new Network()
    this.person = person
    this.person.setNetwork(this.network)
    this.sean = new Person('Sean', this.network)

    this.person.moveTo(distance)
})

When('Sean shouts {string}', function (message) {
    this.sean.shout(message)
    this.messageFromSean = message
})

Then('Lucy hears Sean\'s message', function () {
    assertThat(this.person.messagesHeard(), is([this.messageFromSean]))
})
