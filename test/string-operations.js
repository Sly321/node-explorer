Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var expect = chai.expect;
var StringOperations = require("../src/app/string-operations");
describe('testStringOperations', function () {
    var classUnderTest = StringOperations;
    beforeEach(function () {
    });
    it('getCommandObjectFromString_ÜbergebenWirdEinString_SollteObjectZurückgeben', function () {
        var str = "";
        var obj = classUnderTest.getCommandObjectFromString(str);
        expect(obj).to.be.an('object');
    });
    it('getCommandObjectFromString_ÜbergebenWird "pwd"_SollteObjectZurückgebenMitAttributCommand "pwd"', function () {
        var str = "pwd";
        var obj = classUnderTest.getCommandObjectFromString(str);
        expect(obj.command).to.be.equal("pwd");
    });
    it('getCommandObjectFromString_ÜbergebenWird "cd .."_SollteObjectZurückgebenMitAttributArgsWasAufErsterStelle ".." enthält', function () {
        var str = "cd ..";
        var obj = classUnderTest.getCommandObjectFromString(str);
        expect(obj.args[0]).to.be.equal("..");
    });
    it('getCommandObjectFromString_ÜbergebenWird "npm install --save-dev test"_SollteObjectAttributSollteArgs[1] savedev enthalten', function () {
        var str = "npm install --save-dev test";
        var obj = classUnderTest.getCommandObjectFromString(str);
        expect(obj.args[1]).to.be.equal("--save-dev");
    });
});
