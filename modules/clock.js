const clock = document.querySelector("#clock");

export const fetchTime = async () => {
  const response = await fetch(
    `https://timeapi.io/api/time/current/zone?timeZone=Australia%2FMelbourne`
  );
  let time = "";
  const data = await response.json();
  const hour = data.hour;
  let minute = data.minute;
  minute = minute.toString().padStart(2, "0");
  let period = "";
  if (hour < 13) {
    period = "AM";
  } else {
    period = "PM";
  }

  time = `${hour} : ${minute} ${period}`;
  return time;
};

export const displayTime = async () => {
  const currentTime = await fetchTime();
  clock.innerText = currentTime;
};

displayTime();
setInterval(displayTime, 6000);
