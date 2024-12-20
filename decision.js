// if 
const age = 25;

if(age > 20){
 console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3){
  console.log("that's a lot of ninjas!");
}

const password = 'p@ssword';

if(password.length >= 8){
  console.log('that password is long enough');
}

if(password.length >= 12){
    console.log('that password is mighty strong');
} 
else if(password.length >= 8){
    console.log('that password is long enough');
} else {
    console.log('password should be at least 8 characters long');
}

// another else if
  if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('that password is strong enough');
} else {
    console.log('that password is not strong enough');
}