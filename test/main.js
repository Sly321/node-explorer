var chai = require("chai");
var sinon = require("sinon");
var expect = chai.expect;
var main = require("../src/app/file-operations");

describe('testScripts', function () {
    var classUnderTest = main;
    // Vor jedem Test
    beforeEach(function () {

    });

    it('getParentDirectory_UebergebeDirectory "C:\\hello" _Sollte "C:\\" Zurueckgeben', function () {
        // Vorbereitung
		var directoryString = "C:\\hello";
        // Ausführung
        var cDrive = classUnderTest.getParentDirectory(directoryString);
        // Prüfung
        expect(cDrive).to.be.equal("C:\\");
    });

	it('getParentDirectory_ÜbergebenWird "C:\\" _Sollte "C:\\" zurückgeben', () => {
		// Vorbereitung
		var directoryString = "C:\\";

		// Ausführung
		var cDrive = classUnderTest.getParentDirectory(directoryString);

		// Prüfung
		expect(cDrive).to.be.equal("C:\\");
	});
});
