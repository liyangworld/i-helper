import * as vscode from "vscode";
import { ViewDataProvider } from "./views/ViewDataProvider";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  vscode.window.registerTreeDataProvider("view.common", new ViewDataProvider());
  let showcontent = vscode.commands.registerCommand(
    "i-helper.viewCommon",
    (filePath) => {
      let uri = vscode.Uri.file(path.join(context.extensionPath, filePath));
      vscode.commands.executeCommand("markdown.showPreview", uri);
    }
  );
  context.subscriptions.push(showcontent);
}

export function deactivate() {}
