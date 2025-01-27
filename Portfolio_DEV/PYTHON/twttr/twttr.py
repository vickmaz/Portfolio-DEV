sentence = input("Input: ")
result = ""
vocals = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

for letter in sentence:
    if letter not in vocals:
        result += letter

print(result)



