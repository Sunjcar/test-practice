const calculator = require('./calc')


test('Add two numbers', () => {
    expect(calculator.add(2, 2)).toEqual(4)
})

test('Subtract two numbers',() => {
    expect(calculator.subtract(10,7)).toEqual(3)
})

test('Divide two numbers', () => {
    expect(calculator.divide(150,3)).toEqual(50)
})

test('Multiply two numbers', () => {
    expect(calculator.multiply(55,10)).toEqual(550)
})