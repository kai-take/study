  $(function () { // 通常の記述はここに書いていく
    console.log("hello");

    $('.kv__slick').slick({ //{}を入れる
      autoplay: false, //「オプション名: 値」の形式で書く
      dots: false, //複数書く場合は「,」でつなぐ
      centerMode: true,
      centerPadding: '17.6%',
      arrows: false,
    });
    
  })