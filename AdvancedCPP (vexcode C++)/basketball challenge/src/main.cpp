#include "robot-config.h"

int main() {
	LeftMotor.startRotateFor(2, rotationUnits::rev);
  RightMotor.rotateFor(2, rotationUnits::rev);
  task::sleep(1000);
  LeftMotor.startRotateFor(-2, rotationUnits::rev);
  RightMotor.rotateFor(-2, rotationUnits::rev);
  task::sleep(1000);
  LeftMotor.startRotateFor(4, rotationUnits::rev);
  RightMotor.rotateFor(4, rotationUnits::rev);
  task::sleep(1000);
  LeftMotor.startRotateFor(-4, rotationUnits::rev);
  RightMotor.rotateFor(-4, rotationUnits::rev);
  task::sleep(1000);
  LeftMotor.startRotateFor(8, rotationUnits::rev);
  RightMotor.rotateFor(8, rotationUnits::rev);
  task::sleep(1000);
  LeftMotor.startRotateFor(-8, rotationUnits::rev);
  RightMotor.rotateFor(-8, rotationUnits::rev);
  task::sleep(1000);

  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){
    vex::task::sleep(20);
  }
}