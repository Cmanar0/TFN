// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "tfn" is now active!dsfsd');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.helloWorld",
    function () {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from TFN!");
    }
  );

  context.subscriptions.push(disposable);

  vscode.languages.registerHoverProvider("javascript", {
    provideHover(document, position) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);
      if (
        typeof word == "undefined" ||
        typeof word == "object" ||
        typeof word == "boolean" ||
        typeof word == "number" ||
        typeof word == "string" ||
        typeof word == "symbol" ||
        typeof word == "function" ||
        typeof word == "bigint"
      ) {
        if (
          word === "null" ||
          word === "0" ||
          word === "''" ||
          word === "undefined"
        ) {
          return new vscode.Hover({
            language: "javascript",
            value: "Truthy: False",
          });
        } else {
          return new vscode.Hover({
            language: "javascript",
            value: "Truthy: True",
          });
        }
      }
    },
  });
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
