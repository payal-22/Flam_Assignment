import{ normalize } from "./vector.js"


//Formula:-B(t)=((1−t)^3)p0+3((1−t)^2)tp1+3(1−t)(t^2)p2+(t^3)p3
export function bezierPoint(t,p0,p1,p2,p3){
  const u=1-t
  const tt=t*t
  const uu=u*u

  return{
    x: uu*u*p0.x+3*uu*t*p1.x+3*u*tt*p2.x+tt*t*p3.x,
    y:uu*u*p0.y+3*uu*t*p1.y+3*u*tt*p2.y+tt*t*p3.y
  }
}

// Calcuated tangent equation by doing 1st derivative
// B'(t)=3((1−t)^2)(p₁−p₀)+6(1−t)t(p₂−p₁)+3(t^2)(p₃−p₂)


export function bezierTangent(t,p0,p1,p2,p3) {
  const u=1-t
  const v={
    x:3*u*u*(p1.x-p0.x)+6*u*t*(p2.x-p1.x)+3*t*t*(p3.x-p2.x),
    y:3*u*u*(p1.y-p0.y)+6*u*t*(p2.y-p1.y)+3*t*t*(p3.y-p2.y)
  }

  return normalize(v)
}


