document.addEventListener('DOMContentLoaded', function() {
    const text = "Dragonfly is a revolutionary platform that leverages autonomous drone technology to collect critical data from forest areas, empowering government authorities to take proactive measures against wildfires.";
    const typingElement = document.getElementById('typing-text');
    let index = 0;
    const typingSpeed = 50; // Typing speed in milliseconds
    const pauseDuration = 1000; // Pause duration before starting to delete
    const deletingSpeed = 50; // Deleting speed in milliseconds
    const loopPause = 1000; // Pause duration before starting to re-type
  
    function typeWriter() {
      if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setTimeout(deleteText, pauseDuration);
      }
    }
  
    function deleteText() {
      if (index > 0) {
        typingElement.innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(deleteText, deletingSpeed);
      } else {
        setTimeout(function() {
          index = 0;
          typeWriter();
        }, loopPause);
      }
    }
  
    typeWriter();
  });
  