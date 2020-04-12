/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const c = 2 * Math.PI / Math.sqrt(GM);

  //Orbital period t(alt), where alt is the average altitude of the satellite
  let t = (alt) => {
    let axis = earthRadius + alt; //semi-major axis of orbit
    return c * Math.sqrt(axis ** 3);
  }

  //Iterate through the array and calculate orbital periods
  return arr.map( obj => {
    return {
      name: obj.name,
      "orbitalPeriod": Math.round(t(obj.avgAlt))
    };
  });
}

//console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
