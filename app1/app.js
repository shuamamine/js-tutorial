const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25;
    }
  });

  // log the score to console
  console.log(score);

    // show the result
    result.querySelector('span').textContent = `${score}%`;

    scrollTo(0, 0);
    result.classList.remove('d-none');
    
    result.classList.remove('d-none');


let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});
// window object (the global object)

// console.log(window);

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// // alert('hello');
// // window.alert('hello again');

// setTimeout(() => {
//   alert('hello, ninjas');
// }, 3000);