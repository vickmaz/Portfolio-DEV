coke = 50
change = 0

while True:
    coins = int(input("Insert Coin: "))

    if coins != 5 and coins != 10 and coins != 25:
        print("Amount Due: 50")
    else:
        change += coins
        print(f"Amount Due: {coke - change}")

    if change >= coke:
        change -= coke
        print(f"Change Owed: {change}")

        break
















