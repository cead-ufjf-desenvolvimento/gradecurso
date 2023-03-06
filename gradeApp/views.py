import pandas, imgkit
from django.shortcuts import render, redirect
from django.conf import settings

# Create your views here.
def index(request):
    return render(request, 'index.html')

def assistente(request):
    if request.method == 'POST' and request.POST.get('baixar'):
        imgkit.from_string(request.POST.get('baixar'), 'outputs/output.jpg', css=str(settings.STATIC_ROOT) + '/css/table.css')
        return redirect('download')
    
    elif request.method == 'POST':
        output = dict(request.POST.items())
        keys = list(output.keys())
        values = list(output.values())

        context = {
            'nome_curso': values[1],
            'disciplina_list': []
        }

        for i in range(2, len(output), 5):
            context['disciplina_list'].append(
                {
                    'periodo': int(keys[i].replace('nome','').split('-')[0]),
                    'nome': values[i],
                    'tipo': values[i+1],
                    'categoria': values[i+2],
                    'carga_horaria': values[i+3],
                    'pre_requisito': values[i+4]
                }
            )
        return render(request, 'output.html', context)
        
    return render(request, 'assistente.html')

def arquivo(request):
    if request.method == "POST" and request.POST.get('baixar'):
        imgkit.from_string(request.POST.get('baixar'), 'outputs/output.jpg', css=str(settings.STATIC_ROOT) + '/css/table.css')
        return redirect('download')

    elif request.method == "POST":
        nome_curso_dict = pandas.read_excel(request.FILES['carga'], header=0)
        grade_dict = pandas.read_excel(request.FILES['carga'], header=2)

        context = {
            'nome_curso': nome_curso_dict['Nome do Curso'][0],
            'disciplina_list': []
        }

        for i in range(len(grade_dict)):
            context['disciplina_list'].append(
                {
                    'periodo': grade_dict['Período'][i],
                    'nome': grade_dict['Nome'][i],
                    'tipo': grade_dict['Tipo'][i],
                    'categoria': grade_dict['Categoria'][i],
                    'carga_horaria': grade_dict['Carga-horária'][i],
                    'pre_requisito': grade_dict['Pré-requisito'][i]       
                }
            )
        return render(request, 'output.html', context)
    
    return render(request, 'arquivo.html')

def download(request):
    return render(request, 'download.html')