function smoothScroll(event, element) {
  event.preventDefault(); // Prevent default link behavior
  var targetSection = document.getElementById(element); // Get the target section element
  var targetOffsetTop = targetSection.offsetTop - 100; // Get the target section's offset top position and subtract 100 pixels
  window.scrollTo({ top: targetOffsetTop, behavior: 'smooth' }); // Scroll smoothly to the target section with an offset
}