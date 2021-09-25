import { TreeItem, TreeItemCollapsibleState } from "vscode";

export interface ViewItemInfo {
  title: string;
  id: string;
  desc: string;
  path: string;
}

export class ViewItem extends TreeItem {
  constructor(info: ViewItemInfo) {
    super("", TreeItemCollapsibleState.None);
    this.label = info.title;
    this.id = info.id;
    this.description = info.desc;
    this.command = {
      title: "点击查看详情",
      command: "i-helper.viewCommon",
      arguments: [info.path],
    };
  }
}
