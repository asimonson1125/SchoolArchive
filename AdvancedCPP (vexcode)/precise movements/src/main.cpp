#include "robot-config.h"

double cmdistance(double target){
  return(((target/2.54)/(12.56637))*1.1);
}

void oldbasketball(){
    Brain.Screen.clearScreen();
  Brain.Screen.print("forward first");
	//LeftMotor.startRotateFor(cmdistance(10), rotationUnits::rev);
  RightMotor.rotateFor(cmdistance(10), rotationUnits::rev);
  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){
  }
  task::sleep(1000);
  Brain.Screen.clearScreen();
  Brain.Screen.print("backward first");
  //LeftMotor.startRotateFor(cmdistance(-10), rotationUnits::rev);
  RightMotor.rotateFor(cmdistance(-10), rotationUnits::rev);
  task::sleep(1000);
  Brain.Screen.clearScreen();
  Brain.Screen.print("forward second");
  //LeftMotor.startRotateFor(cmdistance(20), rotationUnits::rev);
  RightMotor.rotateFor(cmdistance(20), rotationUnits::rev);
  task::sleep(1000);
  Brain.Screen.clearScreen();
  Brain.Screen.print("backward second");
  //LeftMotor.startRotateFor(cmdistance(-20), rotationUnits::rev);
  RightMotor.rotateFor(cmdistance(-20), rotationUnits::rev);
  task::sleep(1000);
  Brain.Screen.clearScreen();
  Brain.Screen.print("forward third");
  //LeftMotor.startRotateFor(cmdistance(40), rotationUnits::rev);
  RightMotor.rotateFor(cmdistance(40), rotationUnits::rev);
  task::sleep(1000);
  Brain.Screen.clearScreen();
  Brain.Screen.print("backward third");
  //LeftMotor.startRotateFor(cmdistance(-40), rotationUnits::rev);
  RightMotor.rotateFor(cmdistance(-40), rotationUnits::rev);
  task::sleep(1000);
  Brain.Screen.clearScreen();
  Brain.Screen.print("finished");
}

void sweepRight(int deg){
  LeftMotor.setVelocity(60, pct);
  double turnpoint = deg * 7.91;
  LeftMotor.spinFor(turnpoint, rotationUnits::deg);
  LeftMotor.stop();
}

int main() {
  sweepRight(90);

  while(LeftMotor.isSpinning() && RightMotor.isSpinning()){
  }
}