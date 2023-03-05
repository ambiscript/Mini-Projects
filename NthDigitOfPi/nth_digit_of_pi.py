import math

pi = str(math.pi)
MAX = 100

number = int(input("Input a number: "))

if number > MAX:
    raise Exception("Number exceeds maximum of 100")

print(pi[0 : number + 2])