// let current_periodo = 1;
// let current_disciplina = 1;

const start_periodo = $('#mainContainer').html();
const start_disciplina = $('#disciplinaContainer-1').html()

let info_array;

// Função que atualiza o array contendo as informações de cada período
function infoArrayUpdate(){
    info_array = []
    $('.periodo').each(function(){
        info_array.push($(this).children().slice(1, -1));
    })
}

function disciplinaIdUpdate(periodo){
    children = $('#disciplinaContainer-' + periodo).children()
    
    $.each(children, function(index){
        group = children.eq(index);
        index++;
        group.attr('id', 'group' + periodo + '-' + index);
        group.children().eq(0).attr('name', 'nome' + periodo + '-' + index);
        group.children().eq(1).attr('name', 'tipo' + periodo + '-' + index);
        group.children().eq(2).attr('name', 'categoria' + periodo + '-' + index);
        group.children().eq(3).attr('name', 'carga-horaria' + periodo + '-' + index);
        group.children().eq(4).replaceWith($('#group1-1').children().last().clone(true));
        group.children().eq(4).attr('id', 'delete' + periodo + '-' + index);
    })
}

function tableUpdate(){
    periodoContainers = $('#mainContainer').children()
    
    $.each(periodoContainers, function(index){
        current_periodo = periodoContainers.eq(index)
        header = current_periodo.children().eq(0).children().eq(0)
        disciplinaContainer = current_periodo.children().eq(0).children().eq(1)
        footer = current_periodo.children().eq(0).children().eq(2)

        title = header.children().eq(0)
        disciplinaRemoveBtn = header.children().eq(1)
        disciplinaAddBtn = footer.children().eq(0)
        periodoAddBtn = footer.children().eq(1)
        
        current_periodo.attr('id', 'periodoContainer-' + String(index + 1))
        header.attr('id', 'header' + String(index + 1))
        disciplinaContainer.attr('id', 'disciplinaContainer-' + String(index + 1))
        footer.attr('id', 'footer' + String(index + 1))
        title.text(String(index + 1) + 'º Período')
        disciplinaRemoveBtn.attr('id', 'disciplinaRemove' + '-' + String(index + 1))
        disciplinaAddBtn.attr('id', 'disciplinaAdd' + '-' + String(index + 1))
        periodoAddBtn.attr('id', 'periodoAdd' + '-' + String(index + 1))

        disciplinaIdUpdate(index + 1);
    })
}

// Armazenamento do array inicial
$(document).ready(function(){
    infoArrayUpdate();
})

// Função triggada ao clicar num botão de Adicionar Disciplina
$('.disciplinaAdd').click(function(){
    periodo = $(this).attr('id').split('-')[1];
    
    $('#disciplinaContainer-' + periodo).append(start_disciplina);

    disciplina = $(this).parent().prev().children().length;
    
    disciplinaIdUpdate(periodo);

    if($('#disciplinaContainer-' + String(periodo)).children().length == 2){
        $('#delete' + String(periodo) + '-' + String(disciplina - 1)).removeClass('disabled');
        $('#delete' + String(periodo) + '-' + String(disciplina)).removeClass('disabled');
    }else{
        $('#delete' + String(periodo) + '-' + String(disciplina)).removeClass('disabled');
    }

    infoArrayUpdate();
})

// Função triggada ao clicar num botão de Adicionar Período
$('.periodoAdd').click(function(){
    periodo = Number($(this).attr('id').split('-')[1])
    disciplina = 1;

    $('#periodoContainer-' + String(periodo)).after(start_periodo);
    periodo++;

    if(periodo == 2){
        $('#periodoRemove-1').removeClass('disabled');
    }

    //Não consegui entender o que está rolando aqui.....
    //Os botões perdem os poderes apenas quando adiciono o primeiro período
    console.log('#disciplinaAdd-' + String(periodo))
    $('#disciplinaAdd-' + String(periodo)).replaceWith($('#disciplinaAdd-1').clone(true));
    $('#periodoAdd-' + String(periodo)).replaceWith($('#periodoAdd-1').clone(true));
    $('#periodoRemove-' + String(periodo)).replaceWith($('.periodoRemove').clone(true));
    
    tableUpdate();
    infoArrayUpdate();
})

$('.periodoRemove').click(function(){
    $(this).parent().parent().parent().remove();
    
    tableUpdate();
    infoArrayUpdate();
})

$('.delete').click(function(){
    periodo = $(this).parent().parent().attr('id').split('-')[1];
    
    $(this).parent().remove();
    
    disciplina = Number($('#disciplinaContainer-' + String(periodo)).children().length);
    
    disciplinaIdUpdate(periodo)

    if(disciplina == 1){
        $('#delete' + periodo + '-1').addClass('disabled')
    }
    infoArrayUpdate();
})