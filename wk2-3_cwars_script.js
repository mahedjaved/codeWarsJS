function arraySorter(arr) {
    /**
     * @desc : convert an array of integers values to an ordered one asc.
     * @args : [1] arr (type: JSArray) : the unordered array
     * @returns : [1] arr (type: JSArray) : the ordered array in ascending
     */
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}























// _____________________________________________________________________//
// _____________________________________________________________________//
/** KATA 4 ---- 19/06/2022
 * [1] Your task is to sort a given string.
 * [2] Each word in the string will contain a single number.
 * [3] This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

[4] If the input string is empty, return an empty string.
[5] The words in the input String will only contain valid consecutive numbers.
* [N.B] Using LinkedList or Object btw sorted it on its own, that is just
* AWESOME !!
 * */

// first find the no. in the string after splitting it
// const inputCase1 = "is2 Thi1s T4est 3a";
// const inputCase2 = "4of Fo1r pe6ople g3ood th5e the2";

// let inputCase = inputCase1;

// function kata4(inputCase) {
//     let splitInput = inputCase.split(' ');
//     let orderLinkedList = {};

//     // loop through the array and find if there exists a number
//     for (i = 0; i < splitInput.length; i++) {
//         // orderIdx.push(parseInt(splitInput[i].match(/\d+/g)));
//         orderLinkedList[splitInput[i].match(/\d+/g)] = splitInput[i];
//     }
//     return Object.values(orderLinkedList).join(' ');
// }
// a simple black belt answer
// function order(words) {

//     return words.split(' ').sort(function (a, b) {
//         return a.match(/\d/) - b.match(/\d/);
//     }).join(' ');
// }
// _____________________________________________________________________//
// _____________________________________________________________________//
/** KATA 3 ---- 19/06/2022
 * [1] Returns the SUM of 2 LOWEST, POSITIVE integer
 * [2] given an array of 4 POSITIVE integers
 * [3] NO floats Or NEGative integers passed as args
 * */

// // step 1) manually sort the array
// const inputCase1 = [19, 5, 42, 2, 77];

// let inputCase = inputCase1;

// function kata3(inputCase) {
//     // sort the array from minimum to maximum
//     for (let i = 0; i < inputCase.length; i++) {
//         for (let j = i + 1; j < inputCase.length; j++) {
//             if (inputCase[i] > inputCase[j]) {
//                 let temp = inputCase[i];
//                 inputCase[i] = inputCase[j];
//                 inputCase[j] = temp;
//             }
//         }
//     }
//     console.log(`Final array takes the form : ${inputCase}`);
//     // return the sum of the first two elements
//     return inputCase[0] + inputCase[1];
// }

// // example answer without manual sorting
// function sumTwoSmallestNumbers(numbers) {
//     numbers = numbers.sort(function (a, b) { return a - b; });
//     return numbers[0] + numbers[1];
// };

// _____________________________________________________________________//
// _____________________________________________________________________//
/** KATA 2 ---- 19/06/2022
 * [1] Implement a "digital root" --> recursive sum of a number that splits a whole number into individual number, if the sum is NOT a SINGLE number, then reduce it to sums untill a SINGLE no is obtained
 * */

// const inputCase1 = 16;
// const inputCase2 = 942;
// const inputCase3 = 132189;
// const inputCase4 = 493193;

// let inputCase = inputCase4;
// console.log(`Answer : ${kata2(inputCase)} for case : ${inputCase}`);


// function kata2(inputCase) {

//     // init some vars for storage
//     let sum = 0;
//     let inputCase2String = inputCase.toString();

//     // main loop
//     while (true) {
//         for (i = 0; i < inputCase2String.length; i++) {
//             sum += parseInt(inputCase2String[i]);
//         }
//         // break condition
//         if (sum.toString().length === 1) {
//             return sum;
//             break;
//         }
//         else {
//             // reinitialise before next iteration
//             inputCase2String = sum.toString();
//             sum = 0;
//             console.log(`Now broken digits to : ${inputCase2String.split('').map(x => x)}`);
//         }
//     }
// }

// // Model answer by a black belt, fantastically SMALL !!
// function kata2(n) {
//     return (n - 1) % 9 + 1;
// }

// _____________________________________________________________________//
// _____________________________________________________________________//
/** KATA 1 ---- 18/06/2022
 * [1] Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * [2] The first word within the output should be capitalized only if
 *      > the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 * [HINT] Apparently the strings in JavaScript are immutable, so you cannot update a string value if you change an element of it, check here :: https://stackoverflow.com/questions/67814359/javascript-string-update-doesnt-change-the-string-itself
 * [HINT] variable assigned in an IF block REMAINS there, so define them outside for example below is let splitted;
 * */

// const inputCase1 = "the-stealth-warrior";
// const inputCase2 = "The_stealth_warrior";
// const inputCase3 = "the-stealth_warrior";
// const inputCase4 = "the-stealth_stealth-warrior_warrior";

// // let hyphonSplits;
// // let underScoreSplits;
// // let finalAnswer;
// let index = [];

// let inputCase = inputCase1;

// for (i = 0; i < inputCase.length; i++) {
//     if (inputCase[i] === '-' || inputCase[i] === '_') {
//         index.push(i);
//     }
// }

// for (i = 0; i < index; i++) {
//     inputCase = inputCase.replace('-', '');
// }

// console.log(inputCase);

// // IDEAL SOLUTION --> map goes through the entire elements of an array or a string
// function toCamelCase(str) {
//     str = str.split('');
//     return str.map(function (el, i) {
//         if (el == '-' || el == '_') {
//             el = str[i + 1].toUpperCase();
//             str.splice(i + 1, 1);
//         }
//         return el;
//     }).join('');
// }
// /**This is a more LONGWAY around the problem I initially thought*/
// if (inputCase.includes("-") && inputCase.includes("_")) {
//     console.log("[info] Detected a '_' delimiter and a '-' delimiter");
//     // now take turns, first make sure that the '-' splitter is used, then check WHICH one has '_' delimiter
//     hyphonSplits = inputCase.split("-");
//     for (i = 1; i < hyphonSplits.length; i++) {
//         hyphonSplits[i] = hyphonSplits[i].charAt(0).toUpperCase() + hyphonSplits[i].slice(1);

//         if (hyphonSplits[i].includes("_")) {
//             console.log(`The ${hyphonSplits[i]} also includes a '_' delimiters}`);
//             underScoreSplits = hyphonSplits[i].split("_");

//             // loop through the hyphons now
//             for (j = 0; j < underScoreSplits.length; j++) {
//                 underScoreSplits[j] = underScoreSplits[j].charAt(0).toUpperCase() + underScoreSplits[j].slice(1);
//             }
//         }
//         console.log(`Maybe stuck because ${hyphonSplits} and ${underScoreSplits}`);
//     }
//     console.log(`[info] Now  we have ${hyphonSplits} and ${underScoreSplits}, they must become one`);

//     finalAnswer = hyphonSplits.join('') + underScoreSplits.join('')
//     // console.log(`Final answer is : ${hyphonSplits}`);
// }

// else if (inputCase.includes("-")) {
//     console.log("[info] Detected a '-' delimiter");
//     // split the string where - occurs
//     hyphonSplits = inputCase.split("-");
//     for (i = 1; i < hyphonSplits.length; i++) {
//         hyphonSplits[i] = hyphonSplits[i].charAt(0).toUpperCase() + hyphonSplits[i].slice(1);
//     }
//     finalAnswer = hyphonSplits.join('');
// }

// else if (inputCase.includes("_")) {
//     console.log("[info] Detected a '_' delimiter");
//     // split the string where - occurs
//     underScoreSplits = inputCase.split("_");
//     for (i = 1; i < underScoreSplits.length; i++) {
//         underScoreSplits[i] = underScoreSplits[i].charAt(0).toUpperCase() + underScoreSplits[i].slice(1);
//     }
//     finalAnswer = underScoreSplits.join('');

// }


// console.log(`Final Answer is : ${finalAnswer}`);