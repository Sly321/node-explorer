export function getCommandObjectFromString(commandStr) {
	let commandArray = commandStr.split(" ");
	let command = commandArray[0];
	let commandArgs = commandArray.slice(1, commandArray.length);

	let commandObj = {
		command: command,
		args: commandArgs
	};
	return commandObj;
}
