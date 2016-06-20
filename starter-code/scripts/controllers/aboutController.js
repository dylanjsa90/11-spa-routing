(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* TODO: Reveal only the about section! */
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
