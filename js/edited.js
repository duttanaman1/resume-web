//scrolling open{
$("#about_nav").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#about").offset().top,
    },
    "slow"
  );
});
$("#experience_nav").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#experience").offset().top,
    },
    "slow"
  );
});
$("#education_nav").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#education").offset().top,
    },
    "slow"
  );
});
$("#skills_nav").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#skills").offset().top,
    },
    "slow"
  );
});
$("#projects_nav").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#projects").offset().top,
    },
    "slow"
  );
});
$("#interest_nav").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#interests").offset().top,
    },
    "slow"
  );
});
$("#awards_nav").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#awards").offset().top,
    },
    "slow"
  );
});
$("#img_back_to_top").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".header-text").offset().top,
    },
    "slow"
  );
});
$(".explore").click(function () {
  alert(
    "on click explore should go to sales page which is not the part to project"
  );
});
//scrolling closes }
//list hovering effect opens {
$("#about_nav").hover(
  function () {
    $("nav.navbar")
      .css("background-image", "url(img/about_hover.jpeg)")
      .css("background-repeat", "no-repeat")
      .css("background-size", "cover")
      .css("opacity", "0.8")
      .css("transition", "background-image 1s ease-in-out");
  },
  function () {
    $("nav.navbar").css("background-image", "none");
  }
);
$("#experience_nav").hover(
  function () {
    $("nav.navbar")
      .css("background-image", "url(img/experience_hover.png)")
      .css("background-repeat", "no-repeat")
      .css("background-size", "cover")
      .css("opacity", "0.8")
      .css("transition", "background-image 1s ease-in-out");
  },
  function () {
    $("nav.navbar").css("background-image", "none").css("opacity", "1");
  }
);
$("#education_nav").hover(
  function () {
    $("nav.navbar")
      .css("background-image", "url(img/education_hover.png)")
      .css("background-repeat", "no-repeat")
      .css("background-size", "cover")
      .css("opacity", "0.8")
      .css("transition", "background-image 1s ease-in-out");
  },
  function () {
    $("nav.navbar").css("background-image", "none").css("opacity", "1");
  }
);
$("#skills_nav").hover(
  function () {
    $("nav.navbar")
      .css("background-image", "url(img/skills_hover.jpeg)")
      .css("background-repeat", "no-repeat")
      .css("background-size", "cover")
      .css("opacity", "0.8")
      .css("transition", "background-image 1s ease-in-out");
  },
  function () {
    $("nav.navbar").css("background-image", "none").css("opacity", "1");
  }
);
$("#interest_nav").hover(
  function () {
    $("nav.navbar")
      .css("background-image", "url(img/interest_hover.jpeg)")
      .css("background-repeat", "no-repeat")
      .css("background-size", "cover")
      .css("opacity", "0.8")
      .css("transition", "background-image 1s ease-in-out");
  },
  function () {
    $("nav.navbar").css("background-image", "none").css("opacity", "1");
  }
);
$("#awards_nav").hover(
  function () {
    $("nav.navbar")
      .css("background-image", "url(img/awards_hover.jpeg)")
      .css("background-repeat", "no-repeat")
      .css("background-size", "cover")
      .css("opacity", "0.8")
      .css("transition", "background-image 1s ease-in-out");
  },
  function () {
    $("nav.navbar").css("background-image", "none").css("opacity", "1");
  }
);
$("#projects_nav").hover(
  function () {
    $("nav.navbar")
      .css("background-image", "url(img/projects_hover.jpeg)")
      .css("background-repeat", "no-repeat")
      .css("background-size", "cover")
      .css("opacity", "0.8")
      .css("transition", "background-image 1s ease-in-out");
  },
  function () {
    $("nav.navbar").css("background-image", "none").css("opacity", "1");
  }
);

//list hovering effect closes }
