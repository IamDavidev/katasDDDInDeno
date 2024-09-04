
export function addDigits(num: number) : number {
  const numStr = num.toString();

  if(numStr.length === 1) return num;

  
  const sum = numStr.split('').reduce((acc, curr) => acc + parseInt(curr), 0);

  return addDigits(sum);
}