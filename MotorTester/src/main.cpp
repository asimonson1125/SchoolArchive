/*----------------------------------------------------------------------------*/
/*                                                                            */
/*    Module:       main.cpp                                                  */
/*    Author:       Andrew Simonson                                           */
/*    Created:      Mon Mar 25 2019                                           */
/*    Description:  Press one of front 8 buttons to control corresponding port*/
/*                                                                            */
/*----------------------------------------------------------------------------*/
//
#include "vex.h"

using namespace vex;

vex::brain       Brain;
vex::controller Controller1     = vex::controller();
vex::motor motor1  = vex::motor( vex::PORT1);
vex::motor motor2  = vex::motor( vex::PORT2);
vex::motor motor3  = vex::motor( vex::PORT3);
vex::motor motor4  = vex::motor( vex::PORT4);
vex::motor motor5  = vex::motor( vex::PORT5);
vex::motor motor6  = vex::motor( vex::PORT6);
vex::motor motor7  = vex::motor( vex::PORT7);
vex::motor motor8  = vex::motor( vex::PORT8);

int selection = 0;

int main() {

    while(true) {
      if(Controller1.ButtonLeft.pressing()){selection = 1;}
      else if(Controller1.ButtonUp.pressing()){selection = 2;}
      else if(Controller1.ButtonDown.pressing()){selection = 3;}
      else if(Controller1.ButtonRight.pressing()){selection = 4;}
      else if(Controller1.ButtonY.pressing()){selection = 5;}
      else if(Controller1.ButtonX.pressing()){selection = 6;}
      else if(Controller1.ButtonB.pressing()){selection = 7;}
      else if(Controller1.ButtonA.pressing()){selection = 8;}
      Brain.Screen.print("You are controlling port"+selection);

     switch(selection) {
      case 1:
        motor1.spin(vex::directionType::fwd, (Controller1.Axis3.position()), vex::velocityUnits::pct); 
        break;
      case 2:
        motor2.spin(vex::directionType::fwd, (Controller1.Axis3.position()), vex::velocityUnits::pct);
        break;
      case 3:
        motor3.spin(vex::directionType::fwd, (Controller1.Axis3.position()), vex::velocityUnits::pct);
        break;
      case 4:
        motor4.spin(vex::directionType::fwd, (Controller1.Axis3.position()), vex::velocityUnits::pct);
        break;
      case 5:
        motor5.spin(vex::directionType::fwd, (Controller1.Axis3.position()), vex::velocityUnits::pct);
        break;
      case 6:
        motor6.spin(vex::directionType::fwd, (Controller1.Axis3.position()), vex::velocityUnits::pct);
        break;
      case 7:
        motor7.spin(vex::directionType::fwd, (Controller1.Axis3.position()), vex::velocityUnits::pct);
        break;
      case 8:
        motor8.spin(vex::directionType::fwd, (Controller1.Axis3.position()), vex::velocityUnits::pct);
        break;
     }
     vex::task::sleep(20);
    }
}