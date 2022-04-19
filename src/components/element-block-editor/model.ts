import { useNode, UserComponent } from "@craftjs/core";

import { FunctionComponent } from "react";

export type EditorComponent<T = {}> = FunctionComponent<T> & {
  craft?: UserComponent<T>["craft"];
};

export enum EditorComponentName {
  Button = "Button",
}

export type EditorResolver = Record<EditorComponentName, EditorComponent<any>>;
