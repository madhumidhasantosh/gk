const answers = {
    'question1': 'Delhi',
    'question2': 'Dispur',
    'question3': 'Madrid',
    'question4': 'Tokyo',
    'question5': 'Washington DC',
    'question6': 'Paris',
    'question7': 'Berlin',
    'question8': 'Canberra',
    'question9': 'Rio de Janeiro',
    'question10': 'Columbo'
  }
  
  document.querySelector('.submit-button').addEventListener('click', function() {  
    let score = 0
    
    const question_1_answer = document.querySelector('input[name="india_capital"]:checked')?.value
    if (question_1_answer === answers.question1) score += 1
  
    const question_2_answer = document.querySelector('input[name="assam_capital"]:checked')?.value
    if (question_2_answer === answers.question2) score += 1
  
    const question_3_answer = document.querySelector('input[name="spain_capital"]:checked')?.value
    if (question_3_answer === answers.question3) score += 1
  
    const question_4_answer = document.querySelector('input[name="japan_capital"]:checked')?.value
    if (question_4_answer === answers.question4) score += 1
  
    const question_5_answer = document.querySelector('input[name="usa_capital"]:checked')?.value
    if (question_5_answer === answers.question5) score += 1
  
    const question_6_answer = document.querySelector('input[name="france_capital"]:checked')?.value
    if (question_6_answer === answers.question6) score += 1
  
    const question_7_answer = document.querySelector('input[name="germany_capital"]:checked')?.value
    if (question_7_answer === answers.question7) score += 1
  
    const question_8_answer = document.querySelector('input[name="australia_capital"]:checked')?.value
    if (question_8_answer === answers.question8) score += 1
  
    const question_9_answer = document.querySelector('input[name="brazil_capital"]:checked')?.value
    if (question_9_answer === answers.question9) score += 1
  
    const question_10_answer = document.querySelector('input[name="lanka_capital"]:checked')?.value
    if (question_10_answer === answers.question10) score += 1
  
    document.getElementById('score').innerHTML = `You scored ${score}`;
    document.querySelector('.hidden').classList.remove('hidden');
  })