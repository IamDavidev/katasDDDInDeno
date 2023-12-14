import { describe, it } from '@testing/bdd.ts'
import { createChristmasTree } from '../../katas/advent/create-christmas-tree.ts'
import { assertEquals } from '@testing/asserts.ts'

function checkTreeCreation(symbols: string, height: number,  expected: string) {
    /**
     * @When
     */
    const tree = createChristmasTree(symbols, height)

    /**
     * @Then
     */
    assertEquals(tree, expected)
}

describe("Create Christmas Tree", () => {

    it("should return a tree with height 1", () => {
        /**
         * @Given
         */
        const symbols = '*'
        const height = 1
        const expected = '*\n|\n'

        /**
         * @Run
         */
        checkTreeCreation(symbols, height, expected)
    })

    it("should return a tree with height 3", () =>{
        /**
         * @Given
         */
        const symbols = '*'
        const height = 3
        const expectedTree = '  *\n * *\n* * *\n  |\n'

       /**
        * @Run
        */
       checkTreeCreation(symbols, height, expectedTree)
    })

    it("should return a bigger tree", () => {
        /**
         * @Given
         */
        const symbols = '*@o&*(&(%^('
        const height = 16

        const expectedTree = `               *
              @ o
             & * (
            & ( % ^
           ( * @ o &
          * ( & ( % ^
         ( * @ o & * (
        & ( % ^ ( * @ o
       & * ( & ( % ^ ( *
      @ o & * ( & ( % ^ (
     * @ o & * ( & ( % ^ (
    * @ o & * ( & ( % ^ ( *
   @ o & * ( & ( % ^ ( * @ o
  & * ( & ( % ^ ( * @ o & * (
 & ( % ^ ( * @ o & * ( & ( % ^
( * @ o & * ( & ( % ^ ( * @ o &
               |\n`

        /**
         * @IamDavidev
         */
        
        checkTreeCreation(symbols, height, expectedTree)
    })

})
