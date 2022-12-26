import { reverseString } from "../src/reverse.js";

import { expect } from "chai";

describe("reverseString function", () => {
	it("maps 'xyz' to something not undefined", () => {
		expect(reverseString("xyz")).to.be.not.undefined;
	});
	it("maps 'xyz' to a string", () => {
		expect(reverseString("xyz")).to.be.a("string");
	});
	it("maps 'xyz' to 'zyx'", () => {
		expect(reverseString("xyz")).to.be.equal("zyx");
	});
	it("maps '' to itself", () => {
		expect(reverseString("")).to.be.equal("");
	});
	it("maps 'hi mom!' to '!mom ih'", () => {
		expect(reverseString("hi mom!")).to.be.equal("!mom ih");
	});
	it("throws an error for the *number* 123 as argument", () => {
		expect(() => reverseString(123)).to.throw();
	});
});
