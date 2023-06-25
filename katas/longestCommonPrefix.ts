/**
 
  Write a function to find the
  longest common prefix string
  amongst an array of strings.

  If there is no common prefix,
  return an empty string "".

 */

export function longestCommonPrefix(strs: string[]): string {
	let prefixList: string[] = [];

	const strsSplits = strs.map((str) => {
		return str.split('');
	});
	let s = '';

	strsSplits[0].forEach((letter: string, index) => {
		let letterCommon = '';

		strsSplits.forEach((wordSplit) => {
			const findLetter = wordSplit.find((el) => el === letter);

			if (findLetter === undefined) return;
			if (index !== wordSplit.indexOf(findLetter)) return;

			letterCommon = letterCommon + findLetter;
		});

		if (letterCommon.length === strs.length) {
			s = s + letter;
		} else {
			s = '';
		}

		if (s !== '') {
			prefixList = [...prefixList, s];
		}
	});
	if (prefixList.length === 0) return '';

	return prefixList.reduce((lon, curr) => {
		if (curr.length > lon.length) return curr;
		return lon;
	});
}
