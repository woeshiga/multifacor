$(function() {
    $('.denyAccessFileButton').click(function(e) {
        e.preventDefault();
        let request_id = e.target.id.replace('da', '');
        $.ajax({
            url: 'http://multifactor.loc/api/deny_access.php',
            method: 'POST',
            data: {
                request_id: request_id,
                status: localStorage.getItem('status')
            }
        })
        .done(resp => {
            alert('Запрос отклонен!');
            window.location.reload();
        });
    });
})