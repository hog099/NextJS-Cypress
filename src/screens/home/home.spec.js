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
            describe('Action count', () => {
                for (let index = 0; index < 5; index++) {
                    it('Should increment state', () => {
                        cy.get('[data-cy=btn-count]').contains('Increment').click()
                    })
                }
            })
            describe('Link Profile', () => {
                it('Should navigate to Profile page', () => {
                    cy.get('[data-cy=link-navigation]').contains('Perfil').click()
                    cy.url().should('include', '/profile')
                    cy.go('back')
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
                describe('Action count', () => {
                    for (let index = 0; index < 5; index++) {
                        it('Should increment state', () => {
                            cy.get('[data-cy=btn-count]').contains('Increment').click()
                        })
                    }
                })
                describe('Link Profile', () => {
                    it('Should navigate to Profile page', () => {
                        cy.get('[data-cy=link-navigation]').contains('Perfil').click()
                        cy.url().should('include', '/profile')
                        cy.go('back')
                    })
                })
            })
        })
    })
})