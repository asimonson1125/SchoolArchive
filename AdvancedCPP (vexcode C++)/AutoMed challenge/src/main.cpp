#include "robot-config.h"

double cmdistance(double target){
  return(((target/2.54)/(12.56637))*1.1);
}

int main() {
  Brain.Screen.clearScreen();
  Brain.Screen.print("dab");
  //enter hallway
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(75), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(75), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate 90 degrees left
  LeftMotor.startRotateFor(directionType::rev, 250, rotationUnits::deg);
  RightMotor.rotateFor(directionType::fwd, 250, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //Move towards pharmacy
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(110), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(110), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate to pharmacy (90 degrees right)
  LeftMotor.startRotateFor(directionType::fwd, 250, rotationUnits::deg);
  RightMotor.rotateFor(directionType::rev, 250, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go into pharmacy
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(60), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(60), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(5000);

  //get out of pharmacy
  LeftMotor.startRotateFor(directionType::rev, cmdistance(70), rotationUnits::rev);
  RightMotor.rotateFor(directionType::rev, cmdistance(70), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate right
  LeftMotor.startRotateFor(directionType::fwd, 280, rotationUnits::deg);
  RightMotor.rotateFor(directionType::rev, 280, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go to room 1
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(60), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(60), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate 90 degrees left
  LeftMotor.startRotateFor(directionType::rev, 280, rotationUnits::deg);
  RightMotor.rotateFor(directionType::fwd, 280, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go into room 1
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(70), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(70), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(3000);

  //get out of room 1
  LeftMotor.startRotateFor(directionType::rev, cmdistance(70), rotationUnits::rev);
  RightMotor.rotateFor(directionType::rev, cmdistance(70), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate right
  LeftMotor.startRotateFor(directionType::fwd, 280, rotationUnits::deg);
  RightMotor.rotateFor(directionType::rev, 280, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go to elevator
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(50), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(50), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate left
  LeftMotor.startRotateFor(directionType::rev, 280, rotationUnits::deg);
  RightMotor.rotateFor(directionType::fwd, 280, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go into elevator
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(80), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(80), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(5000);

  //get out of elevator
  LeftMotor.startRotateFor(directionType::rev, cmdistance(75), rotationUnits::rev);
  RightMotor.rotateFor(directionType::rev, cmdistance(75), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate left
  LeftMotor.startRotateFor(directionType::rev, 270, rotationUnits::deg);
  RightMotor.rotateFor(directionType::fwd, 270, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go to room 3 (not room 2)
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(60), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(60), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate left
  LeftMotor.startRotateFor(directionType::rev, 270, rotationUnits::deg);
  RightMotor.rotateFor(directionType::fwd, 270, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go into room 3 (not room 2)
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(60), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(60), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(3000);

  //get out of room 3
  LeftMotor.startRotateFor(directionType::rev, cmdistance(70), rotationUnits::rev);
  RightMotor.rotateFor(directionType::rev, cmdistance(70), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate right
  LeftMotor.startRotateFor(directionType::fwd, 270, rotationUnits::deg);
  RightMotor.rotateFor(directionType::rev, 270, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go to room 2
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(50), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(50), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate left
  LeftMotor.startRotateFor(directionType::rev, 270, rotationUnits::deg);
  RightMotor.rotateFor(directionType::fwd, 270, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go into room 2
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(70), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(70), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(3000);

  //get out of room 3
  LeftMotor.startRotateFor(directionType::rev, cmdistance(70), rotationUnits::rev);
  RightMotor.rotateFor(directionType::rev, cmdistance(70), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate left
  LeftMotor.startRotateFor(directionType::rev, 270, rotationUnits::deg);
  RightMotor.rotateFor(directionType::fwd, 270, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go back to start
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(110), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(110), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //rotate right
  LeftMotor.startRotateFor(directionType::fwd, 280, rotationUnits::deg);
  RightMotor.rotateFor(directionType::rev, 280, rotationUnits::deg);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);

  //go into finish
  LeftMotor.startRotateFor(directionType::fwd, cmdistance(102), rotationUnits::rev);
  RightMotor.rotateFor(directionType::fwd, cmdistance(102), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){}
  task::sleep(300);
}