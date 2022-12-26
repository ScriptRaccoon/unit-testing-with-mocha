import { expect } from "chai";

describe("tests in timeouts", () => {
	it("have to use the 'done' function", (done) => {
		let number = 0;
		setTimeout(() => {
			number = 10;
			expect(number).to.be.equal(10);
			done();
		}, 3000);
	}).timeout(5000);
});
