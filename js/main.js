document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.tab-control')
        .forEach((el) => {
            el.addEventListener('click', () => {
                const dataId = el.getAttribute('data-id');
                const contentPosition = el.getAttribute('data-content-pos');
                const dataGroup = el.getAttribute('data-group');
                document.querySelector(`#${contentPosition}`)
                    .innerHTML = getElementContentById(dataId);
                document.querySelectorAll(`[data-group="${dataGroup}"]`)
                    .forEach((el1) => {
                        el1.classList.remove('active');
                    });
                el.classList.add('active');


            })
        });

});

const getElementContentById = (id) => {
    return document.querySelector(`#${id}`)
        .innerHTML;
};

