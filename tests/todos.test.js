import { getTodos } from "../src/todos.js";
import { expect } from "chai";

describe("getTodos", () => {
	let todos;
	before(async () => {
		todos = await getTodos();
	});
	it("returns an array", () => {
		expect(todos).to.be.an("array");
	});
	it("has at least one todo", () => {
		expect(todos).to.be.not.empty;
	});
	it("each todo has a 'completed' property", () => {
		todos.forEach((todo) => {
			expect(todo).to.have.property("completed");
		});
	});
	it("each 'completed' property is true or false", () => {
		todos.forEach((todo) => {
			expect(todo.completed).to.be.a("boolean");
		});
	});
});
