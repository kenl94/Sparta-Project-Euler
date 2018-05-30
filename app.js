Task 11 - Functions Lab Advanced




// Task 12 - Function Lab Advanced
function fizzBuzz(value){
  switch (true) {
    case value % 3 == 0 && value % 5 == 0:
    return value = "FizzBuzz";
    break;
    case value % 5 == 0 && value % 3 != 0:
    return value = "Buzz";
    break;
    case value % 3 == 0 && value % 5 != 0:
    return value = "Fizz";
    break;

    default:
    return value;
  }

}

// Project Euler Task 1
var sum = 0;

for (i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0){
      sum += + i;
  }
  console.log(sum);
}

Project Euler Task 2
