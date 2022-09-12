// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// 1) split acoording to space

// 2) map through the list

// 3) pick charAt(0) and place at end

// 4) append ay
// const pigIt = "Pig latin is cool";
// let strAnsw = pigIt.split(" ").map((x) => {
// 	x = x.slice(1, x.length) + x.charAt(0) + "ay";
// 	return x;
// });
// console.log(strAnsw.join(""));
function pigIt(str) {
	return str
		.split(" ")
		.map((x) => {
			if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(x)) {
				return x;
			} else {
				x = x.slice(1, x.length) + x.charAt(0) + "ay";
				return x;
			}
		})
		.join(" ");
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("This is my string"));
console.log(pigIt("O tempora o mores !"));
