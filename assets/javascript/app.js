

var topics = ["dog", "cat", "trash panda", "koala", "cow", "horse", "pengiun", "sloth", "capybara", "hummingbird", "hawk", "armadillo", "naked mole rat", "dolphin", "lemur", "quokka"]
// creating a variable to plug new data-animal

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topics + "&api_key=dc6zaTOxFJmzC&limit=10";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    // Event listener for all button elements
    $("#add-animal").on("click", function () {
        // In this case, the "this" keyword refers to the button that was clicked

        // Looping over every result item
        for (var i = 0; i < 11; i++) {
            // Only taking action if the photo has an appropriate rating
            // Create a div for the gif
            var gifDiv = $("<div>");
            // Storing the result item's rating
            var rating = results[i].rating;
            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);

        }
        $(".gif").on("click", function () {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });
    });
});


})



// 2. Your app should take the topics in this array and create buttons in your HTML.
// * Try using a loop that appends a button for each string in the array.

// 3. When the user clicks on a button, the page should grab 10 static, non - animated gif images from the GIPHY API and place them on the page.

// 4. When the user clicks one of the still GIPHY images, the gif should animate.If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating(PG, G, so on).
// * This data is provided by the GIPHY API.
// * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your`topics` array.Then make a function call that takes each topic in the array remakes the buttons on the page.

// 7. Deploy your assignment to Github Pages.

// 8. ** Rejoice ** !You just made something really cool.