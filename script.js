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

const inputArray = [];

createDisplay(inputArray);
addbuttonGrid();
addOperatorButtons(operatorButtons);



function refreshDisplay () {

  const displayString = inputArray.toString();
  const display = document.getElementById('display');
  display.innerHTML = displayString;

}


function addbuttonGrid () {
  
  for ( let i = 0 ; i < 10 ; i++ ) {

  const container = document.getElementById('calc-container');
  const button = document.createElement('button'); 
  
  button.classList.add('button');
  button.id = 'number' + i;
  button.innerHTML = i;
  
  button.addEventListener('click', (e) => {
      inputArray.push(i);
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
    inputArray.push('.');
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

    button.addEventListener('click', (e) => {
      inputArray.push(buttonInfo.text);
      refreshDisplay();
    })

    calcContainer.appendChild(button);
    
  });
  
}


function createDisplay () { 

  const calcContainer = document.getElementById('calc-container'); 
  const displayElement = document.createElement('div');

  displayElement.classList.add('div');
  displayElement.id = 'display';
  html = inputArray;
  displayElement.innerHTML = html;

  calcContainer.appendChild(displayElement);

} 

