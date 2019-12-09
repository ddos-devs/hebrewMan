const {assert, expect} = require("chai");
const {getSequentialSerias, charsToNumbers} = require("../index");

describe("index", ()=>{
    it("charsToNumbers should return correct value", () => {
       assert.equal(charsToNumbers("קיא"), 111);
    });

    it("getSequentialSeries should return correct values", () =>{
        const r = getSequentialSerias(["א","ג","ב","ט","י","יא", "כ"]);
        expect(r).to.eql([["א","ב","ג"], ["ט","י","יא"], ["כ"]]);
    })

});