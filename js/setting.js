//----------------------------------------------------------------------------
// Налаштавання слайдера
// Якщо слайдер в середині flex або самп є flex то потрібно задати min-width: 0px;
// $('.test__slaider').slick({
//     //Переключення слайдів кнопками
//     accessibility: true,
//     // Авто перегортання слайдів слайдер
//     autoplay: false,
//     // Швидкість авто перегортання
//     autoplaySpeed: 5000,
//     // Адаптивна висота для влайдера
//     adaptiveHeight: false,
//     // Стрілочки навігації
//     arrows: true,
//     // Крапки навігації
//     dots: false,
//     // Головний слайд по центру
//     centerMode: true,
//     // Спосіб заміни слайдів "появлення"
//     fade: false,
//     // Фокус при натисканні на салйд
//     focusOnSelect: false,
//     // Анімація прокрутки слайдів з бібліотеки JQuery
//     easing: 'linear',
//     // Нескінченність слайдера
//     infinite: true,
//     // Стартовий слайд
//     initialSlide: 0,
//     // Техніка лінивої загрузки "ondemand" чи "progressive"
//     lazyLoad: 'ondemand',
//     // Пауза при фокусі
//     pauseOnFocus: true,
//     // Пауза при наведенні
//     pauseOnHover: true,
//     // Пауза при наведенні на крапки
//     pauseOnDotsHover: false,
//     // Кількість рядків слайдера
//     row: 1,
//     // Кількість слайдів в рядку
//     slidesPerRow: 1,
//     // Кількість слайдів які відображаються
//     slidesToShow: 1,
//     // Кількість слайдів які прокручуються
//     slidesToScroll: 1,
//     // швидкість прокурутки слайдів
//     speed: 300,
//     // Можливість свайпа
//     swipe: true,
//     // Можливість свайпнуть до бажаного слайда
//     swipeToSlide: false,
//     // Можливіть рухати слайди дотиком
//     touchMove: true,
//     // Довжина яку необхідно провести для свайпа (1/touchThreshold)
//     touchThreshold: 5,
//     // Вертикальний слайдер
//     vertical: false,
//     // Вертикальний свайп
//     verticalSwiping: false,
//     // Очікування доки закінчиться анімація переходу слайдів
//     waitForAnimate: true,
//     // z-index слайдів для IE9 
//     zIndex: 1000,
//     // Mobile first для брекпоынтыв слайдера
//     mobileFirst: false,
//     // адаптив слайдера
//     responsive: [
//         {
//             breakpoint: 100,
//             settings: {

//             }
//         }
//     ],
//     // Зміна материнського блоку для навігації
//     appendArrows: 'classblok',
//     appendDots: 'classblok',
//     // Зв'язує 2 слайдери
//     asNavFor: 'slaider_class'
// });

//----------------------------------------------------------------------------
// Обробка натискання на любий елемент сторінки

window.onload = function(){
    document.addEventListener('click', documentActions);
    
    function documentActions (a){
        const targetElement = a.target;

        if (targetElement.classList.contains('btn_clas')){
            // Подія
        }
    }
}