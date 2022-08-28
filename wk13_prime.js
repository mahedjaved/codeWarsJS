// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

// COND ##1 Cannot be zero -- Has to be a natural number, spawns 2 funcs below

const checkIfZero = (inputInt) => {
	if (inputInt === 0) {
		throw "[info] The input cannot be a zero";
	}
};

const takeOutFirst2 = (inputInt) => {
	inputInt.splice(0, 2);
};

const checkIfNegative = (inputInt) => {
	if (inputInt > 0) {
		return false;
	} else {
		return true;
	}
};

const checkIfWhole = (currNum, inputInt, verbose = false) => {
	const result = inputInt / currNum;
	if (verbose) {
		console.log(
			`[info func=checkIfWhole] Dividing ${inputInt} with ${currNum} gets the result ${result}, is it whole ? ${Number.isInteger(
				result
			)}`
		);
	}

	return Number.isInteger(result);
};

// 1) Set the number, check if it zero, takeout the first two elements, proceed ...
const inNumber = -2;
checkIfZero(inNumber);
// "ARRAY-ify" all the integers that preceed this number
const nums2inNumber = [...Array(inNumber).keys()];
takeOutFirst2(nums2inNumber);
// console.log(`[info] Now inspecting the following : ${nums2inNumber}`);
let isNotPrimeNo = false;

// 2) Loop through this array
for (let i = 0; i < nums2inNumber.length; i++) {
	// 3) Check if it is divisible by the number while being whole
	// if yes break, other wise continue
	if (checkIfWhole((currNum = nums2inNumber[i]), (inputInt = inNumber))) {
		console.log(`[info] No, ${inNumber} is NOT prime`);
		isNotPrimeNo = true;
		break;
	} else {
		continue;
	}
}
// not prime number message
!isNotPrimeNo && console.log(`[info] Yes, ${inNumber} is prime`);
