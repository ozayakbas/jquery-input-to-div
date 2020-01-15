$(document).on('click', '.btn', function(){

  $('input').each(function(index){
    let $this = $(this);
    let _inputValue = $this.val();
    let _valid = $('.valid');

    if(_inputValue.length == 0 ){
      _valid.eq(index).text('Lütfen bir değer giriniz')
    }else if(_inputValue.length <= 2){
      _valid.eq(index).text('Girdiğiniz değer 3 karakterden az')
    }else if(_inputValue.length > 10){
      _valid.eq(index).text('Girdiğiniz değer 10 karakterden fazla')
    }else{
      $('.value').eq(index).text(_inputValue);
      _valid.eq(index).text('');
    };
  })
});
