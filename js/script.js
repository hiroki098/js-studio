$(function(){

//TOPへ戻るスムーススクロール
$('.top-btn').click(function(){
  $('html, body').animate({
    'scrollTop': 0
  }, 500);
});

//ページ内リンク移動スムーススクロール
$('header a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
  'scrollTop': position
}, 500);
});

//ハンバーガーメニュー
$('#menu-btn').click(function() {
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $('.header__gnav').addClass('active');
  } else {
    $('.header__gnav').removeClass('active');
  }
});

  //ふわっと浮き上がるスクロール
  $(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});



//アコーディオン
$(function () {
  // 最初のコンテンツ以外は非表示
  $(".faq__question:not(:first-of-type)").css("display", "none");
  // 矢印の向きを変えておく

  $(".faq__question").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});

});
