$(document).ready(function() {

// Add jQuery here

// Invoke jqEye method when the page is loaded.
jQuery(document).ready(function() {
    jQuery(".pupil").jqEye();
});

// jqEye plugin's definition

// eyeblink js


!function(t){t.fn.jqEye=function(i){function e(t,i,e,h){var a={x:t,y:i};return t>e/2&&(a.x=e/2),-e/2>t&&(a.x=-e/2),i>h/2&&(a.y=h/2),-h/2>i&&(a.y=-h/2),a}function h(t,i,e){var h={x:t,y:i};if(t*t+i*i>e*e)if(0!==t){var a=i/t;h.x=Math.sqrt(e*e/(a*a+1)),h.x=t>0?h.x:-h.x,h.y=Math.abs(a*h.x),h.y=i>0?h.y:-h.y}else h.y=i>0?e:-e;return h}function a(t,i,e,h){var a={x:t,y:i};if(t*t/(e*e)+i*i/(h*h)>1)if(0!==t){var s=i/t;a.x=Math.sqrt(1/(1/(e*e)+s*s/(h*h))),a.x=t>0?a.x:-a.x,a.y=Math.abs(s*a.x),a.y=i>0?a.y:-a.y}else a.y=i>0?h:-h;return a}function s(t,i,a,s,r){var n={x:t,y:i},f=a/2-r,o=s/2-r;if(Math.abs(t)>f&&Math.abs(i)>o){var y=h(Math.abs(t)-f,Math.abs(i)-o,r);n.x=t>0?y.x+f:-(y.x+f),n.y=i>0?y.y+o:-(y.y+o)}else n=e(t,i,a,s);return n}var r=t.extend({shape:"circle",radius:100,width:25,height:25},i);return this.each(function(){var i=t(this),n=t(this).position().left+t(this).width()/2,f=t(this).position().top+t(this).height()/2,o=t(this).offset().left+t(this).width()/2,y=t(this).offset().top+t(this).height()/2;t(document).mousemove(function(x){var c=x.clientX,u=x.clientY,l=c-o+t(window).scrollLeft(),d=u-y+t(window).scrollTop();if("rectangle"===r.shape){var v=e(l,d,r.width,r.height);l=v.x,d=v.y}if("circle"===r.shape){var p=h(l,d,r.radius);l=p.x,d=p.y}if("ellipse"===r.shape){var w=a(l,d,r.width/2,r.height/2);l=w.x,d=w.y}if("rounded rectangle"===r.shape){var g=s(l,d,r.width,r.height,r.radius);l=g.x,d=g.y}l=l+n-i.width()/2,d=d+f-i.height()/2,i.css({left:l,top:d})})})}}(jQuery);















  });
