$(function() {
    $('#sendFile').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: 'http://multifactor.loc/api/add_file.php',
            method: 'POST',
            data: {
                name: $('#name').val(),
                description: $('#description').val(),
                file: $('#file').val()
            }
        })
        .done(function(resp) {
            console.log(resp);
        });
    });
})