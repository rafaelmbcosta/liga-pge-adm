import { cyan } from "ansi-colors"

describe('Login View', () => {
  it('Visits the login screen', () => {
    cy.visit('http://localhost:8080')
    cy.contains('Login')
    cy.contains('Password')
  })

  it('Invalid login', () => {
    cy.visit('http://localhost:8080')
    // login fill
    // password fill
    // click enter
    // see invalid login
  })
})
