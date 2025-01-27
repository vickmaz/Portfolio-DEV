def convert():
  sentence = input("type your sentence with emoticons here: ")
  print(sentence.replace(":)", "🙂").replace(":(", "🙁"))


def main():
  convert()
  

main()

