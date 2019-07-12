$(document).ready(() => {
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
                console.log(JSON.stringify(data));
            },
            error(error) {
                console.log(error);
            }
        });

    })
});
