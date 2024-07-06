/// <reference types="../@types/jquery"/>
"use strict";
const targetDate = new Date("2024-10-23T23:59:59").getTime();
const currentDate = new Date().getTime();
let timeDifference = targetDate - currentDate;

let countdownInterval = setInterval(() => {
  timeDifference = timeDifference - 1000;
  if (timeDifference <= 0) {
    clearInterval(counterdownDate);
  } else {
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    $(".days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);
  }
}, 1000);

function toggleMenu(open) {
  const leftValue = open ? "250px" : "0px";
  $(".open-menu").animate({ left: leftValue });
  $("aside").animate({ width: "toggle" });
}

$(".open-menu").on("click", function () {
  if ($(".open-menu").css("left") === "0px") {
    toggleMenu(true);
  }
});

$(".close-menu").on("click", function () {
  if ($(".open-menu").css("left") === "250px") {
    toggleMenu(false);
  }
});

$(".content .headline").on("click", function () {
  $(this).next().slideToggle(1000);
  $(this).parent().siblings().children(".info").slideUp(1000);
});

$("aside li a").on("click", function () {
  const sectionId = $(this).attr("href");
  const sectionOffset = $(sectionId).offset().top;
  $("body,html").animate({ scrollTop: sectionOffset }, 1000);
});

$("#text").on("input", function () {
  const length = $("#text").val().length;
  if (length > 100) {
    $("#remaining-char").text("Your available character finished");
  } else {
    $("#remaining-char").text(`${100 - length}`);
  }
});
