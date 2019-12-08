module.exports = function charsToNumbers(heb){

    heb=heb.replace("טו","יה").replace("טז","יו");

    let count = 0;
    let temp = 0;
    for(let i=0;i<heb.length;i++){
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