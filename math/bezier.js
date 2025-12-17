import { normalize } from "./vector.js"


// For Computing a point on a cubic Bézier curve for parameter t
// Formula:- B(t) = (1−t)³P₀ + 3(1−t)²tP₁ + 3(1−t)t²P₂ + t³P₃
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

// We have to compute the tangent vector using the derivative of the Bézier curve
// B'(t) = 3(1−t)²(P₁−P₀) + 6(1−t)t(P₂−P₁) + 3t²(P₃−P₂)


export function bezierTangent(t, P0, P1, P2, P3) {
  const u = 1 - t

  const v = {
    x:
      3 * u * u * (P1.x - P0.x) +
      6 * u * t * (P2.x - P1.x) +
      3 * t * t * (P3.x - P2.x),
    y:
      3 * u * u * (P1.y - P0.y) +
      6 * u * t * (P2.y - P1.y) +
      3 * t * t * (P3.y - P2.y)
  }

  return normalize(v)
}


