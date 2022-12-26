import { fibonacci } from "../src/fibo.js";
import { assert, expect } from "chai";

describe("fibonacci function", () => {
	it("maps 0 to 0", () => {
		expect(fibonacci(0)).to.be.equal(0);
	});
	it("maps 1 to 1", () => {
		expect(fibonacci(1)).to.be.equal(1);
	});
	it("maps 4 to 3", () => {
		expect(fibonacci(4)).to.be.equal(3);
	});
	it("maps 8 to a number", () => {
		expect(fibonacci(8)).to.be.a("number");
	});
	it("maps 10 to a positive number", () => {
		assert(fibonacci(10) > 0);
	});
	it("throws an error for -1 as argument", () => {
		expect(() => fibonacci(-1)).to.throw();
	});
	it("throws an error for '123' as argument", () => {
		expect(() => fibonacci("123")).to.throw();
	});
});
