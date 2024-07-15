describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name=nome]').type('Tarcisio');
    cy.get('input[name=email]').type('tarci@email.com');
    cy.get('input[name=password]').type('Senha1234');
    cy.get('input[name=confirm_password]').type('Senha1234');
    cy.contains('button', 'Cadastrar').click();

  })
})