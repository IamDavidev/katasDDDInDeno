import { it, describe } from '@testing/bdd.ts'
import { assertEquals } from '@testing/asserts.ts'
import { maxDistanceStr } from '../../katas/advent/max-distance-string.ts'

const runMaxDistanceTest = (movements: string, expected: number): void => {
    /**
     * @Given
     */
    const maxDistance = maxDistanceStr(movements);

    /**
     * @Then
     */
    assertEquals(maxDistance, expected);
};

describe('max distance', () => {
    it('should be return 2 when the movements is >> ', () => {
        runMaxDistanceTest(">>", 2);
    })

    it('should be return 2 when the movements is << ', () => {
        runMaxDistanceTest("<<", 2);
    })

    it('case 1', () => {
        runMaxDistanceTest(">>*<", 2)
    })

    it('case 2', () => {
        runMaxDistanceTest("<<<>", 2)
    })


    it('case 3', () => {
        runMaxDistanceTest(">***>", 5)
    })

    it('should return 2 when is the same number right and left but we have two powers', () => {
        runMaxDistanceTest(">>*<<*", 2)
    })

    it('should return 2 when moving right twice and using power to move right again', () => {
        runMaxDistanceTest('>>*<', 2);
    });

    it('should return 2 when moving left three times and using power to move right once', () => {
        runMaxDistanceTest('<<<>', 2);
    });

    it('should return 5 when moving right three times and using power to move right twice', () => {
        runMaxDistanceTest('>***>', 5);
    });

    it('should return 0 when no movements are provided', () => {
        runMaxDistanceTest('', 0);
    });

    it('should return 1 when moving right once', () => {
        runMaxDistanceTest('>', 1);
    });

    it('should return 1 when moving left once', () => {
        runMaxDistanceTest('<', 1);
    });

    it('should return 1 when using power to move once', () => {
        runMaxDistanceTest('*', 1);
    });

    it('should return 3 when using power to move twice and moving right once', () => {
        runMaxDistanceTest('**>', 3);
    });

    it('should return 3 when moving left once and using power to move twice', () => {
        runMaxDistanceTest('<**', 3);
    });

    it('should return 1 when moving right once, using power to move right once, and moving left once', () => {
        runMaxDistanceTest('>*<', 1);
    });

    it('should return 5 when moving right three times and using power to move right twice, ignoring left movements', () => {
        runMaxDistanceTest('>*>*>', 5);
    });
})
