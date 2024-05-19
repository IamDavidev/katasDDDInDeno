export function areIsomorphic(s: string, t: string): boolean {
  if (s === '' && t === '') return true
  if (s.length !== t.length) return false

  const assignedValues = new Set<string>()
  const replacedWords = new Map<string, string>()

  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    const toReplaceLetter = t[i]

    if (!replacedWords.has(letter)) {
      if (assignedValues.has(toReplaceLetter)) return false

      replacedWords.set(letter, toReplaceLetter)
      assignedValues.add(toReplaceLetter)
    }

    const isValid = toReplaceLetter === replacedWords.get(letter)

    if (!isValid) return false
  }

  return true
}

console.log(areIsomorphic('badc', 'baba'))
