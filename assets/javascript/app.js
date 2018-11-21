
$(document).on("click", "button", function findGifs() {
    // creating a variable to plug new data-animal
    var topics = $(this).attr("data-topics");
    // , "cow", "pengiun", "sloth", "capybara", "hummingbird", "hawk", "armadillo", "naked mole rat", "dolphin", "lemur", 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var animalGifs = response.data;
        var rating = response.rating;
        $("#animal-gifs").empty();
        for (var i = 0; i < animalGifs.length; i++) {
            var img = $("<img>");
            img.addClass("gif-image");
            img.attr("src", animalGifs[i].images.fixed_height_still.url);
            img.attr("data-still", animalGifs[i].images.fixed_height_still.url);
            img.attr("data-animate", animalGifs[i].images.fixed_height.url);
            img.attr("data-state", "still");
            $("#animal-gifs").append(img);
            $("#button data-topics").append(rating)

        }

    });

});

$(document).on("click", ".gif-image", function () {
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


$("#submit-button").on("click", function (event) {
    event.preventDefault();
    // console.log(("#new-input").val());
    var creature = $("#new-input").val().trim();
    // topics.push(creature);
    // a.text(topics);
    // Adding the button to the buttons-view div
    $("#animal-container").append('<button data-topics="' + creature +'">' + creature +'</button>');

});