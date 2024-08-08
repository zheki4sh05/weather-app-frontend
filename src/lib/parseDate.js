export function parseDate(value){ 
 const unixTimestamp = Number.parseInt(value); // Replace with your actual timestamp

// Create a Date object from the timestamp (in milliseconds)
const date = new Date(unixTimestamp * 1000);

// Now let's display it in a friendly format
// const options = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
//   timeZone: 'UTC', // Display in UTC (you can adjust this if needed)
// };

return date



// const formattedDate = date.toLocaleString('en-US', options);



// return date.toLocaleString('en-US', options);

}



