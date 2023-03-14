import computeManhattanDistance, { Point } from ".";

test("The distance between a point and itself should equal zero", () => {
  // GIVEN
  const a: Point = {
    x: 0,
    y: 0,
  };

  // WHEN
  const actual = computeManhattanDistance(a, a);

  // THEN
  const expected: number = 0;
  expect(actual).toEqual(expected);
});

test("Compute the distance on the x axis", () => {
  // GIVEN
  const a: Point = {
    x: 1,
    y: 0,
  };
  const b: Point = {
    x: 2,
    y: 0,
  };

  // WHEN
  const actual = computeManhattanDistance(a, b);

  // THEN
  const expected: number = 1;
  expect(actual).toEqual(expected);
});

test("A distance must be a positive number", () => {
  // GIVEN
  const a: Point = {
    x: 0,
    y: 0,
  };
  const b: Point = {
    x: -1,
    y: 0,
  };

  // WHEN
  const actual = computeManhattanDistance(a, b);

  // THEN
  const expected: number = 1;
  expect(actual).toEqual(expected);
});

test("Compute the distance on the y axis", () => {
  // GIVEN
  const a: Point = {
    x: 0,
    y: 0,
  };
  const b: Point = {
    x: 0,
    y: 1,
  };

  // WHEN
  const actual = computeManhattanDistance(a, b);

  // THEN
  const expected: number = 1;
  expect(actual).toEqual(expected);
});

test("Compute the distance on the y axis", () => {
  // GIVEN
  const a: Point = {
    x: 0,
    y: 3,
  };
  const b: Point = {
    x: 0,
    y: 1,
  };

  // WHEN
  const actual = computeManhattanDistance(a, b);

  // THEN
  const expected: number = 2;
  expect(actual).toEqual(expected);
});

test("Compute the manhattan distance (both x and y dimensions)", () => {
  // GIVEN
  const a: Point = {
    x: 0,
    y: 0,
  };
  const b: Point = {
    x: 1,
    y: 1,
  };

  // WHEN
  const actual = computeManhattanDistance(a, b);

  // THEN
  const expected: number = 2;
  expect(actual).toEqual(expected);
});