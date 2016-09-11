import time  # Import time library
import requests
import pyaudio
import speech_recognition as sr


def run():
    # print(sr.get_device_count())
    sr.Microphone(device_index=None, sample_rate=16000, chunk_size=1024)
    # print("down\n")
    # sr.Microphone.list_microphone_names()
    # print("\nup")
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print("Say something!")
        audio = r.listen(source)

        # for testing purposes, we're just using the default API key
        # to use another API key, use `r.recognize_google(audio, key="GOOGLE_SPEECH_RECOGNITION_API_KEY")`
        # instead of `r.recognize_google(audio)`
    try:
        text=r.recognize_google(audio)
        print("Google Speech Recognition thinks you said " + text)
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio")
    except sr.RequestError as e:
        print(
            "Could not request results from Google Speech Recognition service; {0}".format(e))
    # return text
    r = requests.post('http://172.20.10.8:3000/hi', {'': text})
run()
