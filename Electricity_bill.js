var usage = 151; 
var total;


if (usage <= 50) {
        total = usage * 1;
}else if (usage <= 150) {
        total = 50 * 1 + (usage - 50) * 2;
}else if (usage <= 250) {
        total = 50 * 1 + 100 * 2 + (usage - 150) * 3;
}else { 
        total = 50 * 1 + 100 * 2 + 100 * 3 + (usage - 250) * 4;
    }

    if (usage > 150) {
        total += total * 0.20;
    }

    console.log("Electrycity bill : " + total ) ;

    