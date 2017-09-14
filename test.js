"use strict";
const evaluateValue = require("./");
const {expect} = require("chai");



it("returns non-function input", () =>
{
	expect( evaluateValue(true) ).to.be.true;
	expect( evaluateValue(123) ).to.equal(123);
});



it("evaluates function input", () =>
{
	const funct1 = () => true;
	const funct2 = () => 123;

	expect( evaluateValue(funct1) ).to.be.true;
	expect( evaluateValue(funct2) ).to.equal(123);
});



it("evaluates function input with arguments", () =>
{
	const funct1 = arg => arg === true;
	const funct2 = (arg1, arg2) => arg1 === arg2;

	expect( evaluateValue(funct1, true) ).to.be.true;
	expect( evaluateValue(funct2, true, false) ).to.be.false;
});
