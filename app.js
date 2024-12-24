$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const formData = $(this).serialize();

        // Send to backend
        $.ajax({
            url: "backend/handle_form.php",
            type: "POST",
            data: formData,
            success: function (response) {
                $("#result").html(response);
            },
            error: function () {
                $("#result").html("<p style='color:red;'>There was an error processing the form.</p>");
            },
        });
    });
});
