/**
 * Type of time
 * 00:00
 */
export type Time = string

/**
 * Type of clock
 * [[....]]
 */
export type Clock = string[][]

export function drawClock(time: Time): Clock {
  const symbol = '*'
  const times = {
    '0': [
      [symbol, symbol, symbol],
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, symbol, symbol],
    ],
    '1': [
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
    ],
    '2': [
      [symbol, symbol, symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [symbol, symbol, symbol],
      [symbol, ' ', ' '],
      [symbol, ' ', ' '],
      [symbol, symbol, symbol],
    ],
    '3': [
      [symbol, symbol, symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [symbol, symbol, symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [symbol, symbol, symbol],
    ],
    '4': [
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, symbol, symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
    ],
    '5': [
      [symbol, symbol, symbol],
      [symbol, ' ', ' '],
      [symbol, ' ', ' '],
      [symbol, symbol, symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [symbol, symbol, symbol],
    ],
    '6': [
      [symbol, symbol, symbol],
      [symbol, ' ', ' '],
      [symbol, ' ', ' '],
      [symbol, symbol, symbol],
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, symbol, symbol],
    ],
    '7': [
      [symbol, symbol, symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
    ],
    '8': [
      [symbol, symbol, symbol],
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, symbol, symbol],
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, symbol, symbol],
    ],
    '9': [
      [symbol, symbol, symbol],
      [symbol, ' ', symbol],
      [symbol, ' ', symbol],
      [symbol, symbol, symbol],
      [' ', ' ', symbol],
      [' ', ' ', symbol],
      [symbol, symbol, symbol],
    ],
    ':': [[' '], [' '], [symbol], [' '], [symbol], [' '], [' ']],
  }

  const clock = []

  const timeArray = time.split('') as (keyof typeof times)[]

  for (let i = 0; i < 7; i++) {
    const row = []
    for (let t = 0; t < timeArray.length; t++) {
      const time = times[timeArray[t]][i]
      const ended = t === timeArray.length - 1 ? [] : [' ']
      row.push(...time, ...ended)
    }
    clock.push(row)
  }

  return clock
}

drawClock('00:00')
