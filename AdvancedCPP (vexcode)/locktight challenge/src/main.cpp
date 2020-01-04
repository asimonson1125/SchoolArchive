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
// ---- END VEXCODE CONFIGURED DEVICES ----

#include "vex.h"

using namespace vex;

int main() {
  // Initializing Robot Configuration. DO NOT REMOVE!
  vexcodeInit();

  ClawMotor.setStopping(hold);
  ClawMotor.rotateTo(-250,deg);
  task::sleep(5000);
  ClawMotor.rotateTo(-90,deg);
  task::sleep(500);
  ArmMotor.rotateFor(fwd,500,deg);
  task::sleep(200);
  ArmMotor.rotateFor(reverse,500,deg);
  task::sleep(200);
  ClawMotor.rotateTo(-250,deg);
  task::sleep(200);
  ArmMotor.rotateFor(fwd,500,deg);
}
