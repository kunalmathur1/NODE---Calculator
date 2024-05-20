// Import the crypto module
const crypto = require('crypto');

//get a commands using process.argv
const input = process.argv.slice(2);

// Check if arguments are provided
if (input.length === 0) {
    console.log('Need an argument');
    process.exit(1);
  }

  // Extract the operation and the operands
const operation = input[0];
const operands = input.slice(1).map(Number);

// Function to generate a random number of a given length
function randomNumber(length) {
    if (!length) {
      console.log('Provide length for random number generation.');
      return;
    }
    const randomBytes = crypto.randomBytes(length).toString('binary');
    console.log(`Random Number: ${randomBytes}`);
  }


  // Perform the operations
switch (operation) {
    case 'add':
      if (operands.length < 2) {
        console.log('Provide at least two numbers');
        break;
      }
      const sum = operands.reduce((a, b) => a + b, 0);
      console.log(`Result: ${sum}`);
      break;
    
    case 'sub':
      if (operands.length < 2) {
        console.log('Provide at least two numbers');
        break;
      }
      const subtract = operands.reduce((a, b) => a - b);
      console.log(`Result: ${subtract}`);
      break;
  
    case 'multi':
      if (operands.length < 2) {
        console.log('Provide at least two numbers');
        break;
      }
      const multiply = operands.reduce((a, b) => a * b, 1);
      console.log(`Result: ${multiply}`);
      break;
  
    case 'divide':
      if (operands.length < 2) {
        console.log('Provide at least two numbers');
        break;
      }
      const division = operands.reduce((a, b) => a / b);
      console.log(`Result: ${division}`);
      break;
  
    case 'sin':
      if (operands.length !== 1) {
        console.log('Provide at least one number');
        break;
      }
      const sinValue = Math.sin(operands[0]);
      console.log(`Result: ${sinValue}`);
      break;
  
    case 'cos':
      if (operands.length !== 1) {
        console.log('Provide at least one number');
        break;
      }
      const cosValue = Math.cos(operands[0]);
      console.log(`Result: ${cosValue}`);
      break;
  
    case 'tan':
      if (operands.length !== 1) {
        console.log('Provide at least one number');
        break;
      }
      const tanValue = Math.tan(operands[0]);
      console.log(`Result: ${tanValue}`);
      break;
  
    case 'random':
      if (operands.length !== 1 || isNaN(operands[0])) {
        console.log('Provide length for random number');
        break;
      }
      randomNumber(operands[0]);
      break;
  
    default:
      console.log('Invalid operation provided.');
  }