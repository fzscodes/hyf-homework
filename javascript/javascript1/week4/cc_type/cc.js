function getCardType(number) {
    // visa
    let re = new RegExp("^4");
    if (number.match(re))
        return "Visa";

    // Mastercard
    re = new RegExp("^5[1-5]");
    if (number.match(re))
        return "Mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re))
        return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re))
        return "Discover";

    // Diners
    re = new RegExp("^36");
    if (number.match(re))
        return "Diners";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re))
        return "Diners - Carte Blanche";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re))
        return "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re))
        return "Visa Electron";

    return "";
}
console.log(getCardType("4111 1111 1111 1111"));
console.log(getCardType("5500 0000 0000 0004"));
console.log(getCardType("3000 0000 0000 04"));