function formatCreditCardNumber(number) {
    let numberToString = number.toString();
    const gap_size = 4;
    let result = "";
    while (numberToString.length > 0) // Loop through string
    {
        result = result + " " + numberToString.substring(0, gap_size); // Insert space character
        numberToString = numberToString.substring(gap_size);  // Trim String
    }
    return result;
}
const formattedCreditCard = formatCreditCardNumber(123456789);
console.log(formattedCreditCard);
