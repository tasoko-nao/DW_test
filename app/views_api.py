from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def saveImageClass(request):
    print("ok")
    return JsonResponse({'result': 'OK'})