$(function () {

    function render(books) {
        console.log("ok");
    }

    $.get("http://localhost:8282/books")
        .done(function (books) {
            render(books);
        })
        .fail(function () {
            alert("błąd połączenia")
        });




});