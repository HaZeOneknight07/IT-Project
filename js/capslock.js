document.getElementById('password').addEventListener('keyup', function(event) {
    var capsLockEnabled = event.getModifierState && event.getModifierState('CapsLock');
    var warningElement = document.querySelector('.caps-lock-warning');
    if (capsLockEnabled) {
      warningElement.style.display = 'block';
    } else {
      warningElement.style.display = 'none';
    }
  });