function hasTargetSum(array, target) {
  // Write your algorithm here
}
function hasTargetSum(arr, target) {
  // Create a Set to store numbers we've seen
  const seenNumbers = new Set();

  // Iterate through each number in the array
  for (const number of arr) {
    // Calculate the complement (target - current number)
    const complement = target - number;

    // If we've seen the complement before, we found a pair
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to our set
    seenNumbers.add(number);
  }

  // If we get through the whole array without finding a pair
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
