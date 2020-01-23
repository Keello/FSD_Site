$(function() {
  var i=1;
  var size = ($('.pagination').children().length)-2;

  $('.pagination__item-prev').click(function(){
      atr = '[data-page=' + i + ']';
      $('[data-page='+i+']').removeClass('pagination__item_active');
      i--;
      $('[data-page='+i+']').addClass('pagination__item_active');
      if(i<size){
        //$('.pagination__item-next').css("visibility", "visible");
        $('.pagination__item-next').css("display", "flex");
      }
      if(i==1){
        //$('.pagination__item-prev').css("visibility", "hidden");
        $('.pagination__item-prev').hide();
      }
  });

  $('.pagination__item-next').click(function(){
    atr = '[data-page=' + i + ']';
    $('[data-page='+i+']').removeClass('pagination__item_active');
    i++;
    $('[data-page='+i+']').addClass('pagination__item_active');

    if(i>1)
      //$('.pagination__item-prev').css("visibility", "visible");
      $('.pagination__item-prev').css("display", "flex");
    if(i==size){
      //$('.pagination__item-next').css("visibility", "hidden");
      $('.pagination__item-next').hide();
    }
  });
});

