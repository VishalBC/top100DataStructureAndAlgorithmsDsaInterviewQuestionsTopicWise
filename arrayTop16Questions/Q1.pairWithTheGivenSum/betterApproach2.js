/*
[Better Approach 2] Sorting and Two-Pointer Technique - O(n × log(n)) time and O(1) space

The idea is to use the two-pointer technique but for using the two-pointer technique, the array must be sorted. Once the array is sorted then we can use this approach by keeping one pointer at the beginning (left) and another at the end (right) of the array.

Check the sum of the elements at these two pointers:

If the sum equals the target, we’ve found the pair.
If the sum is less than the target, move the left pointer to the right to increase the sum.
If the sum is greater than the target, move the right pointer to the left to decrease the sum.
Note: This approach is the best approach for a sorted array. But if array is not sorted, then we use the below approach.
 */


function twoSum(arr, target)
{
    arr.sort((a, b) => a - b);

    let left = 0, right = arr.length - 1;

    // Iterate while left pointer is less than right
    while (left < right) {
        let sum = arr[left] + arr[right];

        // Check if the sum matches the target
        if (sum === target)
            return true;
        else if (sum < target)

            // Move left pointer to the right
            left++;
        else

            // Move right pointer to the left
            right--;
    }
    // If no pair is found
    return false;
}

// Driver Code
let arr = [ 0, -1, 2, -3, 1 ];
let target = -2;

if (twoSum(arr, target)) {
    console.log("true");
} else {
    console.log("false");
}
