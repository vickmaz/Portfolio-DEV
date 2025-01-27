camelcase = input("CamelCase: ").strip()
result = ""

for letter in camelcase:
    uppercase = letter.isupper()
    lower = letter.islower()

    if uppercase:
         uppercase = letter.capitalize()
         lowercase = "_" + uppercase.lower()
         result += lowercase

    if lower:
       lower = letter.lower()
       result += lower

print (result)




