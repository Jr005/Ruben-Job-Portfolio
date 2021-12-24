// PORTFOLIO

$(window).on("load", function () {
  $(".grid").isotope({
    itemSelector: ".grid-item",
  });

  // filter items on button click
  $(".filter-button-group").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $(".grid").isotope({ filter: filterValue });
    $(".filter-button-group li").removeClass("active");
    $(this).addClass("active");
  });
});

// // Smooth Scrolling
$("#main-nav ul a, .btn-light").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// DROP DOWN MENU

var dropDown = function () {
  $(".menu-dropdown").on("click", function () {
    $(".menu-content").toggleClass("hidden");
    $(".con, .menu-dropdown").toggleClass("menu-active");

    setTimeout(function () {
      $(".menu-content").toggleClass("opacity");
    }, 300);
  });
};

dropDown();

// PORTFOLIO BUTTON

$(" .cta").mouseenter(function () {
  $(this)
    .addClass("active")
    .delay(300)
    .queue(function (next) {
      $(this).removeClass("active");
      next();
    });
});
