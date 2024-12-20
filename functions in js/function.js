function greet(){
    console.log('hello there');
  }
  const speak = function(){
    console.log('good day!');
  };

// greet();
// greet();

speak();

// arguments
const speak1 = function(name = 'Taylor', time = 'night'){
    console.log(`good ${time}, ${name}!`);
  };

// speak1('Cassie', 'morning');
// speak1();
// speak1('Amber');