export function areIsomorphic(s: string, t: string): boolean {
  if (s === '' && t === '') return true
  if (s.length !== t.length) return false

  const replacedWords = new Map<string, string>()

  let word = ''

  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    const toReplaceLetter = t[i]

    if (!replacedWords.has(letter)) {
      if ([...replacedWords.values()].includes(toReplaceLetter)) return false
      replacedWords.set(letter, toReplaceLetter)
    }

    const isValid = toReplaceLetter === replacedWords.get(letter)

    if (!isValid) return false

    word += replacedWords.get(letter)
  }

  if (word != t) return false

  return true
}

console.log(areIsomorphic('badc', 'baba'))
