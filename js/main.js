$(document).ready(() => {

    $('.navigate-to-order-form').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $('#submit-order-form')
                .offset()
                .top
        }, 'slow')
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
        const phoneNumber = $('#phone').val();


        $.ajax({
            url: 'http://localhost:8080/orders',
            type: 'post',
            data: JSON.stringify({name, phoneNumber}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success(data) {
                $('#name').value = "";
                $('#phone').value = "";
                alert('Ваша заявка принята. Мы свяжемся с Вам в ближайшее время');
                console.log(JSON.stringify(data));
            },
            error(error) {
                console.log(error);
            }
        });

    })
});
