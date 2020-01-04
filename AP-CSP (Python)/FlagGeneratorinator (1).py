#import
import turtle
#https://en.wikipedia.org/wiki/List_of_flags_by_design

#define how to make each flag
def exitflag():
    input("To restart, press enter.")
    turtle.clearscreen()
    print("\n"*10)
def USflag():
    #create turtle and screen
    turtle.setup(1100,1200)
    wn = turtle.Screen()
    tess = turtle.Turtle()
    tess.penup()
    tess.speed(0)

    #set up positions
    leftBound = - wn.window_width() / 2
    rightBound = wn.window_width() / 2
    topBound = wn.window_height() / 2
    bottomBound = -wn.window_height() / 2
    tess.setposition(leftBound+5,topBound-5)
    tess.pendown()

    #draw bluebox
    tess.fillcolor("#002868")
    tess.begin_fill()
    for i in range(2):
        tess.forward(760/2)
        tess.right(90)
        tess.forward(538/2)
        tess.right(90)
    tess.end_fill()

    #draw stripes next to box
    tess.forward(760/2)
    for i in range(7):
        if (i % 2 == 0):
            tess.fillcolor("#BF0A30")
        else:
            tess.fillcolor("white")
        tess.begin_fill()
        for angle in range(2):
            tess.forward(1140/2)
            tess.right(90)
            tess.forward(77/2)
            tess.right(90)
        tess.end_fill()
        tess.left(90)
        tess.forward(-77/2)
        tess.right(90)

    #draw stripes after box
    tess.forward(-760/2)
    for i in range(6):
        if (i % 2 == 0):
            tess.fillcolor("white")
        else:
            tess.fillcolor("#BF0A30")
        tess.begin_fill()
        for angle in range(2):
            tess.forward(1900/2)
            tess.right(90)
            tess.forward(77/2)
            tess.right(90)
        tess.end_fill()
        tess.left(90)
        tess.forward(-77/2)
        tess.right(90)


    #move back up to make stars
    tess.color("white")
    tess.fillcolor("white")
    tess.penup()
    tess.setposition(leftBound+5,topBound-30)

    #make stars
    def makestars1():
        tess.forward(25)
        for starnum in range(6):
            tess.pendown()
            tess.left(35)
            for side in range(5):
                tess.forward(61.6/4)
                tess.left(144)
            tess.right(35)
            tess.penup()
            tess.forward(63)
    def makestars2():
        tess.forward(55)
        for starnum in range(5):
            tess.pendown()
            tess.left(35)
            for side in range(5):
                tess.forward(61.6/4)
                tess.left(144)
            tess.right(35)
            tess.penup()
            tess.forward(63)
    for starrow in range(9):
        tess.setposition(leftBound+5, topBound-(27+(30*(starrow))))
        if (starrow %2 == 0):
            makestars1()
        else:
            makestars2()
    tess.hideturtle()
    exitflag()
def HorizontalStripes(c1,c2,c3,height,b1,b2,b3):
    #create turtle and screen
    turtle.setup((b1+b2+b3)*1.1,height*1.1)
    wn = turtle.Screen()
    tess = turtle.Turtle()
    tess.color("black")
    tess.penup()
    tess.speed(0)

    #set up positions
    leftBound = - wn.window_width() / 2
    rightBound = wn.window_width() / 2
    topBound = wn.window_height() / 2
    bottomBound = -wn.window_height() / 2
    tess.setposition(leftBound+5,topBound-5)
    tess.pendown()


    #draw stripes
    tess.fillcolor(c1)
    tess.begin_fill()
    for i in range(2):
        tess.forward(b1)
        tess.right(90)
        tess.forward(height)
        tess.right(90)
    tess.end_fill()

    tess.forward(b1)
    tess.fillcolor(c2)
    tess.begin_fill()
    for i in range(2):
        tess.forward(b2)
        tess.right(90)
        tess.forward(height)
        tess.right(90)
    tess.end_fill()

    tess.forward(b2)
    tess.fillcolor(c3)
    tess.begin_fill()
    for i in range(2):
        tess.forward(b3)
        tess.right(90)
        tess.forward(height)
        tess.right(90)
    tess.end_fill()
    tess.hideturtle()
    exitflag()
def VerticalStripes(c1,c2,c3,width,h1,h2,h3):
    #create turtle and screen
    turtle.setup(width*1.1,(h1+h2+h3)*1.1)
    wn = turtle.Screen()
    tess = turtle.Turtle()
    tess.color("black")
    tess.penup()
    tess.speed(0)

    #set up positions
    leftBound = - wn.window_width() / 2
    rightBound = wn.window_width() / 2
    topBound = wn.window_height() / 2
    bottomBound = -wn.window_height() / 2
    tess.setposition(leftBound+5,topBound-5)
    tess.pendown()

    #draw stripes
    tess.fillcolor(c1)
    tess.begin_fill()
    for i in range(2):
        tess.forward(width)
        tess.right(90)
        tess.forward(h1)
        tess.right(90)
    tess.end_fill()
    tess.right(90)
    tess.forward(h1)

    tess.fillcolor(c2)
    tess.begin_fill()
    tess.left(90)
    for i in range(2):
        tess.forward(width)
        tess.right(90)
        tess.forward(h2)
        tess.right(90)
    tess.end_fill()
    tess.right(90)
    tess.forward(h2)

    tess.fillcolor(c3)
    tess.begin_fill()
    tess.left(90)
    for i in range(2):
        tess.forward(width)
        tess.right(90)
        tess.forward(h3)
        tess.right(90)
    tess.end_fill()
    tess.hideturtle()
    exitflag()

def opening():
    print("_"*50 + "\nWelcome to the Flag Generatorinator!\nCurrently there are 11 flags you can make.\nYou can also make a custom vertical/horizontal \ntricolor flag by typing 'custom'!\n"+"_"*50)
    print("You can make the listed flags:\n\nUSA, France, Italy, Romania, Nigeria, Netherlands,\nGermany, Russia, Hungary, Bulgaria, and Austria.\nType 'custom' to create your own!")
    chosenH = input("\nWhich flag would you like to draw? (type exit to exit)\n")

    #identify response and call corresponding flag dawing function
    chosen = chosenH.lower()
    if (chosen == "usa"):
        USflag()
    elif (chosen == "france"):
        HorizontalStripes("#0055A4", "white", "#EF4135",750,337.5,371.25,416.25)
    elif (chosen == "italy"):
        HorizontalStripes("#008C45","#F4F5F0","#CD212A",750,375,375,375)
    elif (chosen == "romania"):
        HorizontalStripes("#002B7F","#FCD116","#CE1126",750,375,375,375)
    elif (chosen == "nigeria"):
        HorizontalStripes("#008753","white", "#008753",500,333,333,333)
    elif (chosen == "netherlands"):
        VerticalStripes("#AE1C28","white","#21468B",1200,267,267,267)
    elif (chosen == "germany"):
        VerticalStripes("black","#FF0000","#FFCC00",1200,240,240,240)
    elif (chosen == "russia"):
        VerticalStripes("white","#0039A6","#D00B0E",1200,267,267,267)
    elif (chosen == "hungary"):
        VerticalStripes("#CD2A3E","white","#436F4D",1200,200,200,200)
    elif (chosen == "bulgaria"):
        VerticalStripes("white","#009B75","#D01C1F",1200,240,240,240)
    elif (chosen == "austria"):
        VerticalStripes("#ED2939","white","#ED2939",1200,267,267,267)
    #Custom flags
    elif (chosen == "custom"):
        customchoose = input("Would you like a horizontal or vertical flag? type '0' for horizontal, anything else for vertical.")
        if (customchoose == "0"):
            widthperstripe = int(input("What is the width per stripe as measured in pixels? (suggested between 200 and 500, the height of the flag is 750px by default.)"))
            HorizontalStripes(input("What is your first color? (hexadecimal also accepted in the format of #FFFFFF)"),input("What is your second color? (hexadecimal also accepted in the format of #FFFFFF)"),input("What is your third color? (hexadecimal also accepted in the format of #FFFFFF)"),750,widthperstripe,widthperstripe,widthperstripe)
        else:
            heightperstripe = int(input("What is the height per stripe as measured in pixels? (Suggested between 150 and 300, the width of the flag by default is 1000px by default.)"))
            VerticalStripes(input("What is your first color? (hexadecimal also accepted in the format of #FFFFFF)"),input("What is your second color? (hexadecimal also accepted in the format of #FFFFFF)"),input("What is your third color? (hexadecimal also accepted in the format of #FFFFFF)"),1000,heightperstripe,heightperstripe,heightperstripe)
    #close program
    elif (chosen == "exit" or chosen == "enter"):
        exit()
    else:
        print("\n"*10 + "Improper response, try again.")


#run and repeat
while(True):
    opening()