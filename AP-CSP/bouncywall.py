import turtle
import random
import math
wn = turtle.Screen()
tess = turtle.Turtle()
heidi = turtle.Turtle()
heidi.speed(50)
tess.speed(50)
heidi.penup()
heidi.setposition(tess.xcor(),tess.ycor() + 50)
heidi.pendown()
heidi.color("blue")
tess.color("red")
tess.left(random.randrange(-180, 180))
heidi.left(random.randrange(-180, 180))

if (input("Woud you like there to be any drawing?  press 1 for yes.") == "1"):
    heidi.pendown()
    tess.pendown()
else:
    heidi.penup()
    tess.penup()

def isInScreen(w,t):
    p1 = [tess.xcor(), tess.ycor()]
    p2 = [heidi.xcor(), heidi.ycor()]
    distance = math.sqrt( ((p1[0]-p2[0])**2)+((p1[1]-p2[1])**2) )
    leftBound = - w.window_width() / 2
    rightBound = w.window_width() / 2
    topBound = w.window_height() / 2
    bottomBound = -w.window_height() / 2

    turtleX = t.xcor()
    turtleY = t.ycor()

    stillIn = True
    if turtleX > rightBound or turtleX < leftBound:
        stillIn = False
    if turtleY > topBound or turtleY < bottomBound:
        stillIn = False
    if distance < 20:
        stillIn = False

    return stillIn

step = 0

while step < 2500:
    if (isInScreen(wn,tess) == False):
        tess.left(random.randrange(160,200))
    if (isInScreen(wn,heidi) == False):
        heidi.left(random.randrange(160,200))
    tess.forward(10)
    heidi.forward(10)
    step = step+1

