describe("Test Suite - conjunto de pruebas", () => {
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    }),
    it("Validar Pagina Inicio", () => {
        cy.get('#divLogo > img').should("be.visible");
        cy.get('#txtUsername').should("be.visible");
        cy.get('#footer > :nth-child(1)').contains("OrangeHRM 4.10.1");
        cy.get('#btnLogin').should("be.visible");
    })
    it.only("validar la pagina de adicionar usuarios", () => {
        cy.get('#txtUsername').type('Admin');
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').click();
        cy.get('#menu_admin_viewAdminModule > b').click();
        cy.get('#btnAdd').click();
        cy.get('#systemUser_employeeName_empName').type('Juan');
        cy.get('#systemUser_userName').type('juan13');
        cy.get('#systemUser_password').type('Juan13*');
        cy.get('#systemUser_confirmPassword').type('Juan13*');

    })

});