export type Gifts = Array<string>
export type Materials = string

/**
 *
 * @param gift String array of gifts
 * @param materials  String of materials
 * @returns
 */
export function manufacture(gift: Gifts, materials: Materials): Gifts {
	console.info(
		'🚀 ~>  file: manufacture.ts:5 ~>  manufacture ~>  materials:',
		materials
	)
	console.info('🚀 ~>  file: manufacture.ts:5 ~>  manufacture ~>  gift:', gift)

	const canManufaturedGifts: Gifts = []

	return canManufaturedGifts
}
