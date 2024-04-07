function customIncludes(arr, searchElement, fromIndex = 0) {
    if (fromIndex < 0) {
        fromIndex = Math.max(0, arr.length + fromIndex);
    }
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

console.log(customIncludes(numbers, 3)); // Output: true
console.log(customIncludes(numbers, 6)); // Output: false

// You can also specify a starting index
console.log(customIncludes(numbers, 1, 1)); // Output: false (searching from index 1)
