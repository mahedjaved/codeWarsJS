const { isFloat } = require("./utils/index");
// continuing after a month and a week sabbaticall -- Week 8 MasterCN

// details : 1) 7th Kyu  2)
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// condition 1 -> max time must not exceed 359999
// if (seconds === 359999){
//     console.log("[info] Input argument error");
//     break
// }
// else{

// }

//  Just a reminder that :: 1hr == 60mins || 1min == 60sec
const inputTime = 120;

let hours = 0;
let minutes = 0;
let seconds = 0;

// [N.B] You have to set switch to true for the cases to read booleans !
switch (true) {
	// ONLY SECONDS
	case inputTime < 60:
		console.log(
			`HH: 00  MM: 00  SS: ${String(inputTime).padStart(2, "0")}`
		);
		break;

	// MINUTES AND HOURS
	case inputTime > 60:
		// get minutes here
		minutes = inputTime / 60;
		// if there is decimal residue, set that to seconds
		if (isFloat(minutes)) {
			// set the decimal residues of input time to seconds
			seconds = Math.floor((minutes % 1) * 100);
			console.log(`HH: 00  MM: ${Math.floor(minutes)}  SS: ${seconds}`);
		} else {
			// else just place all the minutes
			console.log(`HH: 00  MM: ${Math.floor(minutes)}  SS: 00`);
		}
		break;

	// DEFAULT input time error logging
	default:
		console.log("Incorrect input time !");
		break;
}

// const hours = Math.floor(inputTime / 3600);

// console.log(`HH: ${hours}  MM: ${minutes}  SS: ${inputTime}`);
