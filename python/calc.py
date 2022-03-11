n1 = float(input("insert one number: "))
n2 = float(input("insert second number: "))

option = 0

while True:
    print("""
    Select options:

    1) sum
    2) rest
    3) mult
    4) change numbers
    5) of calc
    """)
    option = int(input('Select options: '))

    if option == 1:
        print(" ")
        print("Result of sum: ", n1, "+", n2, "is: ", n1+n2)
    elif option == 2:
        print(" ")
        print("Result of rest: ", n1, "-", n2, "is: ", n1-n2)
    elif option == 3:
        print(" ")
        print("Result of mult: ", n1, "*", n2, "is: ", n1*n2)
    elif option == 4:
        n1 = float(input("insert one number: "))
        n2 = float(input("insert second number: "))
    elif option == 5:
        break
    else:
        print("Incorrect!! ")
