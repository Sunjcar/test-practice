const caesar = require('./caesar')

test('Shifts letter', () => {
    expect(caesar('A',1)).toBe('B')
})

test('Shifts multiple letters', () => {
    expect(caesar('Aabe',1)).toBe('Bbcf')
})

test('Shifts pass 26', () => {
    expect(caesar('a',53)).toBe('b')
})

test('Shifts past 26 multiple letters',() => {
    expect(caesar('abc',22)).toBe('wxy')
})

test('Shifts with punctuations',() => {
    expect(caesar('ar92;',1)).toBe('bs:3<')
})