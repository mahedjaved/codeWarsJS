function isFloat(value) {
	// function borrowed from :: https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer
	if (
		typeof value === "number" &&
		!Number.isNaN(value) &&
		!Number.isInteger(value)
	) {
		return true;
	}

	return false;
}

module.exports = { isFloat };
