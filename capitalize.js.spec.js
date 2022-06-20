const capitalize = require('./capitalize')

test('capitalize alphabet', () => {
    expect(capitalize('a')).toBe('A')
})

test('capitalize first letter of a word', () => {
    expect(capitalize('annie')).toBe('Annie')
})

test('capitalize first letter of multiple words', () => {
    expect(capitalize('aNNie', 'pleAse')).toBe('Annie', 'Please')
})