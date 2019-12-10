import {expect, assert} from "chai";
import "mocha";

import {charsToNumbers,getSequentialSeries} from "../src";

describe("getSequentialSeries", ()=>{

    it("getSequentialSeries should return correct values", () =>{

        const r = getSequentialSeries(["א","ג","ב","ט","י","יא", "כ"]);
        expect(r).to.eql([["א","ב","ג"], ["ט","י","יא"], ["כ"]]);
    })

    it("getSequentialSeries should return correct values", () =>{
        const r = getSequentialSeries(["א","ג","ב","ט","י","יא","כ","ת","כא"]);
        expect(r).to.eql([["א","ב","ג"], ["ט","י","יא"], ["כ","כא"], ["ת"]]);
    })

    it("getSequentialSeries when geting false input should return correct values", () =>{
        const r = getSequentialSeries(["א","ג","ב","dzdc"]);
        expect(r).to.eql([ ["dzdc"], ["א","ב","ג"]]);
    })
});

describe("charsToNumbers", ()=> {
    it("charsToNumbers should return correct value", () => {
        assert.equal(charsToNumbers("קיא"), 111);
    });

    it("charsToNumbers when get false input should return 0", () => {
        assert.equal(charsToNumbers("dfds"), 0);
    });
});