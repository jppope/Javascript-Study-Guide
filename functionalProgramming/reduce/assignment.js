/**
 * Playing with how to map multiple sets of data
 */

const valueData = {
  "7017": "2207",
  "1154": "3605",
  "1154": "3605",
  "1939": "4202",
  "1938": "4202"
}

const data = [
  "7017",
  "1154",
  "1154",
  "1939",
  "1939",
  "1938",
  "1939",
]

// store for new values created by associations
var associations = []

/**
 * Get a count of how many items
 */
var count = data.reduce((total,item) => {
    if(item in total) {
      total[item]++;
    } else {
      total[item] = 1
    }
    return total;
},{})

/**
 * Iterate over the object
 */
Object.entries(count).forEach(([key, value]) => {
  if(valueData[key]){
    let mappedData = {};
    mappedData[valueData[key]] = value;
    associations.push(mappedData);
  }
});

console.log(associations)
