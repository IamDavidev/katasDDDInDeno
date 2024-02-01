export function findSubstringIndex(haystack: string, needle: string): number {
  for (let index = 0; index < haystack.length; index++) {
    const element = haystack[index]

    if (element !== needle[0]) continue

    let isWord = true

    for (let innerIndex = 1; innerIndex < needle.length; innerIndex++) {
      if (haystack[index + innerIndex] !== needle[innerIndex]) isWord = false
    }
    if (isWord) return index
  }

  return -1
}

const str = 'sedbutsad'
const needle = 'sad'
console.log(findSubstringIndex(str, needle))
