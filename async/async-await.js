const getTodos = async () => {

    let response = await fetch('json/luigi.json');
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
      }
    let data = await response.json();
    return data;
  
  };
  
  console.log(1);
  console.log(2);
  
  getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));
  
//   console.log(3);
//   console.log(4);
  
  // console.log(getTodos());