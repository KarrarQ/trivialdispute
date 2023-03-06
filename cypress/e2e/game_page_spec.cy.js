describe('Trivia Dispute user flow', () => {

	it('should display current question card and allow user to submit checked answer ', () => {
		cy.intercept('http://localhost:3001/api/v1/questions/all', { fixture: 'triviaQuestions.json' })
		cy.visit('http://localhost:3000')
			.get('.category-card').contains('All Categories').click()

		//first question
		cy.get('.radio-button')
			.children()
			.first()
			.click()
			.trigger('change')
			.get('.submit-answer-button').click()

		//second question 
		cy.get('.radio-button')
			.children()
			.eq(2)
			.click()
			.trigger('change')
			.get('.submit-answer-button').click()

		//third question
		cy.get('.radio-button')
			.children()
			.eq(3)
			.click()
			.trigger('change')
			.get('.submit-answer-button').click()

	})

	it('should display final score and correct answers at end of game', () => {
		cy.intercept('http://localhost:3001/api/v1/questions/all', { fixture: 'singleQuestion.json' })
		cy.visit('http://localhost:3000')
			.get('.category-card').contains('All Categories').click()

		//first question
		cy.get('.radio-button')
			.children()
			.eq(3)
			.click()
			.trigger('change')
			.get('.submit-answer-button').click()
			.get('.correct-answers-msg').contains('The correct answers for the game are:')
			.get('.options').contains('John McEnroe')
	})

	it('should allow user to return to landing page', () => {
		cy.intercept('http://localhost:3001/api/v1/questions?category=History', { fixture: 'historyQuestion.json' })
		cy.visit('http://localhost:3000')
			.get('.category-card').contains('History').click()
	})
  
})