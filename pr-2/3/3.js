let P = parseFloat(prompt("Enter Principal Amount:"));
let N = parseInt(prompt("Enter Number of Years:"));
let R;
let I;

if (N > 0 && N <= 3) {
    R = 3;
} else if (N > 3 && N <= 5) {
    R = 3;
} else if (N > 5 && N <= 8) {
    R = 5;
} else if (N > 8 && N <= 12) {
    R = 12;
} else if (N > 12) {
    R = 15;
} else {
    console.log("invalid input !");
}

if (R > 0) {   
    I = (P * R * N) / 100;
    
    console.log("Principal Amount: " + P);
    console.log("years: " + N);
    console.log("Rate of interest: " + R + "% ");
    console.log("Total interest: " + I);
}
