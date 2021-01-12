function turnOnA() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onA");
  }

  function turnOffA() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offA");
  }

  function turnOnB() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onB");
  }

  function turnOffB() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offB");
  }

  function turnOnC() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onC");
  }

  function turnOffC() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offC");
  }

  function turnOnD() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onD");
  }

  function turnOffD() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offD");
  }

  function allOn() {
    turnOnA();
    turnOnB();
    turnOnC();
    turnOnD();
  }
  function allOff() {
    turnOffA();
    turnOffB();
    turnOffC();
    turnOffD();
  }
  function crazy() {
    turnOffA();
    turnOffB();
    turnOffC();
    turnOffD();

    setTimeout(function() {
      turnOnA();
  }, 1000);
    setTimeout(function() {
      turnOnD();
  }, 2000);
  setTimeout(function() {
    turnOffA();
}, 2000);
  setTimeout(function() {
      turnOnB();
  }, 3000);
  setTimeout(function() {
      turnOnC();
  }, 3000);
  setTimeout(function() {
    turnOnA();
}, 3000);
  setTimeout(function() {
      turnOffD();
  }, 4000);
  setTimeout(function() {
    turnOffA();
}, 4000);
  setTimeout(function() {
      turnOffB();
  }, 5000);
  setTimeout(function() {
    turnOnA();
}, 5000);
  setTimeout(function() {
    turnOffC();
  }, 5000);
  setTimeout(function() {
    turnOnD();
  }, 6000);
  setTimeout(function() {
    turnOffA();
}, 6000);
  setTimeout(function() {
    turnOnB();
  }, 7000);
  setTimeout(function() {
    turnOnA();
}, 7000);
  setTimeout(function() {
    turnOnC();
  }, 7000);
  setTimeout(function() {
    turnOffD();
  }, 8000);
  setTimeout(function() {
    turnOffA();
}, 8000);
  setTimeout(function() {
    turnOffB();
  }, 9000);
  setTimeout(function() {
    turnOnA();
}, 9000);
  setTimeout(function() {
    turnOffC();
  }, 9000);
  setTimeout(function() {
    turnOnD();
  }, 10000);
    setTimeout(function() {
      turnOffA();
  }, 10000);
  setTimeout(function() {
    turnOnB();
  }, 11000);
  setTimeout(function() {
    turnOnA();
}, 11000);
  setTimeout(function() {
    turnOnC();
  }, 11000);
  setTimeout(function() {
    turnOffD();
  }, 12000);
    setTimeout(function() {
      turnOffA();
  }, 12000);
  setTimeout(function() {
    turnOnB();
}, 13000);
setTimeout(function() {
    turnOnC();
}, 13000);
setTimeout(function() {
  turnOnA();
}, 13000);
setTimeout(function() {
    turnOnD();
}, 14000);
setTimeout(function() {
  turnOffA();
}, 14000);
setTimeout(function() {
    turnOffB();
}, 15000);
setTimeout(function() {
  turnOnA();
}, 15000);
setTimeout(function() {
    turnOffC();
}, 15000);
setTimeout(function() {
  turnOffD();
}, 15000);
setTimeout(function() {
  turnOnB();
}, 16000);
setTimeout(function() {
  turnOffA();
}, 16000);
setTimeout(function() {
  turnOnC();
}, 17000);
setTimeout(function() {
  turnOnD();
}, 17000);
setTimeout(function() {
  turnOnA();
}, 17000);
setTimeout(function() {
  turnOffB();
}, 18000);
setTimeout(function() {
  turnOffA();
}, 18000);
setTimeout(function() {
  turnOffC();
}, 19000);
setTimeout(function() {
  turnOffD();
}, 19000);
setTimeout(function() {
  turnOnA();
}, 19000);
setTimeout(function() {
  turnOnB();
}, 20000);
setTimeout(function() {
  turnOnC();
}, 20000);
setTimeout(function() {
  turnOnD();
}, 20000);
setTimeout(function() {
  turnOffA();
}, 20000);

  }
  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
  }

 function playStation() {
    mySound = new sound("Sled-Zeppelin-Clip.mp3");
    mySound.play();
}
function playStationOff() {
  mySound.stop();
}
function allOnFLoop() {
  turnOnA();
  turnOnB();
  turnOnC();
  turnOnD();
}
for(i = 0; i < 120; i++){
  setTimeout(function() {
    turnOnA();
    turnOnB();
    turnOnC();
    turnOnD();
  }, 20000 *i);
  }
  for(i = 0; i < 120; i++){
    setTimeout(function() {
      turnOffA();
      turnOffB();
      turnOffC();
      turnOffD();
    },( 20000 *i) +500);//+ 500 gives it a flash
  }

  
