$(function () {

    function render(books) {

        var booksElement = $('#books');
        booksElement.empty();

        books.forEach(function (book) {
            var title = $("<div>" + book.title + "</div>");
            var id = book.id;
            booksElement.append(title);

            var bookDetails = $("<div>");

            title.after(bookDetails);
            bookDetails.text("Id " + id);
            bookDetails.addClass("hidden");

            title.click(function () {
                bookDetails.toggle("hidden");
            });



        });
    }

    $.get("http://localhost:8282/books")
        .done(function (books) {
            render(books);
        })
        .fail(function () {
            alert("błąd połączenia")
        });




});