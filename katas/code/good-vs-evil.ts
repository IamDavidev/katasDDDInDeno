type Force = string

export function goodVsEvil(good: Force, evil: Force) {
  const goodForceWorth = [1, 2, 3, 3, 4, 10, 0]
  const evilForceWorth = [1, 2, 2, 2, 3, 5, 10]

  const goodForce = good.split(' ').map(Number)
  const evilForce = evil.split(' ').map(Number)

  console.table(goodForce)
  console.table(evilForce)

  let sumGoodWorth = 0
  let sumEvilWorth = 0

  for (let index = 0; index < 7; index++) {
    const sumGood =
      goodForceWorth[index] *
      (goodForce[index] === undefined ? 0 : goodForce[index])
    const sumEvil = evilForceWorth[index] * evilForce[index]

    sumGoodWorth += sumGood
    sumEvilWorth += sumEvil
  }

  const messages = new Map()
  messages.set('GoodWin', 'Battle Result: Good triumphs over Evil')
  messages.set('EvilWin', 'Battle Result: Evil eradicates all trace of Good')
  messages.set('tie', 'Battle Result: No victor on this battle field')

  if (sumEvilWorth === sumGoodWorth) return messages.get('tie')

  if (sumEvilWorth > sumGoodWorth) return messages.get('EvilWin')

  return messages.get('GoodWin')
}

console.log(goodVsEvil('0 1 1 1 1 1', '1 1 1 1 1 1 1'))
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))
