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
const uniqueInOrder = (inArr) => {
	let finalArr = [];
	// const inArr = "AAAABBBCCDAABBB";
	// const inArr = "ABBCcAD";
	// const inArr = 12333314445566111;

	// for the empty case attempt
	if (inArr.length === 0) {
		return [];
	}
	// make sure the input is string
	const inputType = typeof inArr;
	let newInput = inputType !== "string" ? inArr.toString() : inArr;

	// remove the commas from the string
	if (newInput.indexOf(",") > -1) {
		newInput = newInput.replace(/\s/g, "").replaceAll(",", "");
	}
	// you need a detect change app
	const detChange = (prev, curr) => {
		if (prev === curr) {
			return false;
		} else {
			return true;
		}
	};

	finalArr.push(newInput[0]);
	for (let i = 1; i < newInput.length; i++) {
		if (detChange(newInput[i - 1], newInput[i])) {
			// if change detected push the current one
			finalArr.push(newInput[i]);
		} else {
			// otherwise just continue
			continue;
		}
	}

	if (inputType === "number") {
		return finalArr.map((x) => {
			return Number(x);
		});
	} else {
		return finalArr;
	}
};
console.log(uniqueInOrder("1111 , 2222 ,3333"));

// var uniqueInOrder=function(iterable){
// 	//your code here - remember iterable can be a string or an array
// 	let finalArr = [];
// 	  // const inArr = "AAAABBBCCDAABBB";
// 	  // const inArr = "ABBCcAD";
// 	  // const inArr = 12333314445566111;

// 	  // make sure the input is string
// 	  const inputType = typeof iterable;
// 	  const newInput = inputType !== "string" ? iterable.toString() : iterable;

// 	  // you need a detect change app
// 	  const detChange = (prev, curr) => {
// 		  if (prev === curr) {
// 			  return false;
// 		  } else {
// 			  return true;
// 		  }
// 	  };

// 	  finalArr.push(newInput[0]);
// 	  for (let i = 1; i < newInput.length; i++) {
// 		  if (detChange(newInput[i - 1], newInput[i])) {
// 			  // if change detected push the current one
// 			  finalArr.push(newInput[i]);
// 		  } else {
// 			  // otherwise just continue
// 			  continue;
// 		  }
// 	  }

// 	  if (inputType === "number") {
// 		  return finalArr.map((x) => {
// 			  return Number(x);
// 		  });
// 	  } else {
// 		  return finalArr;
// 	  }
//   }
