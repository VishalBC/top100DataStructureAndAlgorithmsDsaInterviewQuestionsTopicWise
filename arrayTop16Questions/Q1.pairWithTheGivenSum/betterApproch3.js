/*
[Expected Approach] Using Hash Set - O(n) time and O(n) space
Hashing provides a more efficient solution to the 2-Sum problem. Rather than checking every possible pair, we store each number in an unordered set during iterating over the array's elements. For each number, we calculate its complement (i.e., target - current number) and check if this complement exists in the set. If it does, we have successfully found the pair that sums to the target.

Step By Step Implementations:

Create an empty Hash Set or Unordered Set
Iterate through the array and for each number in the array:
=> Calculate the complement (target - current number).
=> Check if the complement exists in the set:
- If it is, then pair found.
- If it isn’t, add the current number to the set.
If the loop completes without finding a pair, return that no pair exists.
 */


function twoSum(arr, target) {

    // Create a Set to store the elements
    let set = new Set();

    for (let num of arr) {

        // Calculate the complement that added to
        // num, equals the target
        let complement = target - num;

        // Check if the complement exists in the set
        if (set.has(complement)) {
            return true;
        }

        // Add the current element to the set
        set.add(num);
    }
    // If no pair is found
    return false;
}

// Driver Code
let arr = [0, -1, 2, -3, 1];
let target = -2;

if (twoSum(arr, target))
    console.log("true");
else
    console.log("false");
