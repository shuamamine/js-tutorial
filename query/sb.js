const para2 = document.querySelector('p');
const para1 = document.querySelector('.error');
const para = document.querySelector('div.error');

console.log(para);

// query multiple elements at once
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(paras, errors);
console.log(paras[1], errors[0]);