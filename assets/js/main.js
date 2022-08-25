;(function ($) {
  $(document).ready(function () {
    $("body").niceScroll()
  })

  $(".header-menu__btn-row").click(function () {
    $(this).toggleClass("active")
    $(".header-menu__list").toggleClass("active")
  })
})(jQuery)

$(document).ready(function () {
  $(".header-navbar__burger").click(function () {
    $(this).toggleClass("header-navbar__burger-item--open")
    $(".header-menu__list").stop(true, true).slideToggle(500)
  })
})
