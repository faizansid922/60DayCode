// Sample input data
const names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
const ages = [32, 30, 26, 28, 44];

// Create a list of key-value pairs
const userData = names.map((name, index) => ({ name, age: ages[index] }));

// Filter users whose age is more than 30
const usersOver30 = userData.filter(user => user.age > 30);

// Print the filtered users
usersOver30.forEach(user => console.log(user.name));

// userData contains the list of key-value pairs for each user
console.log(userData);
