$(document).ready(function() {

    main.sidenave();
    main.dropdown();
    main.dropFillter();
    main.select();
    main.selectCategory();
    main.tabs();
    main.slick();
    main.dropdownButton();
    main.modal();
    main.blockClose();
    main.navRight();
    main.categoryIf();
    main.scrollpage();
    main.menuShow();
    main.bodyIf();

});


    let main = {
        sidenave: function () {
            // menu mobile
            $(".button-collapse").sideNav();
        },
        dropdown:function () {
            document.getElementById('dropDown').onclick = function(){
                document.getElementsByClassName('your-account')[0].style.display = 'block';
            };
        },
        dropFillter:function (event) {
            if ( !$('#drop-fill') ){
                return false;
            }
            // console.log(event);

            $('#drop-fill').click(function () {
                $('.drop-f').toggle();
            });
        },
        select:function () {
            $('.select').material_select();
        },
        selectCategory:function f() {
            $('.select-category').material_select();
        },
        tabs: function () {
            $('ul.tabs').tabs();
        },
        slick:function () {
            //slick
            $('.technics__slider').slick({
                dots: false,
                arrows:true,
                draggable:true,
                infinite: false,
                slidesToScroll: 1,
                slidesToShow: 7,
                variableWidth:true,
                prevArrow: '<button class="slick-prev slick-arrow"></button>',
                nextArrow: '<button class="slick-next slick-arrow"></button>',
            });
        },
        dropdownButton:function f() {
            $('.dropdown-button').dropdown();
        },
        modal:function () {
            $('.modal').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .3, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 400, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%',
                preventScrolling:false
            });
        },
        blockClose:function () {
            $('.block-x').click(function () {
                $('.modal').modal('close');
            });
        },
        navRight:function () {
            $('#btn-navbar-right').click(function () {
                $('#navbar-category').toggle();
            });
            let modal = document.getElementById('navbar-category');
            let btn = document.getElementById('btn-navbar-right');

            $('.navbar-block-category__close').click(function () {
                modal.style.display = 'none';
            });
        },
        categoryIf:function () {
            document.getElementsByTagName('body')[0].onclick = function () {
                let modal = document.getElementById('navbar-category');
                //console.log(event.target);
                if(event.target == modal){
                    modal.style.display = 'none';
                }
            }
        },
        scrollpage: function () {
            let scrolled ;
            let timer;

            $('#btn-top-body').click(function () {
                scrolled= window.pageYOffset;
                scrollToTop();
            });

            function scrollToTop() {
                if(scrolled >0 ){
                    window.scrollTo(0,scrolled);
                    scrolled -= 50; //скорость прокрутки
                    timer = setTimeout(scrollToTop,50);
                }else {
                    clearTimeout(timer);
                    window.scrollTo(0,0);
                }
            }
        },
        menuShow:function () {
            document.getElementById('menu-show').onclick = function () {
                // document.getElementById('menu-mobile-block').style.display = 'block';
                $('#menu-mobile-block').toggle();
                let btn = document.getElementById('menu-show');
                document.getElementsByTagName('body')[0].onclick = function () {
                    if (event.target !== btn){
                        document.getElementById('menu-mobile-block').style.display = 'none';
                    }
                }
            };
        },
        bodyIf: function () {
            document.getElementsByTagName('body')[0].onclick = function(event) {
                //console.log(event.target.matches('.your-account'));
                if (event.target.matches('.dr') == false) {
                    console.log(1);
                    let dropdowns = document.getElementsByClassName("your-account")[0];
                    dropdowns.style.display = 'none';
                }
                if (event.target.matches('.df') == false){
                    $('#drop-ff').hide();
                    //  document.getElementById('drop-ff').style.display = 'none';
                }
            };
        }
    };




















