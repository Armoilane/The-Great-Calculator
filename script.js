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

createDisplay();
addbuttonGrid();
addOperatorButtons(operatorButtons);
addKeyboardListeners();


function backspace () {
  inputString = inputString.substring(0, inputString.length -1 );
  refreshDisplay();
}


function addKeyboardListeners () {

  document.addEventListener('keydown', function(event) {

    if ( event.code == 'Numpad0' ) {
      inputString = inputString.concat('0');
      refreshDisplay();  
    }
    if ( event.code == 'Numpad1' ) {
      inputString = inputString.concat('1');
      refreshDisplay();  
    }
    if ( event.code == 'Numpad2' ) {
      inputString = inputString.concat('2');
      refreshDisplay();  
    }
    if ( event.code == 'Numpad3' ) {
      inputString = inputString.concat('3');
      refreshDisplay();  
    }
    if ( event.code == 'Numpad4' ) {
      inputString = inputString.concat('4');
      refreshDisplay();  
    }
    if ( event.code == 'Numpad5' ) {
      inputString = inputString.concat('5');
      refreshDisplay();  
    }
    if ( event.code == 'Numpad6' ) {
      inputString = inputString.concat('6');
      refreshDisplay();  
    }
    if ( event.code == 'Numpad7' ) {
      inputString = inputString.concat('7');
      refreshDisplay();  
    }
    if ( event.code == 'Numpad8' ) {
      inputString = inputString.concat('8');
      refreshDisplay();  
    }
    if ( event.code == 'Numpad9' ) {
      inputString = inputString.concat('9');
      refreshDisplay();  
    }
    if ( event.code == 'NumpadAdd' ) {
      inputString = inputString.concat('+');
      refreshDisplay();  
    }
    if ( event.code == 'NumpadSubtract' ) {
      inputString = inputString.concat('-');
      refreshDisplay();  
    }
    if ( event.code == 'NumpadMultiply' ) {
      inputString = inputString.concat('*');
      refreshDisplay();  
    }
    if ( event.code == 'NumpadDivide' ) {
      inputString = inputString.concat('/');
      refreshDisplay();  
    }
    if ( event.code == 'Period' || event.code == 'NumpadDecimal' ) {
      addDot();
      refreshDisplay();  
    }
    if ( event.code == 'NumpadEnter' || event.code == 'Enter' ) {
      operate(inputArray);
      resetCalculator();
      document.getElementById('resultDisplay').innerHTML = result;
    }
    if ( event.code == 'Escape' ) {
      resetCalculator();
    }
    if ( event.code == 'Backspace' ) {
      backspace();
    }
  })
}

function addDot () {

  inputString = inputString.concat('.');

  for ( let i = inputString.length -1 ; i > 0 ; i-- ) {
    const c = inputString.charAt(i-1);
    if ( Number.isInteger(+c) === false  ) {
      if ( c == '.' ) {
        alert('No dots yet, you silly you!');
        inputString = inputString.substring( 0 , inputString.length - 1 );
        break;
      } else {
        break;
      }
    } else { 
      continue; 
    }
  }
}


function resetCalculator () {
  inputString = '';
  inputArray.shift();
  document.getElementById('inputDisplay').innerHTML = '';
  document.getElementById('resultDisplay').innerHTML = '';
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
    }
  }

  for ( let i = 0 ; i < inputArray.length ; i++ ) {
    
    if ( inputArray[i] == '+' ) {
      inputArray[i-1] = +inputArray[i-1] + +inputArray[i+1];
      inputArray.splice(i, 2);
      if ( inputArray.length > 1 ) {
        i = 0;
      }
    }
  }
  
  for ( let i = 0 ; i < inputArray.length ; i++ ) {
    
    if ( inputArray[i] == '-' ) {
      inputArray[i-1] = +inputArray[i-1] - +inputArray[i+1];
      inputArray.splice(i, 2);
      if ( inputArray.length > 1 ) {
        i = 0;
      }
    }
  }

  result = Math.round(inputArray[0]*10) / 10;
  document.getElementById('resultDisplay').innerHTML = result;
  
}


function organizeInput () {

  for ( let i = 1 ; i < inputString.length ; i++ ) {

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

  const inputDisplay = document.getElementById('inputDisplay');
  inputDisplay.innerHTML = inputString;

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
    addDot();
    //inputString = inputString.concat('.');
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
        document.getElementById('resultDisplay').innerHTML = result;
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
  const displayContainer = document.createElement('div');

  displayContainer.classList.add('div');
  displayContainer.id = 'display';

  calcContainer.appendChild(displayContainer);

  const inputParagraph = document.createElement('p');

  inputParagraph.classList.add('p')
  inputParagraph.id = 'inputDisplay';
  inputParagraph.innerHTML = 'input';

  displayContainer.appendChild(inputParagraph);

  const resultParagraph = document.createElement('p');

  resultParagraph.classList.add('p');
  resultParagraph.id = 'resultDisplay';
  resultParagraph.innerHTML = 'result';

  displayContainer.appendChild(resultParagraph);

} 

