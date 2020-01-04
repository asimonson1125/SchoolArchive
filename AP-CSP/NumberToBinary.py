#Take an integer as a parameter, and will return the binary representation of the entered decimal number.

decimal = int(input("Input number to convert to its binary representation."))

def main(decIn):
    binaryNum = ""
    base = decIn
    while (not(base==0)):
        remainder = base%2
        binaryNum = str(remainder) + binaryNum
        base = base//2
    return binaryNum

print(main(decimal))