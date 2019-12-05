
  $(document).not('.remove-class').ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  // CONTACT FORM
 $('#contact-form').submit(function(e) {
   e.preventDefault();

     $.ajax({
         url: "https://formspree.io/projectsparrow0812@gmail.com",
         method: "POST",
         data: { message: $('form').serialize() },
         dataType: "json"
     }).done(function(response) {
         $('#success').addClass('expand');
         $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
     });
 });

 $('#close').click(function() {
   $('#success').removeClass('expand');

});
