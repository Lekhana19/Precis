import requests

r=requests.post('http://127.0.0.1:5000/url',json={'image':'https://miro.medium.com/max/3348/1*okJsgoJDXQD5Nvyu-waDIw.png'})


if r.ok:
    print (r.json())