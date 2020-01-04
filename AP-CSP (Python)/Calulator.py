import sys

prompt = float(input("What is your first number?"))


def firstequation():
    newinput = input("What operator do you want?  (use + , - , * , /)")
    if newinput == "+" or newinput == "-" or newinput == "*" or newinput == "/":
        nextnumber = float(input("What is your second number?"))
        if newinput == "+":
            response = prompt + nextnumber
        if newinput == "-":
            response = prompt - nextnumber
        if newinput == "*":
            response = prompt * nextnumber
        if newinput == "/":
            response = prompt / nextnumber
    else:
        print("Invalid response, try again.")
        sys.exit()
    print(response)
    return response
end = firstequation()

def otherequations(response):
    newinput = input("What operator do you want?  (use + , - , * , /) press e to end the program.")
    if newinput == "e":
        print("Your final answer is", response)
        sys.exit()
    if newinput == "+" or newinput == "-" or newinput == "*" or newinput == "/":
        nextnumber = float(input("What is your next number?"))
        if newinput == "+":
            answer = response + nextnumber
        if newinput == "-":
            answer = response - nextnumber
        if newinput == "*":
            answer = response * nextnumber
        if newinput == "/":
            answer = response / nextnumber
    else:
        print("Invalid response, try again.")
        sys.exit()
    print(answer)
    return answer

while 1 == 1:
    end = otherequations(end)

