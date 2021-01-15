export default function script () {
  $(function () { // 通常の記述はここに書いていく

    $('.kv__slick').slick({ //{}を入れる
      autoplay: false, //「オプション名: 値」の形式で書く
      dots: false, //複数書く場合は「,」でつなぐ
      centerMode: true,
      centerPadding: '25%',
      arrows: false,
    });
    console.log("hello")
    
  })
}
