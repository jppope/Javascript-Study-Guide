/**
 * Playing with how to map multiple sets of data
 */

const mapToData = {
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

var count = data.reduce((total,item) => {
    if(item in total) {
      total[item]++;
    } else {
      total[item] = 1
    }
    return total;
},{})
console.log(count);

//var mappedData = mapToData.reduce((total,item) => {return total},{})
