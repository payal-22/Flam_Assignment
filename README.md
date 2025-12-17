🌊 Interactive Bézier Rope Simulation
👋 Introduction

Hi!
In this assignment, I built an interactive cubic Bézier curve that behaves like a soft, springy rope.
The curve reacts in real time to user input (mouse movement on the web), and visually shows how Bézier curves and tangents work.

The main goal of this project was to understand the math behind Bézier curves, implement basic physics, and handle real-time rendering — all from scratch, without using any built-in Bézier or physics libraries.

🧠 What I Wanted to Achieve

I wanted to create something that:

Is mathematically correct (actual Bézier formula, not shortcuts)

Feels natural and smooth when it moves

Visually explains what’s happening internally (curve + tangents + control points)

Runs in real time (~60 FPS)

In simple words:
👉 A curve that bends like a rope when I move my mouse.

✨ What You See on the Screen

The visualization contains:

🟢 A smooth white Bézier curve

🔴 Red tangent lines showing direction at different points

🔵 Small circles representing control points

🖱️ Real-time interaction using the mouse

🌱 Smooth, spring-like motion instead of instant jumps

📐 Bézier Curve (In Simple Words)

A Bézier curve is defined using four points:

P0 -------- P1 -------- P2 -------- P3
(start)    (control)   (control)   (end)


P₀ and P₃ are fixed (start and end of the curve)

P₁ and P₂ decide how the curve bends

I calculate the curve using the standard cubic Bézier equation:

𝐵
(
𝑡
)
=
(
1
−
𝑡
)
3
𝑃
0
+
3
(
1
−
𝑡
)
2
𝑡
𝑃
1
+
3
(
1
−
𝑡
)
𝑡
2
𝑃
2
+
𝑡
3
𝑃
3
B(t)=(1−t)
3
P
0
	​

+3(1−t)
2
tP
1
	​

+3(1−t)t
2
P
2
	​

+t
3
P
3
	​


I sample this equation for many small values of t (from 0 to 1) and connect the points to draw a smooth curve.

📉 Tangents — Why I Drew Them

To better understand the curve’s behavior, I also computed tangent vectors.

Tangents show the direction of the curve at a given point

They are computed using the derivative of the Bézier equation

I normalize them so all tangents have the same visual length

These tangents are drawn as small red lines along the curve.

This makes the math visible, not just theoretical.

🧲 Physics: Why the Curve Feels Like a Rope

Instead of moving the control points instantly, I used a spring–damping physics model.

In simple terms:

The mouse sets a target position

The control points move towards the target gradually

Damping prevents endless oscillation

The formula I used is:

acceleration = -k * (currentPosition - targetPosition) - damping * velocity


This gives:

Smooth motion

Slight delay

A natural “rope-like” feel

🖱️ Interaction

Moving the mouse changes the target positions

Control points follow the target using spring physics

One control point mirrors the other for balanced motion

Everything updates in real time using requestAnimationFrame.
