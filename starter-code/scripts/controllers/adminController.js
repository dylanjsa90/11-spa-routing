(function(module) {
  var adminController = {};

  adminController.index = function() {
    /* TODO: Reveal only the articles section! */
    $('.tab-content').hide();
    $('#blog-stats').fadeIn();
  };

  module.adminController = adminController;
})(window);
