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

});