def isLeap(year):
    # your code here
    if year % 4 == True:
        if year % 100 == True:
            if year % 400 == True:
                return True
            else:
                return False
        else:
            return True
    else:
        return False

