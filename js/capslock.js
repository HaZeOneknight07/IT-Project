document.getElementById('password').addEventListener('keyup', function(event) {
  var capsLockEnabled = event.getModifierState && event.getModifierState('CapsLock');
  var warningElement = document.querySelector('.caps-lock-warning');
  if (capsLockEnabled) {
      warningElement.classList.add('show');
  } else {
      warningElement.classList.remove('show');
  }
});