from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

from .AIHelper.summary import summarize_method

def index(request):
    return HttpResponse('First Endpoint')


def summarizeIncidents(request):
    if request.method == 'GET':
        Incidents = 'Incidents'
        output = summarize_method(Incidents)
        return HttpResponse(output)
    else:
        return HttpResponse('Request is not GET')


def summarizeViews(request):
    if request.method == 'GET':
        Views = 'Views'
        output = summarize_method(Views)
        return HttpResponse(output)
    else:
        return HttpResponse('Request is not GET')


