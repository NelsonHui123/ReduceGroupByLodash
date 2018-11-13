const assert = require("assert");
const arr = ['one', 'two', 'three'];
const persons = [
    {
      firstName: "Joe",
      lastName: "Dalton"
    },
    {
      firstName: "Willam",
      lastName: "Dalton"
    },
    {
      firstName: "Balthazar",
      lastName: "Picsou"
    }
  ]
const groupBy = (arr, prop) => {
  const type = typeof prop
  let results =  arr.reduce((carry, item) => {
    const key = type === 'function' ? prop(item) : item[prop];
    if (!(key in carry)) {
      carry[key] = [item];
    } else {
      carry[key].push(item);
    }
    return carry;
  }, {})
  console.log(results)
  return results;
};

assert.deepStrictEqual(groupBy(['one', 'two', 'three'], 'length'), { '3': ['one', 'two'], '5': ['three'] });
assert.deepStrictEqual(groupBy(persons, "lastName"), {Dalton: [
    {
      firstName: "Joe",
      lastName: "Dalton"
    },
    {
      firstName: "Willam",
      lastName: "Dalton"
    }], Picsou:[    {
          firstName: "Balthazar",
          lastName: "Picsou"
        }]});

assert.deepStrictEqual(groupBy([6.1, 4.2, 6.3], Math.floor), { '4': [4.2], '6': [6.1, 6.3] });
