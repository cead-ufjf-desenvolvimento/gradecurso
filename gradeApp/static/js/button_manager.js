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

// Armazenamento do array inicial
$(document).ready(function(){
    infoArrayUpdate();
})

// Função triggada ao clicar num botão de Adicionar Disciplina
$('.disciplinaAdd').click(function(){
    $(this).prev().append(start_disciplina);

    periodo = Number($(this).prev().attr('id').split('-')[1]);
    disciplina = $(this).prev().children().length;

    new_items = $('#disciplinaContainer-' + periodo).children().last();
    new_items.attr('id', 'group' + periodo + '-' + disciplina);
    new_items.children().eq(0).attr('name', 'nome' + periodo + '-' + disciplina);
    new_items.children().eq(1).attr('name', 'tipo' + periodo + '-' + disciplina);
    new_items.children().eq(2).attr('name', 'categoria' + periodo + '-' + disciplina);
    new_items.children().eq(3).attr('name', 'carga-horaria' + periodo + '-' + disciplina);
    new_items.children().eq(4).replaceWith($('#group1-1').children().last().clone(true));
    new_items.children().eq(4).attr('id', 'delete' + periodo + '-' + disciplina);

    if($('#disciplinaContainer-' + String(periodo)).children().length == 2){
        $('#delete' + String(periodo) + '-' + String(disciplina - 1)).removeClass('disabled');
        $('#delete' + String(periodo) + '-' + String(disciplina)).removeClass('disabled');
    }else{
        $('#delete' + String(periodo) + '-' + String(disciplina)).removeClass('disabled');
    }

    infoArrayUpdate();
})

// Função triggada ao clicar num botão de Adicionar Período
$('#periodoAdd').click(function(){
    periodo = info_array.length + 1;
    disciplina = 1;

    $('#mainContainer').append(start_periodo);
    
    periodo_container = $('#mainContainer').children().last();
    periodo_container.attr('id', 'periodoContainer-' + String(periodo));
    
    periodo_container.children().children().children().eq(0).text(periodo + 'º Período');
    periodo_container.children().children().eq(1).attr('id', 'disciplinaContainer-' + periodo);
    
    new_items = $('#disciplinaContainer-' + periodo).children().last();
    new_items.attr('id', 'group' + periodo + '-' + disciplina);
    new_items.children().eq(0).attr('name', 'nome' + periodo + '-' + disciplina);
    new_items.children().eq(1).attr('name', 'tipo' + periodo + '-' + disciplina);
    new_items.children().eq(2).attr('name', 'categoria' + periodo + '-' + disciplina);
    new_items.children().eq(3).attr('name', 'carga-horaria' + periodo + '-' + disciplina);
    new_items.children().eq(4).replaceWith($('#group1-1').children().last().clone(true));
    new_items.children().eq(4).attr('id', 'delete' + periodo + '-' + disciplina);
    
    $('.disciplinaAdd').last().replaceWith($('.disciplinaAdd').first().clone(true));
    $('.periodoRemove').last().replaceWith($('.periodoRemove').first().clone(true));
    infoArrayUpdate();
})

// $('.periodoRemove').click(function(){
//     $(this).parent().parent().parent().remove();

//     periodo = info_array.length
// })

$('.delete').click(function(){
    periodo = $(this).parent().parent().attr('id').split('-')[1];
    
    $(this).parent().remove();
    
    disciplina = Number($('#disciplinaContainer-' + String(periodo)).children().length);

    
    children = $('#disciplinaContainer-' + periodo).children()
    
    $.each(children, function(index){
        group = children.eq(index);
        index++;
        group.attr('id', 'group' + periodo + '-' + index);
        group.children().eq(0).attr('name', 'nome' + periodo + '-' + index);
        group.children().eq(1).attr('name', 'tipo' + periodo + '-' + index);
        group.children().eq(2).attr('name', 'categoria' + periodo + '-' + index);
        group.children().eq(3).attr('name', 'carga-horaria' + periodo + '-' + index);
        group.children().eq(4).attr('id', 'delete' + periodo + '-' + index);
    })
    
    if(disciplina == 1){
        $('#delete' + periodo + '-1').addClass('disabled')
    }
    infoArrayUpdate();
})