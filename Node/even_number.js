// Create a module called ‘even_nums.js’ that returns all the even number between 1 and 50.
const even_array = [];
const even_numbers = () => {
    // loops until the variable (n) reaches 50
    for (let n = 1; n <= 50; n++) {
        // conditional statement that checks if (n) is divisible by 2  and returns a remainder of 0 if so it is a even a number and will be displayed
        if (n % 2 === 0) {
            even_array.push(n)
            console.log(n);
        }
    }
    return even_array
}


module.exports.even_numbers = even_numbers