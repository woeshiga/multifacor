$(function() {
    $('.allowAccessFileButton').click(function(e) {
        e.preventDefault();
        let request_id = e.target.id.replace('aa', '');
        $.ajax({
            url: 'http://multifactor.loc/api/allow_access.php',
            method: 'POST',
            data: {
                request_id: request_id,
                status: localStorage.getItem('status')
            }
        })
        .done(resp => {
            alert('Доступ предоставлен!');
            window.location.reload();
        });
    });
})