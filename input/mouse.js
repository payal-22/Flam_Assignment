export function setupMouse(canvas, target1, target2) {
  canvas.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    target1.x = x
    target1.y = y

    target2.x = canvas.width - x
    target2.y = canvas.height - y
  })
}

