/// <reference types="cypress" />

import $ from 'cypress'

describe('Login demo guru', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.demo.guru99.com/v4/index.php')
  })
  
  it("Login Input is Valid", () => {
    cy.get('td > input[name=uid]').type('mngr529574')
    cy.get('td > input[name=password').type('UnedEtA')
    cy.get('td > input[name=btnLogin').type('submit') 
  })

  it("Login Input is Wrong", () => {
    cy.get('td > input[name=uid]').type('adhgahgda') 
    cy.get('td > input[name=password').type('sdhsdhssds')
    cy.get('td > input[name=btnLogin').type('submit')
  })
  
  it("Login Input (Invalid userID and Valid password)", () => {
    cy.get('td > input[name=uid]').type('adhgahgda') 
    cy.get('td > input[name=password').type('UnedEtA')
    cy.get('td > input[name=btnLogin').type('submit') 
  })

  it("Login Input (Valid userID and Invalid password)", () => {
    cy.get('td > input[name=uid]').type('mngr529574') 
    cy.get('td > input[name=password').type('adhgahgda')
    cy.get('td > input[name=btnLogin').type('submit') 
  })

  it("Login Input (userID Empty and password Empty)", () => {
    cy.get('td > input[name=btnLogin').type('submit') 
  })

  it("Reset Login", () => {
    cy.get('td > input[name=uid]').type('adhgahgda')
    cy.get('td > input[name=password').type('sdhsdhssds')
    cy.get('td > input[name=btnReset').type('reset') 
  })

  it("Reset Login (userID only)", () => {
    cy.get('td > input[name=uid]').type('adhgahgda')
    cy.get('td > input[name=btnReset').type('reset') 
  })

  it("Reset Login (password only)", () => {
    cy.get('td > input[name=password').type('sdhsdhssds')
    cy.get('td > input[name=btnReset').type('reset') 
  })
})