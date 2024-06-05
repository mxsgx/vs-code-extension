import * as vscode from "vscode";
import { LinkProvider } from "..";
import { getInertiaViews } from "../repositories/inertia";
import { findInDoc } from "../support/doc";
import { inertiaMatchRegex } from "../support/patterns";

const provider: LinkProvider = (
    doc: vscode.TextDocument,
): vscode.DocumentLink[] => {
    return findInDoc(doc, inertiaMatchRegex, (match) => {
        return getInertiaViews()[match[0]]?.uri ?? null;
    });
};

export default provider;
