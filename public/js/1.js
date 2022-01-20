document.addEventListener("DOMContentLoaded", function() {
    khoixe = $('.nhieuxe').isotope({
        itemSelector: '.motmon',
        layoutMode: 'masonry'
    });

    khoixe.imagesLoaded().progress(function() {
        khoixe.isotope('layout');
    });

    $('.tieudegioithieuxe a').click(function() {
        dulieu = $(this).data('xe');
        //	console.log(dulieu);
        khoixe.isotope({ filter: dulieu })
        return false;
    });
    //xử lí phần responsive bằng jquery
    // tính ra số div ten .loaixe
    soluongmon = $('.motmon').length;
    docao = soluongmon * $('motmon').height();
    console.log(docao);
    $('.noidugct').css({ 'height': docao })
        // xem div .motmon có tồn tại hay không
    if ($('.motmon').length) {
        console.log("có div một món trong trang web");

    }
    new WOW().init();
    // code cho phần phóng to ảnh 
    // $('.Some-pictures a').fancybox();


})