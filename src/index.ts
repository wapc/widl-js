export * from "./parser";

// Expose `widl.ast` for the browser
import * as astAll from "./ast/index";
export const ast = astAll;
