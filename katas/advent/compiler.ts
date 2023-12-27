/**
 * Type for the input code
 */
export type InputCode = string

/**
 * Function to compile a string of instructions
 * into a result
 *
 * @param code String of instructions
 * @returns  Result of the program
 */
export function compile(code: InputCode): number {
  let counter = 0
  const instructions = code.split('')

  let flagIndex = null as number | null
  let currentIndex = 0

  const actionsCompiler: { [key: string]: () => void } = {
    '+': () => counter++,
    '-': () => counter--,
    '*': () => (counter *= 2),
    '%': () => (flagIndex = currentIndex),
    '<': () => {
      if (flagIndex === null) return
      instructions[currentIndex] = ''
      currentIndex = flagIndex
      flagIndex = null
    },
    '¿': () => {
      if (counter > 0) return
      const endBracketIndex = instructions.indexOf('?')
      instructions[endBracketIndex] = ''
      currentIndex = endBracketIndex
    },
    '?': () => '',
  }

  for (currentIndex = 0; currentIndex < instructions.length; currentIndex++)
    actionsCompiler[instructions[currentIndex]]?.()

  return counter
}

compile('-¿+++?¿*+?')
