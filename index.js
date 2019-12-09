module.exports = function charsToNumbers(heb) {

    heb = heb.replace("טו", "יה").replace("טז", "יו");

    let count = 0;
    let temp = 0;
    for (let i = 0; i < heb.length; i++) {
        if (heb[i] === "א") {
            temp = 1;
        } else if (heb[i] === "ב") {
            temp = 2;
        } else if (heb[i] === "ג") {
            temp = 3;
        } else if (heb[i] === "ד") {
            temp = 4;
        } else if (heb[i] === "ה") {
            temp = 5;
        } else if (heb[i] === "ו") {
            temp = 6;
        } else if (heb[i] === "ז") {
            temp = 7;
        } else if (heb[i] === "ח") {
            temp = 8;
        } else if (heb[i] === "ט") {
            temp = 9;
        } else if (heb[i] === "י") {
            temp = 10;
        } else if (heb[i] === "כ") {
            temp = 20;
        } else if (heb[i] === "ל") {
            temp = 30;
        } else if (heb[i] === "מ") {
            temp = 40;
        } else if (heb[i] === "נ") {
            temp = 50;
        } else if (heb[i] === "ס") {
            temp = 60;
        } else if (heb[i] === "ע") {
            temp = 70;
        } else if (heb[i] === "פ") {
            temp = 80;
        } else if (heb[i] === "צ") {
            temp = 90;
        } else if (heb[i] === "ק") {
            temp = 100;
        } else if (heb[i] === "ר") {
            temp = 200;
        } else if (heb[i] === "ש") {
            temp = 300;
        } else if (heb[i] === "ת") {
            temp = 400;
        } else if (heb[i] === "ך") {
            temp = 20;
        } else if (heb[i] === "ם") {
            temp = 40;
        } else if (heb[i] === "ן") {
            temp = 50;
        } else if (heb[i] === "ץ") {
            temp = 90;
        } else if (heb[i] === "ף") {
            temp = 80;
        } else {
            temp = 0;
        }
        count += temp;
        temp = 0;
    }
    return count;
};


function convertNumbersToHebrew(num) {
    test(num);
    num = Math.floor(num);
    if (num > 1000) {
        var elefs = numberToHebrew(Math.floor(num / 1000));
        var all = numberToHebrew(num % 1000);
        return elefs + "'" + all;
    }
    else return numberToHebrew(num);
    function numberToHebrew(num) {
        var AB = "";
        while (num > 800) {
            AB += "תת";
            num -= 800;
        }
        ones = toHebrew(num % 10);
        tens = toHebrew((num % 100) - (num % 10));
        hundreds = toHebrew((num % 1000) - (num % 100));
        return ((AB + hundreds + tens + ones).replace("יה", "טו")).replace("יו", "טז");
    }

    function test(num) {
        if (num % 1) {
            alert("ניתן להמיר לעברית רק מספרים שלמים"); return 0;
        }
        if (num < 1) {
            alert("לא ניתן כרגע להמיר לעברית מספרים מתחת ל1"); exit();
        }
    }

    function toHebrew(num) {
        var a = "";
        switch (num) {
            case 1: a = "א";
                break;
            case 2: a = "ב";
                break;
            case 3: a = "ג";
                break;
            case 4: a = "ד";
                break;
            case 5: a = "ה";
                break;
            case 6: a = "ו";
                break;
            case 7: a = "ז";
                break;
            case 8: a = "ח";
                break;
            case 9: a = "ט";
                break;
            case 10: a = "י";
                break;
            case 20: a = "כ";
                break;
            case 30: a = "ל";
                break;
            case 40: a = "מ";
                break;
            case 50: a = "נ";
                break;
            case 60: a = "ס";
                break;
            case 70: a = "ע";
                break;
            case 80: a = "פ";
                break;
            case 90: a = "צ";
                break;
            case 100: a = "ק";
                break;
            case 200: a = "ר";
                break;
            case 300: a = "ש";
                break;
            case 400: a = "ת";
                break;
            case 500: a = "תק";
                break;
            case 600: a = "תר";
                break;
            case 700: a = "תש";
                break;
            case 800: a = "תת";
                break;
        }
        return a;
    }
}
