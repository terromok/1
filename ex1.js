
(function($) {
  $(function() {
    document.getElementById("one").value=0.1;
    document.getElementById("two").value=0.2;
    $('.form').on('click', '.button', function() {
      oneNumber=Number(document.getElementById("one").value);
      twoNumber=Number(document.getElementById("two").value);
      rezult=oneNumber+twoNumber;
      var $p = $('<p />', {
        text: `${rezult}`,
        class: 'rezult' 
      });
      $('.rezult').empty();
      $('.otvet').append($p);
      $('.otvet').css('display','block')
    });
    $('.otvet').on('click', '.ok', function() {
      $('.otvet').css('display','none')
    });    
  });
})(jQuery);