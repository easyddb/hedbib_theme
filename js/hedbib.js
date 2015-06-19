/**
 * Creates the top-bar toggle menu.
 */
(function ($) {
  'use strict';

  /**
   * Toggle the search form from the top-bar menu.
   *
   * @param Boolean open
   *   If true we want to open the form and link else we want to close it.
   */
  
  /**
   * When ready start the magic and handle the menu.
   */
  $(document).ready(function () {
    // Open search as default on front page, close on others.
    $('.site-header .js-topbar-search').css('display', 'block');
    $('.front .js-topbar-search').css('display', 'block');

    //Hide user login on load.
    $('.js-topbar-user').css('display', 'none');

    // Set active classes on menu.
    $('.front .leaf .topbar-link-menu').removeClass('active');
    $('.front .leaf .topbar-link-search').addClass('active');
	$('.leaf .topbar-link-search').addClass('active');

  });
})(jQuery);
