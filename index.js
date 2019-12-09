module.exports = {charsToNumbers, getSequentialSerias: getSequentialSeries};
    
function charsToNumbers(heb) {

    const charsNumbers = {
        "א": 1,
        "ב": 2,
        "ג": 3,
        "ד": 4,
        "ה": 5,
        "ו": 6,
        "ז": 7,
        "ח": 8,
        "ט": 9,
        "י": 10,
        "כ": 20,
        "ל": 30,
        "מ": 40,
        "נ": 50,
        "ס": 60,
        "ע": 70,
        "פ": 80,
        "צ": 90,
        "ק": 100,
        "ר": 200,
        "ש": 300,
        "ת": 400,
        "ך": 20,
        "ם": 40,
        "ן": 50,
        "ץ": 90,
        "ף": 80,
    };
    let count = 0;
    for (let i = 0; i < heb.length; i++) {
        count += charsNumbers[heb[i]] || 0;
    }
    return count;
};


function getSequentialSeries(arrayOfHebNumbers) {
    const sortedArrayOfHebNumbers = arrayOfHebNumbers.sort();
    return sortedArrayOfHebNumbers.reduce((series, hebNum) => {
       const lastSubSeries = series[series.length - 1];

       if(!lastSubSeries || !isSequential(lastSubSeries[lastSubSeries.length - 1], hebNum)){
           series.push([]);
       }

       series[series.length -1].push(hebNum);
       return series;
    }, []);
}

function isSequential(hebNum1, hebNum2) {
    const num1 = charsToNumbers(hebNum1);
    const num2 = charsToNumbers(hebNum2);

    if(num1 === 0 || num2 === 0){
        return false;
    }

    return num1 + 1 === num2;
}