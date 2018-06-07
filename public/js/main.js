$(function () {
    $('.horizonalBarCharts').slick({
        infinite: true,
        speed: 300,
        dots: false,
        autoplay: true,
        mobileFirst: true,
        slidesToShow: 1,
        arrows: false,
    });
    $('.horizonalBarCharts').on('afterChange',function (slick,currentSlide) {
       console.log('currentslide:'+ currentSlide.currentSlide);

        $('.catagoryBtn a').removeClass('active');
        $('.catagoryBtn a').eq(currentSlide.currentSlide).addClass('active');
    });

    // $('.catagoryBtn .slick-slide').eq(0).addClass('active');

    $('.catagoryBtn a').click(function (e) {
        e.preventDefault();
        // console.log('test!!' + $(this).index());
        let slideIndex = $(this).index();
        $('.horizonalBarCharts').slick('slickGoTo', slideIndex);
        if($(this).hasClass('active')){
            return;
        }else {
            $('.catagoryBtn a').removeClass('active');
            $(this).addClass('active');
        }

    });
});