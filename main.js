/*start original*/

const functionClear = function() {
  document.getElementById('inputFahrenheit').value = "";
  document.getElementById('inputCelcius').value = "";
};

const convertFtoC = function() {
  let a = document.getElementById('inputFahrenheit').value;

    if (a != "") {
      let inputF = document.getElementById('inputFahrenheit').value;
      let f = inputF;
    
      let result = (Number(f) * Number(9/5)) + Number(32);
      let finalResult = parseFloat(result).toFixed(2);
        
      return (finalResult);
    }

    else {
      document.getElementById('inputCelcius').value = "";
    };
};

const convertCtoF = function() {
  let a = document.getElementById('inputFahrenheit').value;

    if (a != "") {
      let inputF = document.getElementById('inputFahrenheit').value;
      let f = inputF;
    
      let result = (Number(f) * Number(9/5)) + Number(32);
      let finalResult = parseFloat(result).toFixed(2);
        
      return (finalResult);
    }

    else {
      document.getElementById('inputCelcius').value = "";
    };
};

/*end original*/

/*start revision1
const functionClear = function() {
  document.getElementById('inputField').value = "";
  document.getElementById('outputField').value = "";
};

const functionConvert = function() {
  let select1 = document.getElementById('inputFloatingSelectGrid');
  let value1 = select1.options[select1.selectedIndex].value;
  //alert(value1);
  
  let select2 = document.getElementById('outputFloatingSelectGrid');
  let value2 = select2.options[select2.selectedIndex].value;
  //alert(value2);

  if (value1 == "1") and (value2 == "1"); {
    let x = document.getElementById('inputField').value;
    
    let y = x;
    
    let result = (Number(y) * Number(9/5)) + Number(32);
    let finalResult = parseFloat(result).toFixed(2);
      
    return (finalResult);
  };

};

/*end revision1*/

