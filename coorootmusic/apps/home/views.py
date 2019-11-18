from django.shortcuts import render
from .models import About
# Create your views here.
def home(request):
    return render(request, 'home/home.html')

   