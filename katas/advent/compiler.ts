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
  console.log('CODE >> ', code)
  return 0
}
