from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Bord


def home(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render())

def bord(request):
    bordlist = Bord.objects.all().values()
    template = loader.get_template('bord_list.html')
    context = { 'bordlist': bordlist}
    rendered_template = template.render(context,request)
    return HttpResponse(rendered_template)

def view(request):
    bordlist = Bord.objects.all().values()
    template = loader.get_template('bord_view.html')
    context = { 'bordlist': bordlist}
    rendered_template = template.render(context,request)
    return HttpResponse(rendered_template)


def write(request):
    template = loader.get_template('bord_write.html')
    return HttpResponse(template.render())



     


