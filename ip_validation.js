// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// CHECK #1 - no alphabets allowed

// CHECK #2 - leading zeroes not allowed 01.02.03.04

// CHECK #3 - cannot exceed more than four dp, e.g.  12.313.114.14.1414.141.14 is NOT ALLOWED, only four decimals

// CHECK #4 - no special symbols such as \n e.g. \n13.131.145.141 OR 13.131.145.141\n

// CHECK #5 - cannt be less than four decimals e.g. 121.414

// CHECK #6 - cannot have negative numbers

// CHECK #7 - cannot have spaces at front ' 141.131.1415.144' or back '141.131.1415.144 ' or both ' 141.131.1415.144 '

// CHECK #8 - no commas allowed

const hasAlphabet = (str) => {
    return /[a-zA-Z]/.test(str);
};

const hasNegativeSign = (str) => {
    return str.includes("-");
};

const hasTrailingZeroes = (str) => {
    str = str.split(".");
    return str.map((x) => x.charAt(0).includes("0")).includes(true);
};

const hasMoreThan4DPs = (str) => {
    return str.split(".").length > 4;
};

const hasLessThan4DPs = (str) => {
    return str.split(".").length < 4;
};

const hasEndLineSymbol = (str) => {
    return str.includes("\n");
};

const hasSpaces = (str) => {
    return str.includes(" ");
};

// --------------------- answer below --------------------- //

function isValidIP(str) {
    switch (true) {
        case hasAlphabet(str):
            console.log("[fail] has alphabet in it");
            return false;
        case hasNegativeSign(str):
            console.log("[fail] has negative number/s");
            return false;
        case hasTrailingZeroes(str):
            console.log("[fail] has trailing zeroes");
            return false;
        case hasMoreThan4DPs(str):
            console.log("[fail] has MORE than four decimals");
            return false;
        case hasLessThan4DPs(str):
            console.log("[fail] has LESS than four decimals");
            return false;
        case hasEndLineSymbol(str):
            console.log("[fail] has the character endline in it");
            return false;
        case hasSpaces(str):
            console.log("[fail] has spaces");
            return false;
        default:
            console.log("[pass] Check, perfect");
            return true;
    }
}
