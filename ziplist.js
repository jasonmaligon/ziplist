const test1 = [1, 2, 3];
const test2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  if (list1.length === list2.length) {
    const newList = [];
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < (list1.length + list2.length); i++) {
      if (i % 2 === 0) {
        newList[i] = list1[index1];
        index1++;
      } else {
        newList[i] = list2[index2];
        index2++;
      }
    }
    return newList;
  }
  return 'Unequal Length Lists';
}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2) {
  if (list1.length === list2.length) {
    return _.flatten(_.zip(list1, list2));
  }
  return 'Unequal Length Lists';
}

console.log(zipListTheSimpleWay(test1, test2));
