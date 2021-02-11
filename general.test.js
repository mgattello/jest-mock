const sum = require('./sum')

// Common matchers.
// toBe test exact equality.
test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

// toEqual recursively checks every field of an object or array.
test('object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
})

// Truthniess.
test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

// Numbers.
test('two plus four', () => {
    const value = 2 + 4
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(7)
    expect(value).toBeLessThanOrEqual(6.5)

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(6)
    expect(value).toEqual(6)
})

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  //expect(value).toBe(0.3) This won't work because of rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})

// Strings.
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

// Arrays and iterables.
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
]

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

// Exceptions.
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/)
})

// Repeating Setup For Many Tests.
beforeEach(() => {
  // initializeCityDatabase()
})

afterEach(() => {
  // clearCityDatabase()
})

test('city database has Vienna', () => {
    // expect(isCity('Vienna')).toBeTruthy()
})

test('city database has San Juan', () => {
    // expect(isCity('San Juan')).toBeTruthy()
})

// Scoping.
// Applies to all tests in this file
beforeEach(() => {
//   return initializeCityDatabase()
})

test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy()
})

test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy()
})

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    // return initializeFoodDatabase()
  })

  test('Vienna <3 sausage', () => {
    // expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true)
  })

  test('San Juan <3 plantains', () => {
    // expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true)
  })
})

// Test only.
test.only('this will be the only test that runs', () => {
//   expect(true).toBe(false);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});