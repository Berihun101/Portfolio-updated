var btt = document.getElementById('back-to-top'),

    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
    scrollPos, docHeight;



// Calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
    offset = docHeight / 4;

}

// Add scroll event listener
window.addEventListener('scroll', function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;
    btt.className = (scrollPos > offset) ? 'visible' : '';
});

// Add click event listener
btt.addEventListener('click', function(event) {

  window.scrollTo({
  top: 0,
  behavior: 'smooth'
});

});
