/*----------------------------------------------------------------------------*/
/*                                                                            */
/*    Module:       main.cpp                                                  */
/*    Author:       VEX                                                       */
/*    Created:      Wed Sep 25 2019                                           */
/*    Description:  Clawbot Template (Individual Motors)                      */
/*                                                                            */
/*    Name:                                                                   */
/*    Date:                                                                   */
/*    Class:                                                                  */
/*                                                                            */
/*----------------------------------------------------------------------------*/

// ---- START VEXCODE CONFIGURED DEVICES ----
// Robot Configuration:
// [Name]               [Type]        [Port(s)]
// LeftMotor            motor         1               
// RightMotor           motor         10              
// ClawMotor            motor         3               
// ArmMotor             motor         8               
// backBumper           bumper        A               
// rightBumper          bumper        B               
// leftBumper           bumper        C               
// ---- END VEXCODE CONFIGURED DEVICES ----

#include "vex.h"

using namespace vex;

int main() {
  // Initializing Robot Configuration. DO NOT REMOVE!
  vexcodeInit();

  while(1){
    LeftMotor.spin(reverse);
    RightMotor.spin(reverse);
    
    while(!backBumper.pressing() && !rightBumper.pressing() && !leftBumper.pressing()){
      task::sleep(20);
    }
    LeftMotor.stop();
    RightMotor.stop();
    task::sleep(350);
    LeftMotor.spin(forward);
    RightMotor.spin(forward);
    task::sleep(750);
    LeftMotor.stop();
    RightMotor.stop();
    task::sleep(350);
    LeftMotor.spin(forward);
    RightMotor.spin(reverse);
    task::sleep(rand() % 1000);
    LeftMotor.stop();
    RightMotor.stop();
    task::sleep(350);
    LeftMotor.spin(reverse);
    RightMotor.spin(forward);
    task::sleep(rand() % 1000);
    LeftMotor.stop();
    RightMotor.stop();
    task::sleep(350);
  }
}
