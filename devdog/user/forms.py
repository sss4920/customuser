from django import forms
from .models import CustomUser


class LoginForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['username','password']


class UserForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['username','student_id','password']