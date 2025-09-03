let age = 19;
let group;

if (age < 0) {
    group = "invalid age";
} else if (age <= 12) {
    group = "Child";
} else if (age <= 19) {
    group = "teenager";
} else if (age <= 35) {
    group = "young Adult";
} else if (age <= 59) {
    group = "Adult";
} else {
    group = "senior citizen";
}

console.log("Age: " + age);
console.log("Category: " + group);