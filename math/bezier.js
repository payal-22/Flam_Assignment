import { normalize } from "./vector.js"

export function bezierPoint(t, P0, P1, P2, P3) {
  const u = 1 - t
  const tt = t * t
  const uu = u * u

  return {
    x:
      uu * u * P0.x +
      3 * uu * t * P1.x +
      3 * u * tt * P2.x +
      tt * t * P3.x,
    y:
      uu * u * P0.y +
      3 * uu * t * P1.y +
      3 * u * tt * P2.y +
      tt * t * P3.y
  }
}



