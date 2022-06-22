const analyzeArray = require('./analyzeArray')

test('4 number array', () => {
    expect(analyzeArray([1,2,3,4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4,
    })
})

test('Mixed up larger array', () => {
    expect(analyzeArray([12,51,1,23,21,21,38])).toEqual({
        average: 23.857142857142858,
        min: 1,
        max: 51,
        length: 7,
    })
})

test('Tests if array contains all numbers', () => {
    expect(analyzeArray([1,2,4,'2','hippo'])).toBe(
        'Array contains a non number'
    )
})

test('String of numbers', () => {
    expect(analyzeArray(['1234567890'])).toBe('Array contains a non number')
})