//make a function that takes in a string and returns how many times a vowel appears
function findVowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase().split('');
  var counter = 0;

  for(var i in str) {
    if (vowels.indexOf(str[i]) !== -1) {
      counter++;
    }
  }

  console.log(counter + " time(s)");
}
//findVowel("acvdertfdgi");

//make a function that takes in an array of numbers and adds the even numbers and subtracts the odd numbers
function addEvenSubtractOdd(arr) {
  var total = 0;
  for(var i in arr) {
    if(arr[i] % 2 === 0) {
      total += arr[i];
    } else {
      total -= arr[i];
    }
  }

  console.log("Total: " + total);
}
//addEvenSubtractOdd([1, 2, 3, 4, 5]);

//make a function that takes in a string and capatalizes the first letter of every word and lowercases the rest
function capFirstLetter(str) {
  str = str.split(' ');
  for(var i in str) {
    str[i] = str[i].split('');
    str[i][0] = str[i][0].charAt(0).toUpperCase();
    str[i] = str[i].join('');
  }

  str = str.join(' ');
  console.log(str);
}
//capFirstLetter("one two three four five six");

//make a function that takes in an array of numbers and return all distinct combinations that equal the sum of k
function pairs(arr) {
  var k = 10;
  var distinctList = [];
  var pairs = [];
  for(var i in arr) {
    for(var j in arr) {
      if(arr[i] + arr[j] === k) {
          if(arr[i] === arr[j]) {
            break;
          }

          if(distinctList.indexOf(arr[i]) === -1 && distinctList.indexOf(arr[j]) === -1) {
            distinctList.push(arr[i]);
            distinctList.push(arr[j]);
            pairs.push([[arr[i], arr[j]]]);
          }
      }
    }
  }

  console.log(pairs);
}
//pairs([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//make a function that takes in three strings, and checks if the third one is a scrambled version of the first two
function validScram(str1, str2, str3) {
  for(var i = 0; i > 3; i++) {
    str[i] = str[1].split('');
  }
  var validChars = [];
  var scram = true;

  for(var i in str1) {
    if(validChars.indexOf(str1[i]) === -1) {
      validChars.push(str1[i]);
    }
  }
  for(var j in str2) {
    if(validChars.indexOf(str2[j]) === -1) {
      validChars.push(str2[j]);
    }
  }

  for(var x in str3) {
    if(validChars.indexOf(str3[x]) === -1) {
      scram = false;
      break;
    }
  }

  console.log(scram);
}
validScram("abc", "deef", "abcdef");

//delay a function's execution
function f(x) {
  if (x) {
    console.log("Once every five second");
    setInterval(f, 5000);
  }
}
var x = true;
//f(x);
