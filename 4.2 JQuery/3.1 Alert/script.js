$("#btn-open").click( function () {
    alertModal.css("opacity", "100%").removeAttr('hidden');
    setTimeout(() => {
        closeModal()
    }, 3000);
});

let alertModal = $("#alert-danger");

function closeModal() {
    lowOpacity();
    setTimeout(() => {
        alertModal.attr('hidden', true);
    }, 1000)
}

function lowOpacity() {
    alertModal.css("opacity", "0%");
}


