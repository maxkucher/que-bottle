const navigateToGallery = () => {
    $('html,body').animate({
        scrollTop: $('.section-gallery')
            .offset()
            .top
    }, 'slow')
};

const navigateToOrderForm = () => {
    $('html,body').animate({
        scrollTop: $('#submit-order-form')
            .offset()
            .top
    }, 'slow')
};

$(document).ready(() => {


    $('.order-btn').on('click', function (e) {
        const colorSelected = $(this).attr('data-color');
        $('#order-details').html(`Вы выбрали: ${colorSelected} . <br> Стоимость: 250UAH`);
        $('#input-color').val(colorSelected);

    });

    $('.navigate-to-order-form').on('click', function (e) {
        navigateToOrderForm();
    });

    $('.checkout-button').on('click', function (e) {
        if ($('#input-color').val() === "")
            navigateToGallery();
        else navigateToOrderForm();
    });


    $('.navigate-to-details').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $('#details')
                .offset()
                .top
        }, 'slow');
    });


    $('.navigate-to-gallery').on('click', function (e) {
        navigateToGallery();
    });


    $('#submit-order-form').on('submit', function (e) {
        e.preventDefault();

        if ($('#input-color').val() === "") {
            alert('Выберите пожалуйста цвет');
            navigateToGallery();
            return;
        }

        const name = $('#name').val();
        const phoneNumber = $('#phone').val() + " .Color: " + $('#input-color').val();


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
                $('#order-details').text("Выберите пожалуйста цвет");
                window.location = "ordriscomp.html";
            },
            error(error) {
                alert('Ошибка отправки заказа. Попробуйте ещё раз.');
                console.log(error);
            }
        });

    })
});
