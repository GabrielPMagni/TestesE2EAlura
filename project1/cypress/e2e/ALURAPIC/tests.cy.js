describe('Login e registro de usuários alura pic', () => {
  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com');
  });

  it('Verifica mensagens validação', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
  });

  it('Verifica mensagens validação do email de itens obrigatórios', () => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="email"]').type('emailinvalido');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
  });

  it('Verifica mensagens validação do nome completo', () => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="fullName"]').type('a');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    cy.get('input[formcontrolname="fullName"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible');
  });

  it('Verifica mensagens validação do nome de usuário', () => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="userName"]').type('f');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    cy.get('input[formcontrolname="userName"]').type('lavio');
    cy.contains('ap-vmessage', 'Username already taken').should('be.visible');
    cy.get('input[formcontrolname="userName"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    cy.get('input[formcontrolname="userName"]').type('A');
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
  });

  it('Verifica mensagens validação da senha', () => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="password"]').type('a');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    cy.get('input[formcontrolname="password"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
  
  });
})