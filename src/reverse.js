export function reverseString(str) {
	if (typeof str != "string")
		throw Error("Only strings are allowed");
	// ------------------------------------
	// recursive and direct implementation
	// ------------------------------------
	// if (str.length == 0) return str;
	// const firstLetter = str[0];
	// const restString = str.substring(1);
	// const reversedRestString = reverseString(restString);
	// return reversedRestString + firstLetter;

	// ------------------------------------
	// implementation using arrays
	// ------------------------------------
	// return str.split("").reverse().join("");

	// ------------------------------------
	// iterative and direct implementation
	// ------------------------------------
	let result = "";
	for (let i = 0; i < str.length; i++) {
		result += str[str.length - i - 1];
	}
	return result;
}
