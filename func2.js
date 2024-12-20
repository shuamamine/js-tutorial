const bill = function(products, tax){
      let total = 0;
      for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
      }
      return total;
    }

    const bill1 = (products, tax) => {
        let total = 0;
        for(let i = 0; i < products.length; i++){
          total += products[i]  + products[i] * tax;
        }
        return total;
      }
      
      console.log(greet());
      console.log(bill1([10,15,30], 0.2));
      console.log(bill([10,15,30], 0.2));