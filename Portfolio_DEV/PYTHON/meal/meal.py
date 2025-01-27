def main():
    time = input("What time is it? ")
    time_float = convert(time)
    if 7.0 <= time_float <= 8.0:
        print("breakfast time ")
    elif 12.0 <= time_float <= 13.0:
        print("lunch time ")
    elif 18.0 <= time_float <= 19.0:
        print("dinner time ")
    else:
        return False


def convert(time):
    hours, minutes = time.split(":")
    hours = float(hours)
    minutes = float(minutes)
    time_float = hours + minutes / 60
    return time_float


if __name__ == "__main__":
    main()


