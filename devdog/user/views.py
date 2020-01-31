from django.shortcuts import render,redirect
from .forms import UserForm,LoginForm
from .models import CustomUser
from django.contrib.auth import login,authenticate
from django.http import HttpResponse

def signup(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            new_user = CustomUser.objects.create_user(username=form.cleaned_data["username"],password=form.cleaned_data["password"],student_id=form.cleaned_data["student_id"])
            login(request, new_user)
            return redirect('../../')
    else:
        form = UserForm()
        return render(request, 'user/sign_up.html', {'form':form})

# Create your views here.
def signin(request):
    if request.method == "POST":
        form = LoginForm (request.POST)
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username= username, password= password)

        if user is not None:
            login(request,user)
            return redirect('../../')
        else:
            return HttpResponse('로그인 실패 다시 시도해보세요.')
    else:
        form = LoginForm()
        return render(request, 'user/sign_in.html',{'form':form})

