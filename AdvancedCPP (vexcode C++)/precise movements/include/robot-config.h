#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

#include "v5.h"
#include "v5_vcs.h"
//
using namespace vex;
vex::brain Brain;
controller Controller1 = controller(primary);
controller Controller2 = controller(partner);
motor LeftBackMotor = motor(PORT1, ratio18_1, false);
motor RightBackMotor = motor(PORT2, ratio18_1, true);
motor LeftFrontMotor = motor(PORT3, ratio18_1, false);
motor RightFrontMotor = motor(PORT4, ratio18_1, true);
motor LiftMotor = motor(PORT5, ratio18_1, true);
motor ArmMotor = motor(PORT6, ratio18_1, false);
motor IntakeMotor = motor(PORT7, ratio18_1, false);
motor StackerMotor = motor(PORT8, ratio18_1, false);
bumper StackBumper = bumper(Brain.ThreeWirePort.G);
pot BarPot = pot(Brain.ThreeWirePort.H);
encoder RightQuad = encoder(Brain.ThreeWirePort.C);
encoder LeftQuad = encoder(Brain.ThreeWirePort.A);

motor_group LeftMotor(LeftBackMotor,LeftFrontMotor);
motor_group RightMotor(RightBackMotor,RightFrontMotor);