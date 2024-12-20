const speak = function(name, time){
  console.log(`good ${time}, ${name}!`);
};

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}
  
const area = calcArea(5);
console.log('area is:', area);

const calcArea1 = radius => 3.14 * radius**2;

const area1 = calcArea1(5);
console.log('area is:', area1);

const greet = function(){
  return 'hello, world';
}

const greet1 = () => 'hello, world';
