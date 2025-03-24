import { renderHook } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
    result.current.increment();
    expect(result.current.count).toBe(1);
  });

  it('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
    result.current.decrement();
    expect(result.current.count).toBe(-1);
  });
});