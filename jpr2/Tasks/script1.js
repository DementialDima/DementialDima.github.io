function time() {
  let time = new Date();

  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const minuts =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  chas.value = `${hours}:${minuts}:${seconds}`;

  setTimeout("time()", 1000);
}

time();
