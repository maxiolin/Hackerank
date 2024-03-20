// Write a function called collectStrings which accepts an object,
// and returns an array of all the values in the object that have a typeof string

const collectStrings = (obj) => {
  const keys = Object.keys(obj)

  if(keys.length === 0)
    return []

  const firstKey = obj[keys[0]];
  delete obj[keys[0]];

  if(typeof firstKey === 'object')
    return collectStrings(firstKey).concat(collectStrings(obj))

  if(typeof firstKey === 'string')
    return [firstKey].concat(collectStrings(obj))

  return collectStrings(obj)
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])