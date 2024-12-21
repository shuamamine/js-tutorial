console.log("hello, world!");

let mail = 'contact@example.com';
console.log(mail);

// concatenation
let fname = 'Peter';
let lname = 'Griffin';
let fullName = fname + ' ' + lname;
console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let index = mail.indexOf('@');
console.log('index of the @ sign:', index);

mail.lastIndexOf('n');

mail.slice(0,5);

mail.substring(5,12);


mail.replace('n', 'w');

console.log(result);