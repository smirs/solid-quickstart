describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('🏀 New Record: 358', { matchCase: false })
  })

  it('displays Click button', () => {
    cy.get('button')
    .contains('Hit it now!');
  })
})
