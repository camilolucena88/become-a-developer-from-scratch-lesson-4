$("#open-btn").on('click', function() {
    $("#modal-1").removeAttr('hidden')
})

function closeModal() {
    $("#modal-1").attr('hidden', true)
}

window.onclick = function (event) {
    console.log(event.target);
    if ($(event.target).is("#modal-1")) {
        closeModal()
    }
}

