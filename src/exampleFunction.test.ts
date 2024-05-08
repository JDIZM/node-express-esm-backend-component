import { describe, expect, it } from "vitest";
import { exampleFunction } from "./exampleFunction.ts";

describe("exampleFunction", () => {
  it("should do something...", () => {
    const result = exampleFunction("foo", "bar");
    expect(result).toEqual(["Hello world!", "foo", "bar"]);
  });
});
