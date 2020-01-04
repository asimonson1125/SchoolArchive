#pragma config(Sensor, in4,    nodpot,         sensorPotentiometer)
#pragma config(Sensor, in5,    armpot,         sensorPotentiometer)
#pragma config(Sensor, dgtl11, DistanceJumper, sensorDigitalIn)
#pragma config(Sensor, dgtl12, ColorJumper,    sensorDigitalIn)
#pragma config(Motor,  port2,           leftDrive,     tmotorVex393_MC29, openLoop, driveLeft)
#pragma config(Motor,  port3,           rightDrive,    tmotorVex393_MC29, openLoop, reversed, driveRight)
#pragma config(Motor,  port4,           punch,         tmotorVex393_MC29, openLoop)
#pragma config(Motor,  port5,           intake,        tmotorVex393_MC29, openLoop)
#pragma config(Motor,  port6,           clawRotate,    tmotorVex393_MC29, openLoop)
#pragma config(Motor,  port7,           arm1,          tmotorVex393_MC29, openLoop)
#pragma config(Motor,  port8,           arm2,          tmotorVex393_MC29, openLoop, reversed)
#pragma config(Motor,  port9,           nod,           tmotorVex393_MC29, openLoop, reversed)
//*!!Code automatically generated by 'ROBOTC' configuration wizard               !!*//

/*---------------------------------------------------------------------------*/
/*                                                                           */
/*        Description: Competition template for VEX EDR                      */
/*                                                                           */
/*---------------------------------------------------------------------------*/

// This code is for the VEX cortex platform
#pragma platform(VEX2)

// Select Download method as "competition"
#pragma competitionControl(Competition)

//Main competition background code...do not modify!
#include "Vex_Competition_Includes.c"

/*---------------------------------------------------------------------------*/
/*                          Pre-Autonomous Functions                         */
/*                                                                           */
/*  You may want to perform some actions before the competition starts.      */
/*  Do them in the following function.  You must return from this function   */
/*  or the autonomous and usercontrol tasks will not be started.  This       */
/*  function is only called once after the cortex has been powered on and    */
/*  not every time that the robot is disabled.                               */
/*---------------------------------------------------------------------------*/

void pre_auton()
{

  // Set bStopTasksBetweenModes to false if you want to keep user created tasks
  // running between Autonomous and Driver controlled modes. You will need to
  // manage all user created tasks if set to false.
  bStopTasksBetweenModes = true;

	// Set bDisplayCompetitionStatusOnLcd to false if you don't want the LCD
	// used by the competition include file, for example, you might want
	// to display your team name on the LCD in this function.
	// bDisplayCompetitionStatusOnLcd = false;

  // All activities that occur before the competition starts
  // Example: clearing encoders, setting servo positions, ...
}

/*---------------------------------------------------------------------------*/
/*                                                                           */
/*                              Autonomous Task                              */
/*                                                                           */
/*  This task is used to control your robot during the autonomous phase of   */
/*  a VEX Competition.                                                       */
/*                                                                           */
/*  You must modify the code to add your own robot specific commands here.   */
/*---------------------------------------------------------------------------*/

task autonomous() {
int NearClip;
int ColorClip;
NearClip = SensorValue(dgtl11);
ColorClip = SensorValue(dgtl12);
//NOTE!! PLUGGED IN CLIPS RETURN 0, UNPLUGGED RETURNS 1


//If clip is plugged in (red alliance)
if (ColorClip == 0){
	if (NearClip == 0) {
		//red, next to flags ------------------------------------------------------
		motor[leftDrive] = -127;
		motor[rightDrive] = -127;
		motor[nod] = -127;
		motor[intake] = -127;
		wait1Msec(1850);
		motor[clawRotate] = 127;
		motor[nod] = 0;
		wait1Msec(150);
		motor[leftDrive] = 0;
		motor[rightDrive] = 0;
		wait1Msec(700);
		motor[clawRotate] = 0;
		motor[leftDrive] = 127;
		motor[rightDrive] = 127;
		wait1Msec(1750);
		motor[intake] = 0;
		motor[rightDrive] = -127;
		wait1Msec(1200);
		motor[rightDrive] = 0;
		motor[leftDrive] = 0;
		motor[punch] = -127;
		wait1Msec(700);
		motor[punch] = 0;
		motor[leftDrive] = -127;
		motor[rightDrive] = -127;
		wait1Msec(1000);
		motor[leftDrive] = 0;
		motor[rightDrive] = 0;
	}
	else {
		//red, far from flags -----------------------------------------------------
		motor[leftDrive] = -127;
		motor[rightDrive] = -127;
		motor[nod] = -127;
		motor[intake] = -127;
		wait1Msec(1850);
		motor[clawRotate] = 127;
		motor[nod] = 0;
		wait1Msec(150);
		motor[leftDrive] = 0;
		motor[rightDrive] = 0;
		wait1Msec(700);
		motor[clawRotate] = 0;
		motor[leftDrive] = 127;
		motor[rightDrive] = 127;
		wait1Msec(1750);
		motor[intake] = 0;
		motor[rightDrive] = -127;
		wait1Msec(1200);
		motor[rightDrive] = 0;
		motor[leftDrive] = 0;
		motor[punch] = -127;
		wait1Msec(700);
		motor[punch] = 0;
	}
}
if (ColorClip == 1){
	if (NearClip == 1) {
		//blue, next to flags -----------------------------------------------------
		motor[leftDrive] = -127;
		motor[rightDrive] = -127;
		motor[nod] = -127;
		motor[intake] = -127;
		wait1Msec(1850);
		motor[clawRotate] = 127;
		motor[nod] = 0;
		wait1Msec(150);
		motor[leftDrive] = 0;
		motor[rightDrive] = 0;
		wait1Msec(700);
		motor[clawRotate] = 0;
		motor[leftDrive] = 127;
		motor[rightDrive] = 127;
		wait1Msec(1850);
		motor[intake] = 0;
		motor[rightDrive] = -127;
		wait1Msec(1400);
		motor[rightDrive] = 0;
		motor[leftDrive] = 0;
		motor[punch] = -127;
		wait1Msec(700);
		motor[punch] = 0;
		motor[leftDrive] = -127;
		motor[rightDrive] = -127;
		wait1Msec(1000);
		motor[leftDrive] = 0;
		motor[rightDrive] = 0;
	}
	else {
		//blue, far from flags ---------------------------------------------------
		motor[leftDrive] = -127;
		motor[rightDrive] = -127;
		motor[nod] = -127;
		motor[intake] = -127;
		wait1Msec(1850);
		motor[clawRotate] = 127;
		motor[nod] = 0;
		wait1Msec(150);
		motor[leftDrive] = 0;
		motor[rightDrive] = 0;
		wait1Msec(700);
		motor[clawRotate] = 0;
		motor[leftDrive] = 127;
		motor[rightDrive] = 127;
		wait1Msec(1850);
		motor[intake] = 0;
		motor[rightDrive] = -127;
		wait1Msec(1300);
		motor[rightDrive] = 0;
		motor[leftDrive] = 0;
		motor[punch] = -127;
		wait1Msec(700);
		motor[punch] = 0;
	}
}




  // ..........................................................................
  // Insert user code here.
  // ..........................................................................


}

/*---------------------------------------------------------------------------*/
/*                                                                           */
/*                              User Control Task                            */
/*                                                                           */
/*  This task is used to control your robot during the user control phase of */
/*  a VEX Competition.                                                       */
/*                                                                           */
/*  You must modify the code to add your own robot specific commands here.   */
/*---------------------------------------------------------------------------*/

task usercontrol()
{
  // User control code here, inside the loop
int barpot;
int tippot;
int turnSequence;
int highBar;
int lowBar;
int highBarExact;
int lowBarExact;
int autonod;
autonod = true;

  while (true) {
 		barpot = (SensorValue(armpot));
		tippot = (SensorValue(nodpot));

		//drive
		motor[leftDrive] = vexRT[Ch3] + vexRT[Ch4];
		motor[rightDrive] = vexRT[Ch3] - vexRT[Ch4];

		//4-bar arm
		if (highBar == false && lowBar == false && highBarExact == false && lowBarExact == false) {
		motor[arm1] = vexRT[Ch1];
		motor[arm2] = vexRT[Ch1];
	}

		//nod
		motor[nod] = 127*(vexRT[Btn5U] - vexRT[Btn5D]);
		if (vexRT[Btn5U] || vexRT[Btn5D]) {
			autonod = false;
	}


		//cap rotation
		motor[clawRotate] = 127*(vexRT[Btn6U] - vexRT[Btn6D]);

		//ball intake
		if (vexRT[Btn7U]) {
			motor[intake] = 127;
		}
		if (vexRT[Btn7D]) {
			motor[intake] = -127;
	}
		if (vexRT[Btn7R]) { //vexRT[Btn7L] ||
			motor[intake] = 0;
	}


		//flywheel, puncher, or catapult
		motor[punch] = 127*(vexRT[Btn8L] - vexRT[Btn8U]);

/*
____________________________________________________________________________
 Automation
____________________________________________________________________________
*/

		//RESET THE AUTON
		if (vexRT[Btn7L]) {
			lowBar = false;
			highBar = false;
			highBarExact = false;
			lowBarExact = false;
			turnSequence = false;
			autonod = true;
	}

/*		//nod autoset
		if (autonod == true) {
			if (tippot > 2100 || tippot < 1900) {
				motor[nod] = -1*(tippot - 1130) / 10;
		}
			else {
				motor[nod] = 0;
		}
	}
*/

		//low bar button
		if (vexRT[Btn8R]) {
			lowBar = true;
	}

		if (lowBar == true) {
			if (barpot < 1450) {
				motor[arm1] = (1650 - barpot)/5;
				motor[arm2] = (1650 - barpot)/5;
			}
			if (barpot > 1450) {
				motor[arm1] = (1200 - barpot)/5;
				motor[arm2] = (1200 - barpot)/5;
				//lowBar = false;
			}
		}

		//low bar exact
		if (vexRT[Btn8D]) {
			if (barpot < 1350) {
				lowBarExact = true;
			}
		}

		if (lowBarExact == true) {
			if (barpot < 1350) {
				motor[arm1] = (1550 - barpot)/5;
				motor[arm2] = (1550 - barpot)/5;
			}
			if (barpot > 1350) {
				motor[arm1] = (1150 - barpot)/5;
				motor[arm2] = (1150 - barpot)/5;
			}
		}

/*		//high bar button
		if (vexRT[Btn8UXmtr2]) {
			highBar = true;
		}
		if (highBar == true) {
			if (barpot < 1500) {
				motor[arm1] = (1700 - barpot)/5;
				motor[arm2] = (1700 - barpot)/5;
			}
			if (barpot > 1500) {
				motor[arm1] = (1300 - barpot)/5;
				motor[arm2] = (1300 - barpot)/5;
				highBar = false;
			}
		}

	//high bar exact
	  if (vexRT[Btn8LXmtr2]) {
			highBarExact = true;
	 }

	if (highBarExact == true) {
		if (barpot < 1400) {
			motor[arm1] = (1600 - barpot)/5;
			motor[arm2] = (1600 - barpot)/5;
		}
		if (barpot > 1400) {
			motor[arm1] = (1200 - barpot)/5;
			motor[arm2] = (1200 - barpot)/5;
		}
	}
*/
		//rotatebutton
		if (vexRT[Btn7UXmtr2]) {
			turnSequence = true;
		}
		if (turnSequence == true) {
			motor[clawRotate] = 127;
			wait1Msec(1400);
			motor[clawRotate] = 0;
			turnSequence = false;
		}

    // This is the main execution loop for the user control program.
    // Each time through the loop your program should update motor + servo
    // values based on feedback from the joysticks.

    // ........................................................................
    // Insert user code here. This is where you use the joystick values to
    // update your motors, etc.
    // ........................................................................

    // Remove this function call once you have "real" code.
  }
}