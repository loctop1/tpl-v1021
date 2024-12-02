$(function () {
    'use strict';
    TplEventGeneral.init();
});
const TplEventGeneral = {
    init: function () {
        Main_Event.init();
        Index_Event.init();
        Order_Event.init();
        Product_Event.init();
        News_Event.init();
        Album_Event.init();
        User_Event.init();
        Map_Event.init();
    },
}

const Main_Event = {
    init: function () {
        this.miniAnimation()
        this.displaySubmenu()
        this.select2Running()
    },
    miniAnimation: function (){
        /*Slogan Header Animation*/
        let i = 1;
        setInterval(function() {
            let slogan = $('.slogan'+ i++)
            $('.slogan').hide()
            slogan.fadeTo(1000,1)
            slogan.show()
            if(i >= $('.slogan').length+1) i = 1;
        }, 2000);

    },
    displaySubmenu: function (){
        $('.j-dropdown').on('click',function (){
            if($(this).siblings('.j-submenu').hasClass('showMenu')){
                if($('.j-dropdown').siblings('.showMenu').hasClass('showMenu')) {
                    $('.j-dropdown').siblings('.showMenu').removeClass('showMenu')
                    $('.j-dropdown').removeClass('arrowRotate')
                }
                $(this).siblings('.j-submenu').removeClass('showMenu')
                $(this).removeClass('arrowRotate')
            } else{
                if($('.j-dropdown').siblings('.showMenu').hasClass('showMenu')) {
                    $('.j-dropdown').siblings('.showMenu').removeClass('showMenu')
                    $('.j-dropdown').removeClass('arrowRotate')
                }
                $(this).siblings('.j-submenu').addClass('showMenu')
                $(this).addClass('arrowRotate')
            }
        })
    },
    select2Running: function (){
        if($('.select2').length){
            $('.select2').each(function() {
                let $parent = $(this).parent();
                $(this).select2({
                    dropdownParent: $parent,
                    disabled: false
                }).trigger('change');
            });
        }
    }

}
const Index_Event = {
    init: function () {
        this.homeSlide()
        this.countdownPromotion()
        this.activeMask()
        this.menuScroll()
        this.showSaled()
    },
    homeSlide:function (){
        let promoProductsConfig = {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        let categoryConfig ={
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 800,
                    settings:{
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        }
        let homePageNewsConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }
        let searchTagConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            variableWidth: true,
            prevArrow: '<button class="slick-btn"><i class="fa-solid fa-circle-arrow-left" style="color: #ff9933;"></i></button>',
            nextArrow: '<button class="slick-btn"><i class="fa-solid fa-circle-arrow-right" style="color: #ff9933;"></i></button>'
        }

        if($('.promoProduct-products_slide').length){
            $('.promoProduct-products_slide').slick(promoProductsConfig)
        }

        if($('.HP-news_slide').length){
            $('.HP-news_slide').slick(homePageNewsConfig)
        }

        if($('.category-list').has('.j-categoryItem').length){
            $('.category-list').has('.j-categoryItem').slick(categoryConfig)
        }

        if($('.searchKey-list').length){
            $('.searchKey-list').slick(searchTagConfig)
        }
    },
    countdownPromotion:function(){
        let x = setInterval(function () {
            let end = new Date($(".timer-view").attr("data-date")).getTime();
            let now = new Date().getTime();
            let distance = end - now;

            if (distance < 0) {
                clearInterval(x);
                return;
            }

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $(".days").text(days);
            $(".hours").text(hours);
            $(".minutes").text(minutes);
            $(".seconds").text(seconds);
        }, 3000);
    },
    activeMask:function(){
        $('.j-categoryItem').on('click',function(){
            $(this).siblings(".active").removeClass("active")
            $(this).addClass("active")
        })
    },
    menuScroll:function(){
        $(window).scroll(function () {
            if ($(window).width() >= 1200) {
                $(this).scrollTop() > 110 ? $(".header-category").addClass("pos_active") : $(".header-category").removeClass("pos_active")
                $(this).scrollTop() > 110 ? $(".header-mainMenu").addClass("pos_menu") : $(".header-mainMenu").removeClass("pos_menu");
            }
        })
    },
    showSaled: function (){
        setTimeout(function(){
            $('._productItem').each(function () {
                let t = $(this);
                const totalCustomerBuy = t.attr('data-totalcustomerbuy');

                if (totalCustomerBuy) {
                    // t.find('.countdown').css('width', totalCustomerBuy + '%');
                    t.find('.product-count_saled').text(totalCustomerBuy);
                }
            })
        } ,1000)
    }
}
const Product_Event = {
    init: function () {
        this.productSlide()
        this.copyCoupon()
        this.showCouponInfo()
        this.modifyCount()
        this.priceFilter()
    },
    productSlide: function (){
        let productDetailConfig={
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            infinite: false,
            asNavFor: '._slideThumb'
        }
        let productThumbsDetailConfig={
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '._slideMain',
            margin: 1,
            dots: false,
            infinite: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                }
            ]
        }
        let productRelatedConfig = {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite:false,
            responsive: [
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
        }
        let productViewedConfig = {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite:false,
            responsive: [
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
        }
        let couponsConfig = {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }
        if($('.coupons').length){
            $('.coupons').slick(couponsConfig)
        }
        if($('._slideMain').length){
            $('._slideMain').slick(productDetailConfig)
        }
        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: false
        });
        if($('._slideThumb').length){
            $('._slideThumb').slick(productThumbsDetailConfig)
        }
        if($('.productRelated-list').length){
            $('.productRelated-list').slick(productRelatedConfig)
        }
        if($('.productViewed-list').length){
            $('.productViewed-list').slick(productViewedConfig)
        }

    },
    modifyCount: function(){
        $('.subtract').on('click',function (){
            let countInput = $(this).siblings('input[type="number"]')
            let value = countInput.val()
            if(value <= 1){
                return false
            }
            value = value - 1
            countInput.val(value)
        })
        $('.plus').on('click',function (){
            let countInput = $(this).siblings('input[type="number"]')
            let value = Number(countInput.val())
            value = value + 1
            countInput.val(value)
        })
    },
    copyCoupon:function (){
        $('.coupon-content_copyBtn').on('click',async function() {
            let textToCopy = $(this).attr('data-coupon');
            if (textToCopy == "") {
                return alert('Đã hết mã, Vui lòng chọn mã khác!');
            }
            let $temp = $("<input>");
            $("body").append($temp);
            $temp.val(textToCopy).select();
            $temp.focus();
            try {
                document.execCommand('copy');
                alert('Đã sao chép thành công');
            } catch (e) {
                console.error('Không thể sao chép vào clipboard:', e);
            }
        })
    },
    showCouponInfo: function (){
        $('.coupon-content_conditional').on('click',function(){
            let code = $(this).data('code')
            let description = $(this).data('description')
            $('.couponDetail-body').find('.code').text(code)
            $('.couponDetail-body').find('.content').text(description)
        })
    },
    priceFilter: function (){
        $(".filter-item").click(function () {
            window.location.href = $(this).find('input').attr('value');
        })
    }
}
const Order_Event = {
    init: function () {
        this.showCouponInfo()
        this.event_checkout()
    },
    showCouponInfo: function (){
        $('.j-showDesc').on('click',function(){
            let idCoupon = $(this).data('id')
            $('.couponList-desc-'+idCoupon).toggleClass('show')
        })
    },
    event_checkout: function (){
        $('.input-box').children('input').on('keydown',function(){
            if($(this).parent().children('.formError')){
                $(this).siblings('.formError').remove()
            }
            //Xóa label
        })

        $('.payment-box').find('input').on('change',function(){
            if($('.payment-box').find('.formError')){
                $('.payment-box').find('.formError').remove()
            }
            //Xóa label
        })

        $('.select2').on('change',function (){
            if($(this).parent().children('.formError')){
                $(this).siblings('.formError').remove()
            }
        })
    }

}
const News_Event = {
    init: function () {}
}
const Album_Event = {
    init: function () {
    }
}
const User_Event = {
    init: function () {}
}
const Map_Event = {
    init: function () {}
}

