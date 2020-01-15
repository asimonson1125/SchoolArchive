/*----------------------------------------------------------------------------*/
/*                                                                            */
/*    Module:       main.cpp                                                  */
/*    Author:       simonand                                                  */
/*    Created:      Thu Jan 02 2020                                           */
/*    Description:  V5 project                                                */
/*                                                                            */
/*----------------------------------------------------------------------------*/

// ---- START VEXCODE CONFIGURED DEVICES ----
// Robot Configuration:
// [Name]               [Type]        [Port(s)]
// Reset                bumper        A               
// P1                   bumper        B               
// P2                   bumper        C               
// P3                   bumper        D               
// ---- END VEXCODE CONFIGURED DEVICES ----

#include "vex.h"

using namespace vex;

std::string gross = "#";
std::string out;
int p1pts = 0;
int p2pts = 0;
int p3pts = 0;
int p1e = 0;
int p2e = 0;
int p3e = 0;
bool earlyPress;

int main() {
  // Initializing Robot Configuration. DO NOT REMOVE!
  vexcodeInit();
  Brain.Screen.setFont(mono40);

  while(1){
    earlyPress = false;
    Brain.Screen.clearScreen(black);
    Brain.Screen.setFont(monoXL);
  Brain.Screen.printAt(0, 200, "Waiting for reset...");
  while(!Reset.pressing()){
    task::sleep(50);
  }
  Brain.Screen.clearScreen("#990000");
  for(int i = 0; i < 3; i++){
    for(int a = 99; a > 0; a--){
      if(!earlyPress){
      gross = "#";
      if(a < 10){
        gross.append("0");
      }
      gross.append((char *)a);
      Brain.Screen.clearScreen((char *)gross.c_str());
      task::sleep(10);
      if(P1.pressing()){
    Brain.Screen.printAt(0,200,"P1 pressed early!");
    p1e++;
    earlyPress = true;
  }
  else if (P2.pressing()){
    Brain.Screen.printAt(0,200,"P2 pressed early!");
    p2e++;
    earlyPress = true;
  }
  else if (P3.pressing()){
    Brain.Screen.printAt(0,200,"P3 pressed early!");
    p3e++;
    earlyPress = true;
  }
    }
    }
  }
  if(!earlyPress){
    Brain.Screen.clearScreen(blue);
  Brain.Screen.printAt(0,200,"GO!");
  while(!P1.pressing() && !P2.pressing() && !P3.pressing()){
    task::sleep(10);
  }
  Brain.Screen.clearScreen(green);
  if(P1.pressing()){
    Brain.Screen.printAt(0,200,"P1 won!");
    p1pts++;
  }
  else if (P2.pressing()){
    Brain.Screen.printAt(0,200,"P2 won!");
    p2pts++;
  }
  else if (P3.pressing()){
    Brain.Screen.printAt(0,200,"P3 won!");
    p3pts++;
  }
  }
  task::sleep(3000);
  Brain.Screen.setFont(mono20);
  out = "P1 has ";
  out.append((char *)p1pts);
  out.append(" points and ");
  out.append((char *)p1e);
  out.append("early presses.");
  Brain.Screen.printAt(0,100,(char *) out.c_str());
  task::sleep(2500);
  Brain.Screen.clearScreen();
  out = "P2 has ";
  out.append((char *)p2pts);
  out.append(" points and ");
  out.append((char *)p2e);
  out.append("early presses.");
  Brain.Screen.printAt(0,100,(char *) out.c_str());
  task::sleep(2500);
  Brain.Screen.clearScreen();
  out = "P3 has ";
  out.append((char *)p3pts);
  out.append(" points and ");
  out.append((char *)p3e);
  out.append("early presses.");
  Brain.Screen.printAt(0,100,(char *) out.c_str());
  task::sleep(2500);
  Brain.Screen.clearScreen();
}
}
