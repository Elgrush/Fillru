from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect


@csrf_protect
def index(request):
    if request.method == "GET":
        return render(request, "main/main.html")
    elif request.method == "POST":
        print(request.POST)
        return HttpResponse("Successfully")
