// export const fetchTime = async () => {
//   const response = await fetch(
//     `https://timeapi.io/api/time/current/zone?timeZone=Australia%2FMelbourne`
//   );

//   const data = await response.json();
//   const hour = data.hour;
//   const minute = data.minute;
//   let period = "";
//   if (hour < 13) {
//     period = "AM";
//   } else {
//     period = "PM";
//   }
//   const time = `${hour}:${minute} ${period}`;
//   return time;

// };
