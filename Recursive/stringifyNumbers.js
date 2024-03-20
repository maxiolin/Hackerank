// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

const stringifyNumbers = (obj) => {
  const newObject = {};
  const keys = Object.keys(obj);

  if (keys.length === 0) return 0;

  keys.forEach((key) => {
    if (typeof obj[key] === "number") newObject[key] = obj[key].toString();
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key]))
      newObject[key] = stringifyNumbers(obj[key]);
    else newObject[key] = obj[key];
  });

  return newObject;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
