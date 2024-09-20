export interface Question {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    answers: string[],
    correct_answer: string,
    selected_answer: string,
}

export interface Quiz {
    name: string,
    category: number,
    amountQuestions: number,
    questions: Question[],
}
  
export interface Result {
    response_code: number,
    results: any[],
}