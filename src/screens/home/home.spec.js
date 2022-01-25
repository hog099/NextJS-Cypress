describe('Home Test', () => {
    // For desktop view
    context('720p resolution', () => {
        beforeEach(() => {
            /**
             * Run these tests as if in a desktop browser,
             * with a 720p monitor
             */
            cy.viewport(1280, 720)
        })
        describe('When you visit home', () => {
            it('Should visit home page', () => {
                cy.visit('/')
            });
            describe('link-navigation', () => {
                it('Should navigate to Profile page', () => {
                    cy.get('[data-cy=link-navigation]').contains('Profile').click()
                    cy.url().should('include', '/profile')
                })
            })
        })
    })
    context('iphone-5 resolution', () => {
        beforeEach(() => {
            /**
             * Run these tests as if in a desktop browser,
             * with a 720p monitor
             */
            cy.viewport('iphone-5')
        })
        describe('When you visit home', () => {
            it('Should visit home page', () => {
                cy.visit('/')
            });
            describe('btn-count', () => {
                it('Should open the mmenu', () => {
                    cy.get('[data-cy=btn-count]').click();
                })
                describe('link-navigation', () => {
                    it('Should navigate to Profile page', () => {
                        cy.get('[data-cy=link-navigation]').contains('Profile').click()
                        cy.url().should('include', '/profile')
                    })
                })
            })
        })
    })
})