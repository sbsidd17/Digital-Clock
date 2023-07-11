function updateClock() {
    var now = new Date();
    var time = now.getHours() + ' ' + formatMinutes(now.getMinutes()) + ' ' + formatSeconds(now.getSeconds());
    document.getElementById('time').innerHTML = `
    <div class="hour">
            <h2>${now.getHours()}</h2>
            <p>Hour</p>
        </div>
        <div class="minute">
            <h2>${formatMinutes(now.getMinutes())}</h2>
            <p>Minute</p>
        </div>
        <div class="second">
            <h2>${formatSeconds(now.getSeconds())}</h2>
            <p>Second</p>
        </div>
    `;
    setTimeout(updateClock, 1000);
  }
  
  function formatMinutes(minutes) {
    return minutes < 10 ? '0' + minutes : minutes;
  }
  
  function formatSeconds(seconds) {
    return seconds < 10 ? '0' + seconds : seconds;
  }
  
  updateClock();
  