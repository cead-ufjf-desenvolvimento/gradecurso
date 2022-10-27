from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def assistente(request):
    if(request.method == 'GET'):
        return render(request, 'assistente.html')
    if(request.method == 'POST'):
        print(dict(request.POST.items()))
        return render(request, 'index.html')