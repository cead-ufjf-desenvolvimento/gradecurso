const start_periodo = $('#mainContainer').html();
const start_disciplina = $('#disciplinaContainer-1').html()

//Percorre o conjunto de disciplinas de um dado Período, atualizando as numerações das mesmas
function disciplinaIdUpdate(periodo){
    //Armazena todos os grupos de dados de cada disciplina de um dado período
    groups = $('#disciplinaContainer-' + periodo).children()
    
    $.each(groups, function(index){
        group = groups.eq(index);
        index++;
        group.attr('id', 'group' + periodo + '-' + index);
        group.children().eq(0).attr('name', 'nome' + periodo + '-' + index);
        group.children().eq(1).attr('name', 'tipo' + periodo + '-' + index);
        group.children().eq(2).attr('name', 'categoria' + periodo + '-' + index);
        group.children().eq(3).attr('name', 'carga-horaria' + periodo + '-' + index);
        group.children().eq(4).attr('name', 'pre-requisito' + periodo + '-' + index);
        group.children().eq(5).attr('id', 'delete' + periodo + '-' + index);
    })
}

//Faz com que os botões de um dado Período sejam mostrados
function showButtons(periodo){
    $('#disciplinaAdd-' + String(periodo)).show()
    $('#periodoAdd-' + String(periodo)).show()
    $('#periodoRemove-' + String(periodo)).show()
    $('#delete' + String(periodo) + '-1').show()
    $('#up-' + String(periodo)).show()
    $('#down-' + String(periodo)).show()
}

//Atualiza a numeração de toda a tabela
function tableUpdate(){
    periodoContainers = $('#mainContainer').children()
    
    $.each(periodoContainers, function(index){
        current_periodo = periodoContainers.eq(index)
        header = current_periodo.children().eq(0).children().eq(0)
        disciplinaContainer = current_periodo.children().eq(0).children().eq(1)
        footer = current_periodo.children().eq(0).children().eq(2)

        title = header.children().eq(0)
        periodoRemoveBtn = header.children().eq(1)
        disciplinaAddBtn = footer.children().eq(0)
        periodoAddBtn = footer.children().eq(1)

        arrowContainer = current_periodo.children().eq(1)
        up = arrowContainer.children().first()
        down = arrowContainer.children().last()
        
        current_periodo.attr('id', 'periodoContainer-' + String(index + 1))
        header.attr('id', 'header' + String(index + 1))
        disciplinaContainer.attr('id', 'disciplinaContainer-' + String(index + 1))
        footer.attr('id', 'footer' + String(index + 1))
        title.text(String(index + 1) + 'º Período')
        periodoRemoveBtn.attr('id', 'periodoRemove' + '-' + String(index + 1))
        disciplinaAddBtn.attr('id', 'disciplinaAdd' + '-' + String(index + 1))
        periodoAddBtn.attr('id', 'periodoAdd' + '-' + String(index + 1))
        arrowContainer.attr('id', 'arrowContainer-' + String(index + 1))
        up.attr('id', 'up-' + String(index + 1))
        down.attr('id', 'down-' + String(index + 1))

        disciplinaIdUpdate(index + 1);

        if(periodoContainers.length > 1){
            $('.up').removeClass('disabled');
            $('.down').removeClass('disabled');
            $('.periodoRemove').removeClass('disabled');
            $('.up').first().addClass('disabled');
            $('.down').eq(-2).addClass('disabled');
        }else{
            $('.up').addClass('disabled');
            $('.down').addClass('disabled');
            $('.periodoRemove').addClass('disabled');
        }
    })
}

// Função triggada ao clicar num botão de Adicionar Disciplina
$('.disciplinaAdd').click(function(){
    periodo = $(this).attr('id').split('-')[1];
    
    $('#disciplinaContainer-' + periodo).append(start_disciplina);
    $('#disciplinaContainer-' + periodo).children().last().children().last().replaceWith($('#delete0-0').clone(true))
    $('#disciplinaContainer-' + periodo).children().last().children().last().show()

    

    disciplinaIdUpdate(periodo);

    if($('#disciplinaContainer-' + String(periodo)).children().length >= 2){
        $('#disciplinaContainer-' + String(periodo)).children().children('.delete').removeClass('disabled')
    }
})

// Função triggada ao clicar num botão de Adicionar Período
$('.periodoAdd').click(function(){
    periodo = Number($(this).attr('id').split('-')[1])
    disciplina = 1;

    $('#periodoContainer-' + String(periodo)).after(start_periodo);
    periodo++;
    
    tableUpdate();

    $('#disciplinaAdd-' + String(periodo)).replaceWith($('#disciplinaAdd-0').clone(true));
    $('#periodoAdd-' + String(periodo)).replaceWith($('#periodoAdd-0').clone(true));
    $('#periodoRemove-' + String(periodo)).replaceWith($('#periodoRemove-0').clone(true));
    $('#delete' + String(periodo) + '-1').replaceWith($('#delete0-0').clone(true));
    $('#up-' + String(periodo)).replaceWith($('#up-0').clone(true));
    $('#down-' + String(periodo)).replaceWith($('#down-0').clone(true));

    tableUpdate();
    showButtons(periodo);
    
    $('#delete' + String(periodo) + '-' + String(disciplina)).addClass('disabled');
})

$('.periodoRemove').click(function(){
    $(this).parent().parent().parent().remove();
    
    tableUpdate();
})

$('.delete').click(function(){
    periodo = $(this).parent().parent().attr('id').split('-')[1];
    
    $(this).parent().remove();
    
    disciplina = Number($('#disciplinaContainer-' + String(periodo)).children().length);
    
    disciplinaIdUpdate(periodo)

    if(disciplina == 1){
        $('#delete' + periodo + '-1').addClass('disabled')
    }
})

$('.up').click(function(){
    periodo = Number($(this).attr('id').split('-')[1]);

    before = $('#periodoContainer-' + String(periodo - 1)).children().eq(0).children().eq(1);
    current = $('#periodoContainer-' + String(periodo)).children().eq(0).children().eq(1);

    before.replaceWith(current.clone(true));
    current.replaceWith(before);

    tableUpdate();
})

$('.down').click(function(){
    periodo = Number($(this).attr('id').split('-')[1]);

    after = $('#periodoContainer-' + String(periodo + 1)).children().eq(0).children().eq(1);
    current = $('#periodoContainer-' + String(periodo)).children().eq(0).children().eq(1);

    after.replaceWith(current.clone(true));
    current.replaceWith(after);

    tableUpdate();
})