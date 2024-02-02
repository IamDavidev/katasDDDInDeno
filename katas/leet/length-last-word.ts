export function getLengthLastWord(s: string) {
  const words = s.split(' ').filter(Boolean)
  return words[words.length - 1].length
}

getLengthLastWord('Hello World')
getLengthLastWord('   fly me   to   the moon  ')
getLengthLastWord('luffy is still joyboy')
