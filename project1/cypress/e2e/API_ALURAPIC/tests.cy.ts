describe('Testes na API do Alura Pic', () => {
    it('Valida retorno da API realizando login con usuário válido', () => {
        cy.request({
            method: 'POST',
            body: Cypress.env(),
            url: 'https://apialurapic.herokuapp.com/user/login'
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('id');
            expect(res.body.id).to.be.equal(1);
        })
    })
})