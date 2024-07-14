from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect

from .models import ServiceType, ServiceElement


@csrf_protect
def index(request):
    if request.method == "GET":
        services = dict()
        for i in ServiceType.objects.all():
            services[i.name] = []
            for j in ServiceElement.objects.filter(serviceType=i):
                d = dict()
                d.update({'name': j.name})
                d.update({'price': j.price})
                services[i.name].append(d)
        return render(request, "main/main.html", context={'services': services,
                                                          'FBO_main': ServiceElement.objects.get(
                                                              name="Обработка товара по системе FBО (габариты не более 10*10*10 см)(вес до 500 гр) + доставка до склада маркетплейса").price,
                                                              'FBS_main': ServiceElement.objects.get(
                                                              name="Обработка товара по системе FBS (габариты не более 10*10*10 см)(вес до 500гр)  + доставка до ПВЗ маркетплейса").price, })
    elif request.method == "POST":
        print(request.POST)
        return HttpResponse("Successfully")
