const reverseString = require('./reverseString')

test('reverses string', () => {
    expect(reverseString('annie loves big')).toBe('gib sevol einna')
})

test('reverses string with capitals', () => {
    expect(reverseString('Big pooR mEn')).toBe('nEm Roop giB')
})