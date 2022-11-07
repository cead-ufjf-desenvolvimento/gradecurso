from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

def assistente(request):
    if request.method == 'GET':
        return render(request, 'assistente.html')
    if request.method == 'POST':
        output = dict(request.POST.items())
        keys = list(output.keys())
        values = list(output.values())

        context = {
            'nome_curso': values[1],
            'disciplina_list': []
        }

        for i in range(2, len(output), 4):
            context['disciplina_list'].append(
                {
                    'periodo': int(keys[i].replace('nome','').split('-')[0]),
                    'nome': values[i],
                    'tipo': values[i+1],
                    'categoria': values[i+2],
                    'carga_horaria': values[i+3]        
                }
            )
        return render(request, 'output.html', context)