function twoSum(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {

        // For each element arr[i], check every
        // other element arr[j] that comes after it
        for (let j = i + 1; j < n; j++) {

            // Check if the sum of the current pair
            // equals the target
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }
    // If no pair is found after checking
    // all possibilities
    return false;
}

// Driver Code
let arr = [0, -1, 2, -3, 1];
let target = -2;

if (twoSum(arr, target))
    console.log("true");
else
    console.log("false");
