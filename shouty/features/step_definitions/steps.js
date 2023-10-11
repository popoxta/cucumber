const { Given, When, Then } = require('@cucumber/cucumber')
const {Person} = require("../../src/shouty");

// given set up
Given('Lucy is located {int} metres from Sean', (distance) => {
    this.lucy = new Person
    this.sean = new Person
    this.lucy.moveTo(distance)
})

When('Sean shouts {string}', (message) => {
    this.sean.shout(message)
})

Then('Lucy hears Sean\'s message', () => {
    return 'pending'
})