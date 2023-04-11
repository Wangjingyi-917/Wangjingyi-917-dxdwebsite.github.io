$(function(){
    $('#navfold').mouseover(function(){
        $(this).children('ul').show();
    });
    $('#navfold').mouseout(function(){
        $(this).children('ul').hide();
    });




   $('.block').smoove({
    offset: '40%'
});

})


