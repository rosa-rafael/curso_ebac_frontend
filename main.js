$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $(`<li><p>${novaTarefa}</p></li>`);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#nova-tarefa').val('');
    })


    $('li').each(function(i){
        $(this).click(function(){
            $(this).toggleClass('stroked');
        })
    })
})