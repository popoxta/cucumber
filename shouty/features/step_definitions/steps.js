const { Given, When, Then } = require('@cucumber/cucumber')
const {Person} = require("../../src/shouty");
const {assertThat, is} = require("hamjest");

// given set up
Given('{person} is located/standing {int} metre(s) from Sean', (person, distance) => {
    this.person = person
    this.sean = new Person('Sean')
    this.person.moveTo(distance)
})

When('Sean shouts {string}', (message) => {
    this.sean.shout(message)
    this.message = message
})

Then('Lucy hears Sean\'s message', () => {
    assertThat(this.person.messagesHeard(), is([this.message]))
})