$(document).ready(function() {


// Add jQuery here

$('.nav_prop').click(function(event) {
  $('.item').removeClass('reveal');
  $('.item').addClass('hide');

  $('.item.prop').removeClass('hide');
  $('.item.prop').addClass('reveal');
});

$('.nav_fashion').click(function(event) {
  $('.item').removeClass('reveal');
  $('.item').addClass('hide');

  $('.item.fashion').removeClass('hide');
  $('.item.fashion').addClass('reveal');
});

$('.nav_circus').click(function(event) {
  $('.item').removeClass('reveal');
  $('.item').addClass('hide');

  $('.item.circus').removeClass('hide');
  $('.item.circus').addClass('reveal');
});

$('.nav_show').click(function(event) {
  $('.item').removeClass('reveal');
  $('.item').addClass('hide');

  $('.item.show').removeClass('hide');
  $('.item.show').addClass('reveal');
});

$('.nav_trophy').click(function(event) {
  $('.item').removeClass('reveal');
  $('.item').addClass('hide');

  $('.item.trophy').removeClass('hide');
  $('.item.trophy').addClass('reveal');
});

$('.nav_all').click(function(event) {
$('.item').removeClass('hide');
$('.item').addClass('reveal');
});

$('.nav_thumbnail').click(function(event){
  $('.item').addClass('thumbnail');
});

$('.nav_full').click(function(event){
  $('.item').removeClass('thumbnail');
});
























  });
