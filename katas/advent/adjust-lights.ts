type Light = '🟢' | '🔴'
export type Lights = Array<Light>
/**
 * Function to determine the number of changes
 * to make all lights in order correctly
 *
 * @param lights  array of lights in order can be either "🟢" or "🔴"
 * @returns  number of changes to make all lights in order correctly
 */
export function adjustLights(lights: Lights): number {
	const lightsMap = {
		green: '🟢',
		red: '🔴',
	}

	let changesNeeded = 0

	let nextLight =
		lights[0] === lightsMap.green ? lightsMap.green : lightsMap.red

	const changeLastLight = () =>
		nextLight === lightsMap.green ? lightsMap.red : lightsMap.green

	for (let i = 0; i < lights.length; i++) {
		if (lights[i] !== nextLight) changesNeeded++
		nextLight = changeLastLight()
	}

	const minChangesNeeded = Math.min(
		lights.length - changesNeeded,
		changesNeeded
	)

	return minChangesNeeded
}
