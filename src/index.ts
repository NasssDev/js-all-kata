export type Point = {
  x: number;
  y: number;
};

const computeOneDimensionDistance = (a: number, b: number) => {
  return Math.abs(b - a);
};

const computeManhattanDistance = (a: Point, b: Point): number => {
  return (
    computeOneDimensionDistance(b.x, a.x) + //
    computeOneDimensionDistance(b.y, a.y)
  );
};

export default computeManhattanDistance;
