import typescriptDefaultValue, { typescriptNamedValue } from "./typescript";
import javascriptDefaultValue, { javascriptNamedValue } from "./javascript";

test("typescript.ts", () => {
  expect(typescriptDefaultValue).toMatchInlineSnapshot(
    `"TypeScript default value"`
  );
  expect(typescriptNamedValue).toMatchInlineSnapshot(
    `"TypeScript named value"`
  );
});

test("javascript.js", () => {
  expect(javascriptDefaultValue).toMatchInlineSnapshot(
    `"JavaScript default value"`
  );
  expect(javascriptNamedValue).toMatchInlineSnapshot(
    `"JavaScript named value"`
  );
});
