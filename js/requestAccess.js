$(function() {
    $(function() {
        $('.requestAccessFileButton').click(function(e) {
            e.preventDefault();
            let fileId = e.target.id.replace('ra', '');
            $.ajax({
                url: 'http://multifactor.loc/api/request_access.php',
                method: 'POST',
                data: {
                    file_id: fileId,
                    user: localStorage.getItem('login')
                }
            })
            .done(resp => {
                alert('Доступ запрошен!');
                console.log(resp);
            });
        });
    })
})