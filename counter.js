function counter() {
    let count = 0; // Initialize count variable
    
    return {
        increment: function() {
            count++; // Increment the count
        },
        getCount: function() {
            return count; // Return the current count
        }
    };
}

// Usage example
const myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount()); // Output: 2
