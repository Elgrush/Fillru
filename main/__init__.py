import base64
import requests


def sync_data_with_my_storeroom():
    from .models import ServiceType, ServiceElement, reset_id
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
                service = right
                left = int(left)
                while len(ordered_services) < left:
                    ordered_services.append("None")
                ordered_services[left - 1] = right
            except ValueError:
                unordered_services.add(service)

            data.append((i[0], service, i[2]))

    services = dict()

    ServiceType.objects.all().delete()
    reset_id()

    for i in range(len(ordered_services)):
        services[ordered_services[i]] = ServiceType.objects.create(id=i, name=ordered_services[i])

    unordered_services = list(unordered_services)
    for i in range(len(unordered_services)):
        services[unordered_services[i]] = ServiceType.objects.create(id=i+len(ordered_services), name=unordered_services[i])

    for i in data:
        ServiceElement.objects.create(
            serviceType=services[i[1]],
            name=i[0],
            price=i[2]
        )