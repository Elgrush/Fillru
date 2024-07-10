from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    if request.method == "GET":
        return render(request, "main/main.html")
    elif request.method == "POST":
        print(request.POST)
        return HttpResponse("Successfully")
