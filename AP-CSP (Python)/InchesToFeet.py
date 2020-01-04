#________________________________________________
#Inches to Feet converter
#Author: Andrew Simonson and Natheniel Goldstien
#________________________________________________


#Get input
ininches = input("input your height in inches")
#Convert string to float
inches = float(ininches)
#Find number of feet total
NumOfFeet = int(inches  // 12)
#Find remainder of inches
NumOfInches = inches - (NumOfFeet * 12)
print("You are" , NumOfFeet , "feet and" , NumOfInches , "inches tall.")




