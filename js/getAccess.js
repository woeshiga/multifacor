$(function() {
    $('.getAccessFileButton').click(function(e) {
        e.preventDefault();
        let fileId = e.target.id.replace('ga', '');
        let userId = $(`#uf${e.target.id.replace('ga', '')}`).val().replace('us', '');
        $.ajax({
            url: 'http://multifactor.loc/api/get_access.php',
            method: 'POST',
            data: {
                file_id: fileId,
                user_id: userId,
                status: localStorage.getItem('status')
            }
        })
        .done(resp => {
            alert('Доступ предоставлен!');
        });
    });
})