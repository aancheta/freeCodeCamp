/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  let rex = /[&<>"']/;
  let special = str.match(rex);
  
  if (!special) {return str;}

  //HTML Entities
  let escape = (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '\"':
        return '&quot;';
      case '\'':
        return '&apos;';
      default:
        return null;
    }
  }

  return str.split("")
    .map( char => rex.test(char) ? escape(char) : char)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana's"));


/*
//Alternative: object lookup

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

*/
