/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name){
  console.log(`Hello ${name}`)
  // Your code here
};

greet(`Hamza`);

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if(n%2 == 0) {
    return false;
  }else{
    return true;
  }
  // Your code here
}
isOdd(11);
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  if(n%2 == 0){
//the number is even
  }else{
    //the number is odd
    console.log((n-1) / 2)
  }
  
  // Your code here
}
oddsSmallerThan(7);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if(isOdd(n)){
    console.log(n*n);
  }else{
    console.log(n*2);
  }
  }

squareOrDouble(16);
squareOrDouble(9);

