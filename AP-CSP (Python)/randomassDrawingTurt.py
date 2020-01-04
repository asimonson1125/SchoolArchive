import turtle
import random
wn = turtle.Screen()
tess = turtle.Turtle()

tess.speed(10000)
tess.shape("turtle")
tess.pensize(2)
while True:
    tess.penup()
    turtx = tess.xcor()
    turty = tess.ycor()
    tess.goto(turtx + random.randrange(-5,6), turty + random.randrange(-5,6))
    tess.pendown()
    tess.forward(1)
    tess.forward(-1)