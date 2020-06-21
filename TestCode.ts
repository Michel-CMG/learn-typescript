// deno test TestCode.ts

import { assertEquals } from "https://deno.land/std@0.56.0/testing/asserts.ts";
import { add, addAsync } from "./TestClass.ts";

Deno.test("TestAdd", function(): void
{
  const result = add(1, 2);
  assertEquals(result, 3);
});

Deno.test("TestAddAsync", async function()
{
  const result = await addAsync(1, 2);
  assertEquals(result, 3);
});