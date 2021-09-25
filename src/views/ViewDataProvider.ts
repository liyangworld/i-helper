import { TreeDataProvider, EventEmitter, Event } from "vscode";
import { ViewItem } from "./ViewItem";

const commonViews = [
  {
    title: "mockjs使用说明",
    id: "mockjs",
    desc: "",
    path: "./resources/views/common/mockjs使用说明.md",
  },
];

export class ViewDataProvider implements TreeDataProvider<ViewItem> {
  private _onDidChangeTreeData: EventEmitter<any> = new EventEmitter<any>();
  readonly onDidChangeTreeData: Event<any> = this._onDidChangeTreeData.event;

  refresh() {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(element: ViewItem) {
    return element;
  }

  getChildren(element: ViewItem) {
    return commonViews.map((info) => {
      return new ViewItem(info);
    });
  }

  getParent(element: ViewItem) {
    return null;
  }
}
