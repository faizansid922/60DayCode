function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printNonPrimesInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (!isPrime(i)) {
            console.log(i);
        }
    }
}

// Example usage
printNonPrimesInRange(2, 20); // Output: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20
