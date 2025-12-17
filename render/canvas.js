import { bezierPoint, bezierTangent } from "../math/bezier.js"

export function drawCurve(ctx, P0, P1, P2, P3) {
  ctx.beginPath()
  for (let t = 0; t <= 1; t += 0.01) {
    const p = bezierPoint(t, P0, P1, P2, P3)
    t === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
  }
  ctx.strokeStyle = "white"
  ctx.lineWidth = 2
  ctx.stroke()
}
// Draws tangent vectors at regular intervals along the curve
export function drawTangents(ctx, P0, P1, P2, P3) {
  for (let t = 0; t <= 1; t += 0.1) {
    const p = bezierPoint(t, P0, P1, P2, P3)
    const tan = bezierTangent(t, P0, P1, P2, P3)

    ctx.beginPath()
    ctx.moveTo(p.x, p.y)
    ctx.lineTo(
          p.x + tan.x * 45,
          p.y + tan.y * 45
)

    ctx.strokeStyle = "rgba(255, 80, 80, 0.7)" // faded red
    ctx.lineWidth = 1
    ctx.stroke()
  }
}

// Draws visible control points as small circles
export function drawControlPoints(ctx, points) {
  ctx.fillStyle = "#00ffcc"
  for (const p of points) {
    ctx.beginPath()
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2)
    ctx.fill()
  }
}

