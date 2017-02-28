import chai = require("chai");
import sinon = require("sinon");
let expect = chai.expect;
let main = require("../src/app/file-operations");

describe('test File Operations', function() {
	let classUnderTest = main;
	// Vor jedem Test
	beforeEach(function() {

	});

	it('getParentDirectory_ÜbergebenWird "C:\\hello" _Sollte "C:\\" zurückgeben', function() {
		// Vorbereitung
		let directoryString = "C:\\hello";
		// Ausführung
		let cDrive = classUnderTest.getParentDirectory(directoryString);
		// Prüfung
		expect(cDrive).to.be.equal("C:\\");
	});

	it('getParentDirectory_ÜbergebenWird "C:\\" _Sollte "C:\\" zurückgeben', () => {
		// Vorbereitung
		let directoryString = "C:\\";

		// Ausführung
		let cDrive = classUnderTest.getParentDirectory(directoryString);

		// Prüfung
		expect(cDrive).to.be.equal("C:\\");
	});

	it('getParentDirectory_ÜbergebenWird "C:\\hello\\world" _Sollte "C:\\hello" zurückgeben', () => {
		// Vorbereitung
		let directoryString = "C:\\hello\\world";

		// Ausführung
		let directory = classUnderTest.getParentDirectory(directoryString);

		// Prüfung
		expect(directory).to.be.equal("C:\\hello");
	});

	it('getParentDirectory_ÜbergebenWirdNull_SollteLeerstringZurückgeben', () => {
		// Vorbereitung
		let directoryString = null;

		// Ausführung
		let directory = classUnderTest.getParentDirectory(directoryString);

		// Prüfung
		expect(directory).to.be.equal("");
	});

	it('getParentDirectory_ÜbergebenWirdNichts_SollteLeerstringZurückgeben', () => {
		// Vorbereitung

		// Ausführung
		let directory = classUnderTest.getParentDirectory();

		// Prüfung
		expect(directory).to.be.equal("");
	});
});
