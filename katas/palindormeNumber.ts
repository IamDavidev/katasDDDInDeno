export function isPalindrome(x: number): boolean {
  return Number(x.toString().split('').reverse().join('')) === x;
}

console.log(isPalindrome(121));

console.log(isPalindrome(-121));
