const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  //ul.appendChild(li);
  ul.prepend(li);
});

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // e.target.style.textDecoration = 'line-through';
    //     console.log('event in LI');
//     e.stopPropagation();
    e.target.remove();
  });
});

ul.addEventListener('click', e => {
    // console.log('event in UL');
    console.log(e.target, e);
    if(e.target.tagName === 'LI'){
      e.target.remove();
    }
  });


const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('OI! my content is copyrighted!!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
});