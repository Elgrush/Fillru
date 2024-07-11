import base64
import requests
import json

from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect


def sync_data_with_my_storeroom():
    """
    Synchronises database with my storeroom
    :return: None
    """
    with open(".myStoreRoom.conf", 'r') as f:
        login, password = f.readline().split(':')
    access_token = f"Basic: {base64.b64encode(f'{login}:{password}'.encode('ascii')).decode('ascii')}"
    response = requests.get(url="https://api.moysklad.ru/api/remap/1.2/entity/service",
                            headers={"Authorization": access_token, "Accept-Encoding": "gzip"})

    raw_data = [(i["name"], i["pathName"], 0) for i in response.json()["rows"]]
    data = []
    ordered_services = []
    unordered_services = set()

    for i in raw_data:
        if "Фулфилмент (услуги склада)" in i[1]:
            service = i[1].split(
                "Фулфилмент (услуги склада)/"
            )[1].replace('/', ' ')

            try:
                left, right = service.split('. ')
                left = int(left)
                while len(ordered_services) < left:
                    ordered_services.append("None")
                ordered_services[left - 1] = right
            except ValueError:
                unordered_services.add(service)

            data.append((i[0], service, i[2]))

    print(ordered_services, unordered_services)

    with open('data.json', 'w') as f:
        json.dump(data, f)


@csrf_protect
def index(request):
    if request.method == "GET":
        return render(request, "main/main.html")
    elif request.method == "POST":
        sync_data_with_my_storeroom()  #TODO ВЫПЫЛИТЬ
        print(request.POST)
        return HttpResponse("Successfully")
