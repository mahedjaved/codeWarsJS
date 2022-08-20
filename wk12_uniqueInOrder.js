// Implement the function unique in order which takes as argument a sequence and returns a list of items without any elements with thesa same value nect to each other

//  The below solution is NOT CORRECT but is a good reference for deleting DUPLICATES !!

// let finalArr = [];
// const inArr = "AAAABBBCCDAABBB";
// finalArr.push(inArr[0]);

// // duplicate checker
// const duplicateChecker = (inArrElem) => {
// 	// loop through the final array
// 	for (let i = 0; i < finalArr.length; i++) {
// 		// check if the inArrElem is equal to finalArrElem
// 		if (inArrElem === finalArr[i]) {
// 			// then stop the search right here
// 			return true;
// 		} else {
// 			// otherwise return false
// 			continue;
// 		}
// 	}
// 	// means there was a duplicate
// 	return false;
// };

// // loop through the input array of strings
// for (let i = 0; i < inArr.length; i++) {
// 	// use the duplicate checker
// 	if (!duplicateChecker(inArr[i])) {
// 		// if it is not duplicate push to the final array
// 		finalArr.push(inArr[i]);
// 	} else {
// 		// role on to the next one
// 		continue;
// 	}
// }

// console.log(finalArr);

// ___________________________________________________________ //
// Working on the correct Solution
// ___________________________________________________________ //

// Implement the function unique in order which takes as argument a sequence and returns a list of items without any elements with thesa same value nect to each other

// Algol 1 :: check for repittion
// instead of starting from the begining of final array, this should be done instead with next
