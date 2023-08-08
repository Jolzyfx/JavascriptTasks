

function capitalizeWords(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}

// Example usage
const inputString = "hello world, this is a test";
const capitalized = capitalizeWords(inputString);

console.log(`Capitalized string: ${capitalized}`);



//////////



function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = '';

  for (const word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }

  return longestWord;
}

const inputStr = "The quick brown fox jumped over the lazy dog";
const longest = findLongestWord(inputStr);

console.log(`Longest word: ${longest}`); 



/////////////


function isPrime(number) {
  if (number <= 1) {
      return false;
  }


  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          return false;
      }
  }

  return true;
}

const num1 = 17;
const num2 = 6;

console.log(`${num1} is prime: ${isPrime(num1)}`); 
console.log(`${num2} is prime: ${isPrime(num2)}`); 


////////////////

function getType(input) {
    return typeof input;
}

const value1 = 42;
const value2 = "Hello, world!";
const value3 = [1, 2, 3];
const value4 = { name: "John", age: 30 };

console.log(getType(value1)); 
console.log(getType(value2)); 
console.log(getType(value3)); 
console.log(getType(value4)); 

///////////////

function findSecondLowestAndGreatest(numbers) {
    if (numbers.length < 2) {
        return "Array should contain at least two numbers.";
    }

    
    numbers.sort((a, b) => a - b);

    const secondLowest = numbers[1];
    const secondGreatest = numbers[numbers.length - 2];

    return { secondLowest, secondGreatest };
}

const numberArray = [10, 5, 8, 2, 7, 15];
const { secondLowest, secondGreatest } = findSecondLowestAndGreatest(numberArray);

console.log(`Second Lowest: ${secondLowest}`);
console.log(`Second Greatest: ${secondGreatest}`);

///////////////////

