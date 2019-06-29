let calculatorModule = (function(){
    let memory = 0;
    let total = 0;
    let calc = {
    };
  //Begin Functions
  function sum (x, y){
      return x + y;
    }
    function decrease (x, y){
      return x - y;
    }
    function division(x, y){
      return x / y;
    }
    function multiplication(x, y){
      return x*y;
    }
    function getTotal() {
      return total;
    }
    function recallMemory() {
      return memory;
     }
    function saveMemory() {
      memory = total;
      return memory;
     }
     function resetMemory() {
      total = memory;
      return total;
     }
  
  //Return public keys
  return {
              sum : sum,
         decrease : decrease,
         division : division,
   multiplication : multiplication,
            total : total,
           memory : memory,
         getTotal : getTotal,
     recallMemory : recallMemory,
       saveMemory : saveMemory,
     };
  })();