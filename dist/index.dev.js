"use strict";

(window.onload = function () {
  document.addEventListener("DOMContentLoaded", function () {
    var touchItemIco = document.querySelectorAll(".touch__item-ico");
    var touchItem = document.querySelectorAll(".touch__item");
    var touchBtn = document.querySelectorAll(".touch__btn");
    var touchItems = document.querySelector(".touch__items");
    var touchItemsEvent = true;

    var _loop = function _loop(i) {
      if (touchItemsEvent) {
        touchItems.addEventListener("mouseenter", function () {
          touchItemsEvent = false;
        });
      }

      touchItem[i].addEventListener("mouseenter", function () {
        touchItemIco[i].style.fill = "#ffffff";
        touchBtn[i].style.borderColor = "#ffffff";
        touchBtn[i].style.color = "#ffffff";
        touchBtn[i].style.background = "#23A6F0";
        this.style.background = "#23A6F0";
      });
      touchItem[i].addEventListener("mouseleave", function () {
        touchItemIco[i].style.fill = "";
        touchBtn[i].style.borderColor = "";
        touchBtn[i].style.color = "";
        touchBtn[i].style.background = "";
        this.style.background = "";
      });
    };

    for (var i = 0; i < touchItemIco.length; i++) {
      _loop(i);
    }
  })();
})();