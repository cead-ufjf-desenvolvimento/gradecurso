// let current_periodo = 1;
// let current_disciplina = 1;

const start_periodo = $('#mainContainer').html();
const start_disciplina = $('#disciplinaContainer-1').html()

let info_array

// Função que atualiza o array contendo as informações de cada período
function infoArrayUpdate(){
    info_array = []
    $('.periodo').each(function(){
        info_array.push($(this).children().slice(1, -1))
    })
}

// Armazenamento do array inicial
$(document).ready(function(){
    infoArrayUpdate();
})

// Função triggada ao clicar num botão de Adicionar Disciplina
$('.disciplinaAdd').click(function(){
    $(this).prev().append(start_disciplina);

    periodo = $(this).prev().attr('id').split('-')[1]
    disciplina = $(this).prev().children().length

    new_items = $('#disciplinaContainer-' + periodo).children().last()
    new_items.attr('id', 'group' + periodo + '-' + disciplina)
    new_items.children().eq(0).attr('name', 'nome' + periodo + '-' + disciplina)
    new_items.children().eq(1).attr('name', 'tipo' + periodo + '-' + disciplina)
    new_items.children().eq(2).attr('name', 'categoria' + periodo + '-' + disciplina)
    new_items.children().eq(3).attr('name', 'carga-horaria' + periodo + '-' + disciplina)

    infoArrayUpdate();
})

// Função triggada ao clicar num botão de Adicionar Período
$('#periodoAdd').click(function(){
    periodo = info_array.length + 1
    disciplina = 1

    $('#mainContainer').append(start_periodo)
    periodo_container = $('#mainContainer').children().last()
    periodo_container.attr('id', 'periodoContainer-' + String(periodo))

    periodo_container.children().children().eq(0).text(periodo + 'º Período')
    periodo_container.children().children().eq(1).attr('id', 'disciplinaContainer-' + periodo)

    new_items = $('#disciplinaContainer-' + periodo).children().last()
    new_items.attr('id', 'group' + periodo + '-' + disciplina)
    new_items.children().eq(0).attr('name', 'nome' + periodo + '-' + disciplina)
    new_items.children().eq(1).attr('name', 'tipo' + periodo + '-' + disciplina)
    new_items.children().eq(2).attr('name', 'categoria' + periodo + '-' + disciplina)
    new_items.children().eq(3).attr('name', 'carga-horaria' + periodo + '-' + disciplina)

    infoArrayUpdate();
})










// $('#disciplinaAdd').click(function(){
//     current_disciplina++;
//     //Armazena o elemento do período atual
//     periodo = $('.periodo:nth-child(' + current_periodo + ')');
    
//     // Verifica se o período possui somente o h2 e a div
//     if(periodo.children().length == 2){
//         $('#disciplinaRemove').removeClass('disabled');
//     }
//     //Armazena o formulário da primeira disciplina do periodo
//     disciplina = periodo.children().eq(1);
    
//     periodo.append(start_disciplina);

//     div = periodo.children().last();
    
//     nome = div.children().eq(0);
//     tipo = div.children().eq(1);
//     categoria = div.children().eq(2);
//     carga_horaria = div.children().eq(3);
    
//     nome.attr('name', 'nome'+ current_periodo + '-' + current_disciplina);
//     tipo.attr('name', 'tipo'+ current_periodo + '-' + current_disciplina);
//     categoria.attr('name', 'categoria'+ current_periodo + '-' + current_disciplina);
//     carga_horaria.attr('name', 'carga-horaria'+ current_periodo + '-' + current_disciplina);

// })

// $('#disciplinaRemove').click(function(){
//     current_disciplina--;
//     //Armazena o elemento do período atual
//     periodo = $('.periodo:nth-child(' + current_periodo + ')');

//     if(periodo.children().length == 3){
//         $('#disciplinaRemove').addClass('disabled');
//     }

//     //Armazena o formulário da última disciplina do periodo
//     disciplina = periodo.children().last();

//     disciplina.remove();
// })

// $('#periodoAdd').click(function(){
//     if(current_periodo == 1){
//         $('#periodoRemove').removeClass('disabled');
//     }

//     current_periodo++;
//     current_disciplina = 1;

//     $('#container').append(start_periodo);
//     h2 = $('#container').children().last().children().first();
//     h2.text(String(current_periodo) + 'º Período');
    
//     $('#disciplinaRemove').addClass('disabled');
// ;
//     periodo = $('.periodo:nth-child(' + current_periodo + ')');
    
//     div = periodo.children().last();
    
//     nome = div.children().eq(0);
//     tipo = div.children().eq(1);
//     categoria = div.children().eq(2);
//     carga_horaria = div.children().eq(3);
    
//     nome.attr('name', 'nome' + current_periodo + '-' + current_disciplina);
//     tipo.attr('name', 'tipo' + current_periodo + '-' + current_disciplina);
//     categoria.attr('name', 'categoria' + current_periodo + '-' + current_disciplina);
//     carga_horaria.attr('name', 'carga-horaria'+ current_periodo + '-' + current_disciplina);
// })

// $('#periodoRemove').click(function(){
//     if($('#container').children().length == 2){
//         $('#periodoRemove').addClass('disabled')
//     }
    
//     current_periodo--;
    
//     periodo = $('.periodo:nth-child(' + current_periodo + ')');
    
//     if(periodo.children().length == 2){
//         $('#disciplinaRemove').addClass('disabled');
//     }else{
//         $('#disciplinaRemove').removeClass('disabled');
//     }
    
//     current_disciplina = periodo.children().length - 1;
//     console.log(current_disciplina);

//     $('#container').children().last().remove();
// })

// $('.delete').click(function(){
//     $('.delete').parent().remove()
// })