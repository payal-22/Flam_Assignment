 //Formula:acceleration=-k*(position-target)-damping*velocity

export function updateSpring(point,target,dt) {
  const k=25
  const damping=6

  const ax=-k*(point.x-target.x)-damping*point.vx
  const ay=-k*(point.y-target.y)-damping* point.vy

  point.vx+=ax*dt
  point.vy+=ay*dt

  point.x+=point.vx*dt
  point.y+=point.vy*dt
}

