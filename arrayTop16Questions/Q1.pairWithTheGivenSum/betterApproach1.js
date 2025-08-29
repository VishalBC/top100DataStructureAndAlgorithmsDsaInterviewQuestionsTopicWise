/*
[Better Approach 1] Sorting and Binary Search - O(n × log(n)) time and O(1) space

To check if a pair with a given sum exists in the array, we first sort the array. Then for each element, we compute the required complement (i.e., target - arr[i]) and perform binary search on the remaining subarray (from index i+1 to end) to find that complement.

Step By Step Implementation:

Sort the array in non-decreasing order.
Loop through each element arr[i] from index 0 to n-2.
For each arr[i], calculate complement = target - arr[i].
Perform binary search for complement in the subarray from index i+1 to n-1.
If the complement is found, return true.
If the loop completes without finding any valid pair, return false.

 */



// Function to perform binary search
function binarySearch(arr, left, right, target) {
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target)
            return true;
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return false;
}

function twoSum(arr, target) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        // Use binary search to find the complement
        if (binarySearch(arr, i + 1,
            arr.length - 1, complement))
            return true;
    }
    // If no pair is found
    return false;
}

// Driver Code
let arr = [0, -1, 2, -3, 1];
let target = -2;

if (twoSum(arr, target)) {
    console.log("true");
} else {
    console.log("false");
}
