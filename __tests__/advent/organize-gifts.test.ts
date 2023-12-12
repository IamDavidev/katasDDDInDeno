import { describe, it } from '@testing/bdd.ts'
import { organizeGifts } from '../../katas/advent/organize-gifts.ts'
import {
	assertEquals,
	assertInstanceOf,
	assertNotEquals,
} from '@testing/asserts.ts'

function checkOrganizeStrings(gifts: string, expected: string): void {
	/**
	 * @When
	 */

	const store = organizeGifts(gifts)

	/**
	 * @Then
	 */
	assertNotEquals(store, '')
	assertEquals(store, expected)
}

describe('organize strings', () => {
	it('should return string', () => {
		/**
		 * @Given
		 */
		const gifts = '1a'
		const _ = '(a)'

		/**
		 * @When
		 */
		const result = organizeGifts(gifts)

		assertEquals(typeof result, 'string')
	})

	it('should return 2 pallets when 100 gifts ', () => {
		/**
		 * @Given
		 */
		const gifts = '100e'
		const expected = '[e][e]'

		/**
		 * @Run
		 */
		checkOrganizeStrings(gifts, expected)
	})

	it('should return 4 boxes when 40 gifts ', () => {
		/**
		 * @Given
		 */
		const gifts = '40z'
		const expected = '{z}{z}{z}{z}'

		/**
		 * @Run
		 */
		checkOrganizeStrings(gifts, expected)
	})

	it('should valid all letters of the alphabet with bag', () => {
		/**
		 * @Given
		 */
		const gifts = '1a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z'
		const expected =
			'(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)(m)(n)(o)(p)(q)(r)(s)(t)(u)(v)(w)(x)(y)(z)'

		/**
		 * @Run
		 */
		checkOrganizeStrings(gifts, expected)
	})

	it('should valid all letters of the alphabet with box', () => {
		/**
		 * @Given
		 */
		const gifts = '10a10b10c10d10e10f10g10h10i10j10k10l10m10n10o10p10q10r10s10t10u10v10w10x10y10z'
		const expected = '{a}{b}{c}{d}{e}{f}{g}{h}{i}{j}{k}{l}{m}{n}{o}{p}{q}{r}{s}{t}{u}{v}{w}{x}{y}{z}'

		/**
		 * @Run
		 */
		checkOrganizeStrings(gifts, expected)
	})

	it('should valid all letters of the alphabet with pallet', () => {
		/**
		 * @Given
		 */
		const gifts = '50a50b50c50d50e50f50g50h50i50j50k50l50m50n50o50p50q50r50s50t50u50v50w50x50y50z'
		const expected = '[a][b][c][d][e][f][g][h][i][j][k][l][m][n][o][p][q][r][s][t][u][v][w][x][y][z]'

		/**
		 * @Run
		 */
		checkOrganizeStrings(gifts, expected)
	})

	it('should organize gifts with multiple occurrences of letters and brackets', () => {
		/**
		 * @Given
		 */
		const gifts = '76a11b';
		const expected = '[a]{a}{a}(aaaaaa){b}(b)';
	
		/**
		 * @Run
		 */
		checkOrganizeStrings(gifts, expected);
	});
	
	it('should handle a case with a few letters and multiple brackets', () => {
		/**
		 * @Given
		 */
		const gifts = '20a';
		const expected = '{a}{a}';
	
		/**
		 * @Run
		 */
		checkOrganizeStrings(gifts, expected);
	});
	
	it('should properly organize a mix of letters and brackets in the input', () => {
		/**
		 * @Given
		 */
		const gifts = '70b120a4c';
		const expected = '[b]{b}{b}[a][a]{a}{a}(cccc)';
	
		/**
		 * @Run
		 */
		checkOrganizeStrings(gifts, expected);
	});
	
	it('should handle a case with consecutive occurrences of letters and brackets', () => {
		/**
		 * @Given
		 */
		const gifts = '19d51e';
		const expected = '{d}(ddddddddd)[e](e)';
	
		/**
		 * @Run
		 */
		checkOrganizeStrings(gifts, expected);
	});
	
})
