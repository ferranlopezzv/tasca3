function saymyname() {
  console.log('Hello im ferran');
}

function writeCountdown(num) {
  console.log(num);
}

function countdown() {
  let contar = 10; // rename to count

  waitOneSecAndCount = function () {
    if (contar >= 0) {
      writeCountdown(contar);
      contar--;
      
      setTimeout(() => {
        waitOneSecAndCount();
      }, 1000);
    }
  };

  waitOneSecAndCount()
}

saymyname();
countdown();
