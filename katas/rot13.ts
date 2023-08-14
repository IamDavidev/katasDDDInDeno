export function rot13(str: string): String {
	const map = new Map()
	map.set('a', 'n')
	map.set('b', 'o')
	map.set('c', 'p')
	map.set('d', 'q')
	map.set('e', 'r')
	map.set('f', 's')
	map.set('g', 't')
	map.set('h', 'u')
	map.set('i', 'v')
	map.set('j', 'w')
	map.set('k', 'x')
	map.set('l', 'y')
	map.set('m', 'z')
	map.set('n', 'a')
	map.set('o', 'b')
	map.set('p', 'c')
	map.set('q', 'd')
	map.set('r', 'e')
	map.set('s', 'f')
	map.set('t', 'g')
	map.set('u', 'h')
	map.set('v', 'i')
	map.set('w', 'j')
	map.set('x', 'k')
	map.set('y', 'l')
	map.set('z', 'm')

    let newWord = ""

    str.split("").map((letter) =>{
        let value : string =  map.get(letter.toLowerCase()) ??  letter
        if(letter.toLowerCase() !== letter ) value = value.toUpperCase()
        newWord += value
    })
    
	return newWord
}

console.log(rot13('EBG13 rknzcyr.'))
console.log(rot13('This is my first ROT13 excercise!'))
