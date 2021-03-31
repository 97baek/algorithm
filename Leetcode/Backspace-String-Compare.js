const backspaceCompare = (S, T) => {
  //     let array1=S.split('#');
  //     let array2=T.split('#');

  //     console.log(array1, array2)
  //     return array1[array1.length-1]===array2[array2.length-1]?true:false
  let arr1 = [];
  let arr2 = [];
  delBackspace(S, arr1);
  delBackspace(T, arr2);

  return arr1.join() === arr2.join() ? true : false;
};

const delBackspace = (str, arr) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }
};
