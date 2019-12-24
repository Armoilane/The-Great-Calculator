// calculator to come 
const operatorButtons = [
  { id: 'clr',
    class: 'button',
    text: 'C',
  },{ 
    id: 'divide',
    class: 'button',
    text: '/',
  },{ 
    id: 'multiply',
    class: 'button',
    text: '*',
  },{ 
    id: 'substract',
    class: 'button',
    text: '-',
  },{ 
    id: 'add',
    class: 'button',
    text: '+',
  },{ 
    id: 'operate',
    class: 'button',
    text: 'DO MATH',
  } 
];

let inputString = '';
const inputArray = [];
let  result = '';

createDisplay(inputString);
addbuttonGrid();
addOperatorButtons(operatorButtons);


function resetCalculator () {
  inputString = '';
  inputArray.shift();
  document.getElementById('display').innerHTML = '';
}


function operate ( inputArray ) {

  organizeInput();
  
  for ( let i = 0 ; i < inputArray.length ; i++ ) {
    
    if ( inputArray[i] == '*' ) {
      inputArray[i-1] = inputArray[i-1] * inputArray[i+1];
      inputArray.splice(i, 2);
      if ( inputArray.length > 1 ) {
        i = 0;
      }
      console.log(inputArray);
    }
  
  }

  for ( let i = 0 ; i < inputArray.length ; i++ ) {
    
    if ( inputArray[i] == '/' ) {
      if ( inputArray[i+1] == '0' ) {
        alert('With zero you must divide not!');
        resetCalculator();
        return;
      }
      inputArray[i-1] = inputArray[i-1] / inputArray[i+1];
      inputArray.splice(i, 2);
      if ( inputArray.length > 1 ) {
        i = 0;
      }
      console.log(inputArray);
    }
  
  }

  for ( let i = 0 ; i < inputArray.length ; i++ ) {
    
    if ( inputArray[i] == '+' ) {
      inputArray[i-1] = +inputArray[i-1] + +inputArray[i+1];
      inputArray.splice(i, 2);
      if ( inputArray.length > 1 ) {
        i = 0;
      }
      console.log(inputArray);
    }
  
  }
  
  for ( let i = 0 ; i < inputArray.length ; i++ ) {
    
    if ( inputArray[i] == '-' ) {
      console.log(inputArray);
      inputArray[i-1] = +inputArray[i-1] - +inputArray[i+1];
      inputArray.splice(i, 2);
      if ( inputArray.length > 1 ) {
        i = 0;
      }
      console.log(inputArray);
    }
  
  }

  result = inputArray[0];
  document.getElementById('display').innerHTML = result;
  
  console.log(result + ' is teh result!');
  
}


function organizeInput () {

  for ( let i = 0 ; i < inputString.length ; i++ ) {

    const char = inputString[i];

    if ( char == '+' || char == '-' || char == '*' || char == '/' ) {
      inputArray.push(inputString.slice( 0, i ));
      inputArray.push(char);
      inputString = inputString.slice( i + 1 );
      i = 0;
      
    }
    
  }

  inputArray.push(inputString);

}


function refreshDisplay () {

  const display = document.getElementById('display');
  display.innerHTML = inputString;

}


function addbuttonGrid () {
  
  for ( let i = 0 ; i < 10 ; i++ ) {

  const container = document.getElementById('calc-container');
  const button = document.createElement('button'); 
  
  button.classList.add('button');
  button.id = 'number' + i;
  button.innerHTML = i;
  
  button.addEventListener('click', (e) => {
    inputString = inputString.concat(i);
    refreshDisplay();
  })

  container.appendChild(button);

}

  const container = document.getElementById('calc-container');
  const button = document.createElement('button'); 

  button.classList.add('button');
  button.id = 'theDot';
  button.innerHTML = 'the Dot';
  button.addEventListener('click', (e) => {
    inputString = inputString.concat('.');
    refreshDisplay();
  })

  container.appendChild(button);

}


function addOperatorButtons ( operatorButtons ) {

  const calcContainer = document.getElementById('calc-container'); 

  Object.entries(operatorButtons).forEach(entry => {

    const button = document.createElement('button');
    const buttonInfo = entry[1];

    button.classList.add('button');
    button.id = buttonInfo.id;
    button.innerHTML = buttonInfo.text;

    if ( buttonInfo.id == 'operate' ){
      button.addEventListener('click', (e) => {
        operate(inputArray);
        resetCalculator();
        document.getElementById('display').innerHTML = result;
      })
    } else if ( buttonInfo.id == 'clr' ) {
      button.addEventListener('click', (e) => {
        resetCalculator();
      })
    } else {
      button.addEventListener('click', (e) => {
        inputString = inputString.concat(buttonInfo.text);
        refreshDisplay();
      })
    }

    calcContainer.appendChild(button);
    
  })

}


function createDisplay () { 

  const calcContainer = document.getElementById('calc-container'); 
  const displayElement = document.createElement('div');

  displayElement.classList.add('div');
  displayElement.id = 'display';

  calcContainer.appendChild(displayElement);

} 

