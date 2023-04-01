/** * @jest-environment jsdom */

const { TestScheduler } = require("jest");
const buttonClick = require("../button");


beforeEach(() => {        // set up our mock DOM
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);     //gets all h1 tags and stores them into an array, if the h1 tag exists then the length of the array will be 1. If two h1 tags existed then, the the array will be 2, and so on.
    });
});