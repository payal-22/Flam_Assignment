# 🌊 Interactive Bézier Rope Simulation

## 👋 Introduction

Hi!  
In this assignment, I built an **interactive cubic Bézier curve** that behaves like a **soft, springy rope**.  
The curve reacts in real time to user input (mouse movement on the web) and visually explains how **Bézier curves, tangents, and basic physics** work together.

I intentionally implemented everything **from scratch**, without using any built-in Bézier, animation, or physics libraries, so that I could truly understand the underlying math and motion.

---

## 🎯 Objective

The main objective of this project was to:

- Implement a cubic Bézier curve using its mathematical definition  
- Add smooth, natural motion using a spring–damping physics model  
- Visualize tangent vectors along the curve  
- Handle real-time interaction and rendering at ~60 FPS  

In simple words:  
👉 *When I move the mouse, the curve should bend smoothly like a rope instead of snapping instantly.*

---

## ✨ What You See on the Screen

The visualization includes:

- 🟢 A smooth **white Bézier curve**
- 🔴 **Red tangent lines** showing the direction of the curve
- 🔵 Small circles representing **control points**
- 🖱️ Real-time mouse interaction
- 🌱 Smooth, spring-like motion

---



## 📐 Understanding the Bézier Curve (Simple Explanation)

A **cubic Bézier curve** is defined using **four control points**:

```text
Cubic Bézier Control Points

P0 ●--------------------● P3
     \                /
      \              /
       ●------------●
       P1            P2







<img width="449" height="368" alt="image" src="https://github.com/user-attachments/assets/37c9c272-aab9-4c47-955b-3eaa1c225013" />


