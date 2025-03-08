import { delay } from "./async_func";

it("should resolve with the message after the specified time", async () => {
  const message = "Hello, world!";
  const time = 1000;
  const result = await delay(message, time);
  expect(result).toBe(message);
});

it("timeがマイナスの場合はエラーが発生する", async () => {
  try {
    const result = await delay("Hello, world!", -1);
  } catch(e: any) {
    expect(e.message).toBe("Time must be a positive number");
  }
});
// Compare this snippet from src/section2/async_func.ts: