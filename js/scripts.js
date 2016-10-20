// Intialize Lettering JS
$('h1').lettering();

// Make Backstretch Go!!
$.backstretch('/nameplate/img/background.jpg');

//masonry
$('main').masonry({
    itemSelector: 'article',
    columnWidth: 0,
    gutter:0,
    fitWidth: true
});