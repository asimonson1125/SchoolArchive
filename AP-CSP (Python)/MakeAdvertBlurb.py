#import

#get info
def getresponse(question,format):
    response = input(question + "\n")
    if (format == "float"):
        response = float(response)
        valid = True
    elif (format == "int"):
        response = int(response)
        valid = True
    elif (format == "str"):
        valid = True
    return response


#prodname = input("What is the product name?")
#prodcost = input("What is the starting price of the product?")
#whatdo = input("What does your product do?")
#whatget = input("What data does the product")
#howdo = input("How does the product receive its inputs?")
print("Introducing the " + getresponse("What is the product name?","str") + "!\n" +"Designed to use revolutionary " + getresponse("What technology is used to receive its inputs?", "str") + ", " + getresponse("What does the product do? ie. 'it cleans your dishes'","str") + " for " + getresponse("Who is the target audience! ie 'children' or 'busy on-the-go moms'","str") + "!")
