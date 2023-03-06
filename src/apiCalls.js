import { handleResponse } from "./utils";


export const apiCalls = {
    async getAllCategories() {
      let response = await fetch('https://trival-dispute-db.herokuapp.com/api/v1/questions/all')
      return await handleResponse(response)
    },
  
    async getQuestionsByCategory(category) {
      let response = await fetch(`https://trival-dispute-db.herokuapp.com/api/v1/questions?category=${category}`)
      return await handleResponse(response)
    },
  
    async postNewQuestion(question) {
      const response = await fetch('https://trival-dispute-db.herokuapp.com/api/v1/questions', {
        method: 'POST',
        body: JSON.stringify(question),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return await handleResponse(response)
    }
  
  }