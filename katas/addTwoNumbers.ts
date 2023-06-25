/**
    You are given two non-empty linked lists
    representing two non-negative integers. 
    The digits are stored in reverse order,
    and each of their nodes contains a single 
    digit. Add the two numbers and return 
    the sum as a linked list.

    You may assume the two numbers do not
    contain any leading zero, except the
    number 0 itself.

 */

export type ListNode = number[] | null

export function addTwoNumber(l1: ListNode, l2: ListNode): ListNode {
	const numValueL1 = Number(l1?.reverse().join(''))
	const numValueL2 = Number(l2?.reverse().join(''))

	const res = numValueL1 + numValueL2
	return res
		.toString()
		.split('')
		.reverse()
		.map(str => Number(str))
}

const l1 = [2, 4, 3]
const l2 = [5, 6, 4]

addTwoNumber(l1, l2)
