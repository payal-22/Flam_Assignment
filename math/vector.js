export function normalize(v){
  const t=Math.hypot(v.x,v.y)||1
  return {x:v.x/t,y:v.y/t }
}

