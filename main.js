import { updateSpring } from "./physics/spring.js"
import { drawCurve, drawTangents } from "./render/canvas.js"
import { setupMouse } from "./input/mouse.js"
import { drawControlPoints } from "./render/canvas.js"

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width =800
canvas.height =600

const P0 ={x:100,y:300}
const P3 ={x:700,y:300}

const P1 ={x:250,y:200,vx:0,vy:0}
const P2 ={x:550,y:400,vx:0,vy:0}

const target1 ={x:P1.x,y:P1.y}
const target2 ={x:P2.x,y:P2.y}

setupMouse(canvas,target1,target2)

let last = performance.now()

function animate(now){
  const dt=(now-last)/1000
  last =now

  updateSpring(P1,target1,dt)
  updateSpring(P2,target2,dt)

  ctx.clearRect(0,0,canvas.width,canvas.height)

  drawCurve(ctx,P0,P1,P2,P3)
  drawTangents(ctx,P0,P1,P2,P3)
  drawControlPoints(ctx,[P0,P1,P2,P3])

  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

