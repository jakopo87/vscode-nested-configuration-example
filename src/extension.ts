// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    /* Default value by package.json - CORRECT */
    console.log(vscode.workspace.getConfiguration('helloworld').inspect('test_package'));
    console.log(vscode.workspace.getConfiguration('helloworld').get('test_package'));

    /* Overwritten value by workspace - CORRECT */
    console.log(vscode.workspace.getConfiguration('helloworld').inspect('test_workspace'));
    console.log(vscode.workspace.getConfiguration('helloworld').get('test_workspace'));

    /* Default value by package.json - NOT WORKING*/
    console.log(vscode.workspace.getConfiguration('helloworld_nested').inspect('test_package'));
    console.log(vscode.workspace.getConfiguration('helloworld_nested').get('test_package'));

    /* Overwritten value by workspace - CORRECT */
    console.log(vscode.workspace.getConfiguration('helloworld_nested').inspect('test_workspace'));
    console.log(vscode.workspace.getConfiguration('helloworld_nested').get('test_workspace'));
}

// this method is called when your extension is deactivated
export function deactivate() {}
