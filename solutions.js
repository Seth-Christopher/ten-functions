"use strict";

// 1.
function isTrue (input) {
    return input === true;
}


// 2.

function isFalse (value) {
    return value === false;
}

// 3.

function not (input) {
    return !input;
}

// 4.
function addOne (input) {
    if (input === Number) {
        return input + 1;
    } else {
        return parseFloat(input) + 1;
    }
}

// 5.
function isEven (input) {
    if (typeof input === "number") {
        return (input % 2 === 0);
    } else {
        return (parseFloat(input) % 2 === 0);
    }
}

// 6.
function isIdentical (inputOne, inputTwo) {
    return inputOne === inputTwo;
}

// 7.
function isEqual (inputOne, inputTwo) {
    return inputOne == inputTwo;
}

// 8.
function or (inputOne, inputTwo) {
    return inputOne || inputTwo;
}

// 9.
function and (inputOne, inputTwo) {
    return inputOne && inputTwo;
}

// 10.
function concat (inputOne, inputTwo) {
    return (inputOne.toString() + inputTwo.toString());
}


/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

