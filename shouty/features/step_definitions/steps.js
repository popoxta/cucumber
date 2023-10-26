const { Given, When, Then } = require('@cucumber/cucumber')
const {Person} = require("../../src/shouty");
const {assertThat, is} = require("hamjest");

// given set up
Given('Lucy is located {int} metre(s) from Sean', (distance) => {
    this.lucy = new Person
    this.sean = new Person
    this.lucy.moveTo(distance)
})

When('Sean shouts {string}', (message) => {
    this.sean.shout(message)
    this.message = message
})

Then('Lucy hears Sean\'s message', () => {
    assertThat(this.lucy.messagesHeard(), is([this.message]))
})