import { divide, ZeroDivisorError } from './divide';
// toThrow
test('divide 10 by 0 should throw an error', () => {
  expect(() => divide(10, 0)).toThrow();
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});