export function isPanagram(phrase: string): boolean {
	const exp = new RegExp(
		/^(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z).*$/
	)
	return exp.test(phrase)
}

console.log(isPanagram('The quick brown fox jumps over the lazy dog.'))
console.log(isPanagram('any thing'))
console.log(isPanagram('This is not panagram.'))
