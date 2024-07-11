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
        return render(request, "main/main.html", context={'services': services})
    elif request.method == "POST":
        print(request.POST)
        return HttpResponse("Successfully")
