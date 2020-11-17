# import the following libraries
# will convert the image to text string
import pytesseract
import requests
# adds image processing capabilities
import PIL
from PIL import Image
import io
pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

# url=input("Enter the url")
# response = requests.get(url)
# image_bytes = io.BytesIO(response.content)
# img = PIL.Image.open(image_bytes)
#
# pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'
#
# result = pytesseract.image_to_string(img)
# print(result)
# file = open("msft.txt", "w+")
# file.write(result)
# file.write("\n")
# file.close


def generate_text(image_bytes):
    result = pytesseract.image_to_string(image_bytes)
    return result

