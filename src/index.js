"use strict";



function evaluateValue(value, ...args)
{
	if (typeof value === "function")
	{
		return value(...args);
	}

	return value;
}



module.exports = evaluateValue;
