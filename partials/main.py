from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import time

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
    while True:
        r = requests.get("http://google.com/")
        text=r.content
        print(r.content)
        if(text=="quit" or text=="exit"):
            driver.close()
        speechClick(driver,text)
        time.sleep(2)

run()
    # currStore = None
    # path = '//div[contains(@class, "store-name")]'
    # for i in range(4):
    #     try:
    #         run_test = WebDriverWait(driver, 120).until(
    #             EC.presence_of_element_located((By.XPATH, path)))
    #         run_test.click()
    #         break
    #     except:
    #         pass
    # elements = driver.find_elements_by_xpath(path)
