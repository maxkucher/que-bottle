$(document).ready(() => {

    $('.order-btn').on('click',function (e) {
       const colorSelected = $(this).attr('data-color');
       $('#input-color').val(colorSelected);
    });

    $('.navigate-to-order-form').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $('#submit-order-form')
                .offset()
                .top
        }, 'slow')
    });


    $('.navigate-to-details').on('click', function (e) {
       $('html,body').animate({
         scrollTop: $('#details')
             .offset()
             .top
       }, 'slow');
    });


    $('.navigate-to-gallery').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $('.section-gallery')
                .offset()
                .top
        }, 'slow')
    });


    $('#submit-order-form').on('submit', function (e) {
        e.preventDefault();

        const name = $('#name').val();
        const phoneNumber = $('#phone').val()+" .Color: "+$('#input-color').val();


        $.ajax({
            url: 'https://shopapi.stewk.com/orders',
            type: 'post',
            data: JSON.stringify({name, phoneNumber}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success(data) {
                $('#name').val("");
                $('#phone').val("");
                $('#input-color').val("");
                alert('Ваша заявка принята. Мы свяжемся с Вам в ближайшее время');
                console.log(JSON.stringify(data));
            },
            error(error) {
                alert('Ошибка отправки заказа. Попробуйте ещё раз.');
                console.log(error);
            }
        });

    })
});
