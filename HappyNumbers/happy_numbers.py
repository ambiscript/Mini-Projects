"""
## Approach
1. Start with input number x.
2. If the value of x is 1, return true.
3. Store the value of x in an array.
4. Isolate the digits of x.
5. Add the sum of the squares of the digits of x, and assign this sum to x.
6. If the value of x has been reached before, return false.
7. Repeat from step 3.
"""

def is_happy_number(x):
    values = []

    while (x != 1):
        values.append(x)

        digits = []

        while (x / 10 > 0):
            digits.append(x % 10)
            x = x // 10

        x = 0

        for digit in digits:
            x += digit ** 2

        for value in values:
            if x == value:
                return False

    return True

happy_numbers = []
current_number = 0

while len(happy_numbers) < 8:
    if is_happy_number(current_number):
        happy_numbers.append(current_number)

    current_number += 1

print(happy_numbers)