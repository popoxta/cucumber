const { Given, When, Then } = require('@cucumber/cucumber')
const {Person} = require("../../src/shouty");

Given('Lucy is located {int} metres from Sean', (distance) => {
    const lucy = new Person
    const sean = new Person
    lucy.moveTo(distance)
})

When('Sean shouts {string}', (string) => {
    return 'pending'
})

Then('Lucy hears Sean\'s message', () => {
    return 'pending'
})