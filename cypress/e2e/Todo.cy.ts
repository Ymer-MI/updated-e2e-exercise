describe('Todo App', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('can add a new todo', () => {
        const input = cy.get('#newTodoText').should('exist'), button = cy.get('#newTodoForm button').first().should('exist').should('have.text', 'Skapa')

        input.type('New Todo')
        button.click()

        cy.get('#todos').children().should('have.length', 1).first().should('have.text', 'New Todo').and('have.class', 'todo__text').and('not.have.class', 'todo__text--done')

    })
})