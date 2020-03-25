function formatCreditCardNumber(number) {
    number = number.toString();
    const gap_size = 4;
    let result = "";
    while (number.length > 0) // Loop through string
    {
        result = result + " " + number.substring(0, gap_size); // Insert space character
        number = number.substring(gap_size);  // Trim String
    }
    return result;
}
const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
