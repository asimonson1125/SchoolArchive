Forward Until Touch
---

This program drives the robot forward until the bumper is pressed.
There is a two second pause at the beginning of the program.

```
Robot Configuration: 
[Smart Port]    [Name]        [Type]           [Description]       [Reversed]
Motor Port 1    LeftMotor     V5 Smart Motor    Left side motor     false
Motor Port 10   RightMotor    V5 Smart Motor    Right side motor    true

[Three Wire Port]    [Name]        [Type]                   
Bumper Port A        Bumper1       Bumper switch     Front facing bumper
```