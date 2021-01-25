// Wait to attach handlers until the DOM is fully loaded
$(() => {
  
    $(".create-form").on("submit", event => {
        event.preventDefault();
    
        let newBurger = {
            burger_name: $("#burga").val().trim(),
        }
    
        console.log(newBurger);

        // Send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Added Burger to Menu");
            location.reload();
        });
    });

    // Burger consumption button
    $(".eat-burger").on("click", event => {
        // this is referring to the window instead of the button for some reason >.<
        let id = $(this).data("id");
        console.log(id);
        console.log($(this));

        let newEatenState = {
            devoured: true
        }

        // Send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT", 
            data: newEatenState
        }).then(() => {
            console.log("Burger Devoured!");
            location.reload();
        });
    });

    // Burger delete button
    $(".delete-burger").on("click", event => {
        let id = $(this).data("id");
        console.log(id);

        // Send DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(() => {
            console.log("Burger " + id + " deleted!");
            location.reload();
        });
    });

});