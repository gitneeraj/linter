/**
 * Convert an Object of objects into Array of objects so that it can be looped using Array.map()
 * @param {object} obj Object of objects to be converted into Array of objects
 * @returns {array} array of objects
 */
export const objectToArray = obj => {
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
};

/**
 * Get a cookie value by its name
 * @param {string} cname
 * @returns {string} cookie value | ''
 */
export const getCookie = cname => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
};

/**
 * Determines if a given target category is for Free or non-free users
 * @param {string} category category name
 * @returns {boolean}
 */
export const markNonFreeCategory = category => {
  let subscription_plans = JSON.parse(
    localStorage.getItem("subscription_plans")
  );

  for (let i = 0; i < subscription_plans.products.length; i++) {
    if (subscription_plans.products[i].name.toLowerCase() === "free") {
      return !subscription_plans.products[i].threat_categories.includes(
        category
      );
    }
  }
};

export const handleInputChange = event => {
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;

  return { [name]: value };
};
