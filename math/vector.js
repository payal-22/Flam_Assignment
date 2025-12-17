export function normalize(v) {
  const mag = Math.hypot(v.x, v.y) || 1
  return { x: v.x / mag, y: v.y / mag }
}

