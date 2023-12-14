export function nextBigger(n: number): number {

    const digits = n.toString().split('').map(Number);
    const len = digits.length;
    let i = len - 1;
    let j = len - 1;

    while (i > 0 && digits[i - 1] >= digits[i]) {
        i--;
    }

    if (i <= 0) {
        return -1;
    }

    while (digits[j] <= digits[i - 1]) {
        j--;
    }

    let temp = digits[i - 1];
    digits[i - 1] = digits[j];
    digits[j] = temp;

    j = len - 1;
    while (i < j) {
        temp = digits[i];
        digits[i] = digits[j];
        digits[j] = temp;
        i++;
        j--;
    }

    const res = Number(digits.join(''));

    return res > n ? res : -1;
    
}