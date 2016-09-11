from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import time
import pyaudio
import speech_recognition as sr

class makeBrowser(object):

    def __init__(self, x):
        self.current_url = x

def speechClick(driver, text):
    try:
        driver.find_element_by_id(text).click()
    except:
        print("invalid id")


def run():
    #initializations
    infoExists = False
    websiteURL = "http://google.com" # local address
    driver = webdriver.Chrome()
    driver.get(websiteURL)
    sr.Microphone(device_index=None, sample_rate=16000, chunk_size=1024)
    r = sr.Recognizer()    
    while True:
        with sr.Microphone() as source:
            print("Say something!")
            audio = r.listen(source)
        text = None
        try:
            text=r.recognize_google(audio)
            print("Google Speech Recognition thinks you said " + text)
            if(text=="quit" or text=="exit"):
                driver.close()
                break
            speechClick(driver,text)
        except sr.UnknownValueError:
            print("Google Speech Recognition could not understand audio")
        except sr.RequestError as e:
            print(
                "Could not request results from Google Speech Recognition service; {0}".format(e))

run()
