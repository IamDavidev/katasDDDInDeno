/**
 * Create a function called _if which takes 3 arguments:
 * a value bool and 2 functions
 * (which do not take any parameters): func1 and func2
 *
 * When bool is truthy, func1 should be called,
 * otherwise call the func2.
 *
 */

type Bool = boolean;
type Func = () => void;

export function _if(bool: Bool, f1: Func, f2: Func): void {
  if (bool) return f1();
  return f2();
}
