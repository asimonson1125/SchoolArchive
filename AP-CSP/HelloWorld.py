#commentful people use (br)ashtags
#comment at start of a program, but I tend to do what I want.

#HelloWorld is the basic print of 'Hello World!' commonly known as the start of programming.
#Author: A. Simonson

#Import new info
import time
import sys
import os
import webbrowser



#print space odessy 2002 hello world
#print is a function.  Functions execute.
#TimeToLive is a variable.  Variables have values.
#input() is a function.  It displays a message and then recieves a value from the user.

choice = input("Do you want to commit suicide?  (press 1 for yes, press 2 for no.)")

#response = no
if choice == "1":
    time.sleep(2)
    print("That's what I thought.")
    time.sleep(2)
    print('''The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. 
      The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster 
      each minute after you hear this signal bodeboop. A sing lap should be completed every time you hear this sound. ding Remember
      to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your
      test is over. The test will begin on the word start. On your mark. Get ready!… Start. ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!
      Ding!''')
    sys.exit()
if choice == "2":
    time.sleep(1)
    os.system('clear')  # on linux / os x
    time.sleep(.5)
    print("So be it.")
    time.sleep(1)
    print("Here is your legendary gift.")
    time.sleep(3)
    os.system('clear')
    webbrowser.open_new_tab('https://cdn.theatlantic.com/assets/media/img/mt/2018/12/AP_18339679369968/lead_720_405.jpg?mod=1546868686')
