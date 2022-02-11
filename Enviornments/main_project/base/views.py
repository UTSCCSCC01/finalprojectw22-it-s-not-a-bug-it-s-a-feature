from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.template.response import TemplateResponse
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def hello(request, name):
    print(request.method, request.GET)
    return HttpResponse(f"Hey {name}, how you doing!!!?")

def loginPage(request):
    page = 'login'
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'User does not exist')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Username OR password does not exist')
    context = {'page':page}
    return render(request, 'base/login_register.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login')

def home(request):
    return render(request, 'base/home.html')

def signup(request):
    page = 'signup'
    if request.method == "GET":
        return TemplateResponse(request, 'base/signup.html')
    else:
        error = ''
        if not request.POST['username']:
            error = "Username is required"
        if not request.POST['password']:
            error = "Password is required"
        if request.POST['password'] != request.POST['password2']:
            error = "Passwords do not match"

        if error:
            return TemplateResponse(request, 'base/signup.html', context={'error': error})

        return HttpResponseRedirect(reverse('base:hello', args=[request.POST['username']]))
    context = {'page':page}