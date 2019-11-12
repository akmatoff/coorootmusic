from django.shortcuts import render

def index(request):
    return render(request, 'releases/index.html')

def home(request):
    return render(request, 'home/home.html')