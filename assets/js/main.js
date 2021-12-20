$(() => $('[data-toggle="tooltip"]').tooltip());

$(window).scroll(() => {
  const scroll = $(window).scrollTop();
  if (scroll >= 100) $('#menu').addClass('bg-dark-transparent');
  else $('#menu').removeClass('bg-dark-transparent');
});
