#include "robot-config.h"
int times = 0;
int main() {
  LeftMotor.startRotateFor(directionType::fwd, 290, rotationUnits::deg);
  RightMotor.rotateFor(directionType::rev, 290, rotationUnits::deg);
  task::sleep(500);

  while(!(times == 3)){
    times++;
    LeftMotor.startRotateFor(directionType::rev, 580, rotationUnits::deg);
    RightMotor.rotateFor(directionType::fwd, 580, rotationUnits::deg);
    task::sleep(500);
  
    LeftMotor.startRotateFor(directionType::fwd, 580, rotationUnits::deg);
    RightMotor.rotateFor(directionType::rev, 580, rotationUnits::deg);
    task::sleep(500);
  }
}