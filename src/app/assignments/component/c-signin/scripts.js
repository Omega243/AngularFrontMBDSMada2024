$(document).ready(function() {
  var eyeIcon = $(".fa-eye");

  eyeIcon.click(function() {
    var passwordField = $("#password");

    if (passwordField.attr("type") === "password") {
      passwordField.attr("type", "text");
      eyeIcon.removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
      passwordField.attr("type", "password");
      eyeIcon.removeClass("fa-eye-slash").addClass("fa-eye");
    }
  });
});
