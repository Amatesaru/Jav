//write a function that takes one parameter and checks if nums from 1 to the given num is divisible by 2,3,5
function yugioh(param) {
    let replaced = []; //array to hold the words that will replace numbers 

    for (let i = 1; i <= param; i = i + 1) {
        let replacer = ""; // variable to store the word that replaces i

        if (i % 2 == 0) {
            replacer = replacer + "yu";
        }
        if (i % 3 == 0) {
            replacer = replacer + "gi";
        } else {
            replacer = replacer + "-gi";
        }
    }
    if (i % 5 == 0) {
        replacer = replacer + "oh";
    } else {
        replacer = replacer + "-oh";
    }
}
if (replacer == "") {
    // i did not meet any conditions
    replaced.push(i);
} else {
    //i met at least one condition
    replaced.push(replacer);
}

console.log(replaced);
return replaced;
yugioh(100);
yugioh(15);