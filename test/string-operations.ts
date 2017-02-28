import chai = require("chai");
import sinon = require("sinon");
let expect = chai.expect;

let StringOperations = require("../src/app/string-operations");

describe('testStringOperations', () => {

	let classUnderTest = StringOperations;

	// Vor jedem Test
	beforeEach(() => {

	});

	it('getCommandObjectFromString_ÜbergebenWirdEinString_SollteObjectZurückgeben', () => {
		// Vorbereitung
		let str = "";

		// Ausführung
		let obj = classUnderTest.getCommandObjectFromString(str);

		// Prüfung
		expect(obj).to.be.an('object');
	});

	it('getCommandObjectFromString_ÜbergebenWird "pwd"_SollteObjectZurückgebenMitAttributCommand "pwd"', () => {
		// Vorbereitung
		let str = "pwd";

		// Ausführung
		let obj = classUnderTest.getCommandObjectFromString(str);

		// Prüfung
		expect(obj.command).to.be.equal("pwd");
	});

	it('getCommandObjectFromString_ÜbergebenWird "cd .."_SollteObjectZurückgebenMitAttributArgsWasAufErsterStelle ".." enthält', () => {
		// Vorbereitung
		let str = "cd ..";

		// Ausführung
		let obj = classUnderTest.getCommandObjectFromString(str);

		// Prüfung
		expect(obj.args[0]).to.be.equal("..");
	});

	it('getCommandObjectFromString_ÜbergebenWird "npm install --save-dev test"_SollteObjectAttributSollteArgs[1] savedev enthalten', () => {
		// Vorbereitung
		let str = "npm install --save-dev test";

		// Ausführung
		let obj = classUnderTest.getCommandObjectFromString(str);

		// Prüfung
		expect(obj.args[1]).to.be.equal("--save-dev");
	});
});
