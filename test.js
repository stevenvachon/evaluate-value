"use strict";
const evaluateValue = require("./");
const expect = require("chai").expect;



it("returns non-function input", function()
{
	expect( evaluateValue(true) ).to.be.true;
	expect( evaluateValue(123) ).to.equal(123);
});



it("evaluates function input", function()
{
	function funct1()
	{
		return true;
	};

	function funct2()
	{
		return 123;
	};

	expect( evaluateValue(funct1) ).to.be.true;
	expect( evaluateValue(funct2) ).to.equal(123);
});



it("evaluates function input with arguments", function()
{
	function funct1(arg)
	{
		return arg === true;
	};

	function funct2(arg1, arg2)
	{
		return arg1 === arg2;
	};

	expect( evaluateValue(funct1, true) ).to.be.true;
	expect( evaluateValue(funct2, true, false) ).to.be.false;
});
