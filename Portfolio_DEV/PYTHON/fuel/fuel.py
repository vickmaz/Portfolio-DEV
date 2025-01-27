while True:
    try:
        fraction = input("Fraction: ").split("/")

        numerator = int(fraction[0])
        denominator = int(fraction[1])

        if denominator == 0 or numerator > denominator:
            continue

        product = numerator / denominator
        percentage = round(product * 100)

    except (ValueError, ZeroDivisionError, NameError):
        pass
        continue

    if percentage >= 99:
        print("F")
        break
    elif percentage <= 1:
        print("E")
        break
    
    else:
        print(f"{percentage}%")
        break
