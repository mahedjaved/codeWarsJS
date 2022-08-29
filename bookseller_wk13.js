// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z.

// Each book has a code c of 3, 4, 5 or more characters.

// The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// account for no books in some categories
// amazing for animations ::: https://www.youtube.com/watch?v=qVaUxWdb9G0

//  ALGOL 1 -- Using a dictionary
const listOfArt = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const listOfCat = ["A", "B", "C", "D"];

if (listOfArt.length === 0 || listOfCat.length === 0) {
	return "";
} else {
	let bookStorageDict = {};
	for (let i = 0; i < listOfCat.length; i++) {
		bookStorageDict[String(listOfCat[i])] = 0;
	}
	const [code, number] = listOfArt[0].split(" ");

	for (let i = 0; i < listOfArt.length; i++) {
		// split the entry into first letter, and the number
		const [code, number] = listOfArt[i].split(" ");

		// find if there is a matching code in the dict
		if (code[0] in bookStorageDict) {
			// if yes, then add the current value of this with the number
			bookStorageDict[String(code[0])] =
				parseInt(bookStorageDict[String(code[0])]) + parseInt(number);
		}
	}

	let string_result = "";

	for (i in bookStorageDict) {
		string_result += `(${i} : ${bookStorageDict[String(i)]}) - `;
	}
	string_result = string_result.slice(0, -3);
	console.log(string_result);
}
