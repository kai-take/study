  $(function () { // 通常の記述はここに書いていく
    console.log("hello");

    $('.kv__slick').slick({ //{}を入れる
      autoplay: false, //「オプション名: 値」の形式で書く
      dots: false, //複数書く場合は「,」でつなぐ
      centerMode: true,
      centerPadding: '17.6%',
      arrows: false,
    });

    $('.close-btn').on('click', () => {
      $('.popup').fadeOut();
      console.log("click");
      
  });
  $(function(){
    $(".popup").show();
    $.cookie('btnFlg') == 'on'?$(".popup").hide():$(".popup").show();
    $(".close-btn").click(function(){
        $(".popup").fadeOut();
        $.cookie('btnFlg', 'on', { expires: 30,path: '/' }); //cookieの保存
    });
});

    
    
  })