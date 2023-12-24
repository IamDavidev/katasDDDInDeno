export type Weigth = number | null
export type Row = Array<Weigth>

export type Weigths = Array<Row>
/**
 * Function that distributes weights in a scale
 * 
 * @param weights  Array of weights
 * @returns      Array of weights distributed
 */
export function distributeWeights(weights: Weigths): Weigths {
  console.log('>> weights', weights)

  return weights
}
