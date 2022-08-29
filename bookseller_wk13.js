// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z.

// Each book has a code c of 3, 4, 5 or more characters.

// The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// account for no books in some categories
// amazing for animations ::: https://www.youtube.com/watch?v=qVaUxWdb9G0

//  ALGOL 1 -- Using a dictionary
const inBookStrg = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const catList = ["A", "B", "C", "D"];

let bookStorageDict = {};
for (let i = 0; i < catList.length; i++) {
	bookStorageDict[String(catList[i])] = 0;
}

console.log("Previous dictionary");
console.log(bookStorageDict);

const [code, number] = inBookStrg[0].split(" ");
// find if there is a matching code in the dict
// console.log(`${keyCheck} of type ${typeof keyCheck}`);
// console.log(bookStorageDict[String(keyCheck)]);

for (let i = 0; i < inBookStrg.length; i++) {
	// split the entry into first letter, and the number
	const [code, number] = inBookStrg[i].split(" ");

	// find if there is a matching code in the dict
	if (code[0] in bookStorageDict) {
		// if yes, then add the current value of this with the number
		bookStorageDict[String(code[0])] =
			parseInt(bookStorageDict[String(code[0])]) + parseInt(number);
	} else {
		// if no, add this entry into the key and then add the value
		bookStorageDict[String(code[0])] = number;
	}
}

console.log("After dictionary");
console.log(bookStorageDict);
