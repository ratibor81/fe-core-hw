'use strict';

var btn_prev = document.querySelector('.arr-prev');
var btn_next = document.querySelector('.arr-next');
var reviews = document.querySelectorAll('.review-block__card');
var counters = document.querySelectorAll('.review-block__page-counter span');

var i = 0;
var counter = 0;

var prevClickHandler = function prevClickHandler() {
  reviews[i].style.display = 'none';
  i -= 1;
  if (i < 0) {
    i = reviews.length - 1;
  }
  reviews[i].style.display = 'flex';
  goToCount(counter - 1);
};

var nextClickHandler = function nextClickHandler() {
  reviews[i].style.display = 'none';
  i += 1;
  if (i >= reviews.length) {
    i = 0;
  }
  reviews[i].style.display = 'flex';
  goToCount(counter + 1);
};

var goToCount = function goToCount(n) {
  counters[counter].classList.remove('through');
  counter = (n + counters.length) % counters.length;
  counters[counter].classList.add('through');
};

btn_prev.addEventListener('click', prevClickHandler);
btn_next.addEventListener('click', nextClickHandler);