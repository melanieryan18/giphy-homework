
$("button").on("click", function findGifs() {
    // creating a variable to plug new data-animal
    var topics = $(this).attr("data-topics");
    // , "cow", "pengiun", "sloth", "capybara", "hummingbird", "hawk", "armadillo", "naked mole rat", "dolphin", "lemur", 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var imagesArr = response.data;
        $("#animal-gifs").empty();
        // take all the fixed_height images from the response 
        // and display on the page
        for (var i = 0; i < imagesArr.length; i++) {
            var img = $("<img>");
            img.addClass("gif-image");
            img.attr("src", imagesArr[i].images.fixed_height_still.url);
            img.attr("data-still", imagesArr[i].images.fixed_height_still.url);
            img.attr("data-animate", imagesArr[i].images.fixed_height.url);
            img.attr("data-state", "still");
            $("#animal-gifs").append(img);
        }
        $(document).on("click", ".gif-image", function (e) {
            // e.preventDefault();
            var state = $(this).attr("data-state");
            var animateUrl = $(this).attr("data-animate");
            var stillUrl = $(this).attr("data-still");
            if (state === "still") {
                $(this).attr("src", animateUrl);
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", stillUrl);
                $(this).attr("data-state", "still");
            }
        });




        // $(document).on("click", ".gif-button", function (e) {
        //     e.preventDefault();
        //     var btnValue = $(this).attr("data-name");
        //     // callAPI(btnValue);
        // });


        $("#animal-button").on("click", function () {
            console.log(("#animal-button").val());
            var creature = $("#animal-input").val().trim();
            topics.push(creature);
            a.text(topics);
            // Adding the button to the buttons-view div
            $("#animal-gifs").append(a);

        });
    });
});

