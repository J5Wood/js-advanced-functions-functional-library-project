const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      for (const key in collection) {
        alert(collection[key]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newArray = [];
      for (const key in collection) {
        newArray.push(callback(collection[key]));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      let i;
      if (!!acc) {
        i = 0;
      } else {
        i = 1;
        acc = collection[0];
      }
      for (i; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, callback) {
      for (const key in collection) {
        if (callback(collection[key])) {
          return collection[key];
        }
      }
    },

    filter: function(collection, callback) {
      const filteredArray = []
      for (const key in collection) {
        if (callback(collection[key])) {
          filteredArray.push(collection[key])
        }
      }
      return filteredArray
    },

    size: function(collection) {
      let counter = 0;
      for (const key in collection) {
        counter++;
      }
      return counter;
    },

    first: function(collection, count = 1) {
      const first = collection.slice(0, count)
      if (first.length === 1) {
        return first[0];
      } else {
        return first
      }
    },

    last: function(collection, count) {
      if (!!count) {
        return collection.slice(-count);
      } else {
        return collection.slice(-1)[0];
      }
    },

    compact: function(collection) {
      const newArray = [];
      for (const key in collection) {
        if (collection[key]) {
          newArray.push(collection[key]);
        }
      }
      return newArray;
    },

    sortBy: function(collection, callback) {
      return [...collection].sort((a,b) => callback(a) - callback(b));
    },

    flatten: function(arr, shallowDepth) {
      let flattenedArray = []
      let len = arr.length
      function flattener(arr) {
        arr = [].concat(...arr)
        if (arr.length === len || shallowDepth === true) {
          flattenedArray = arr
          return flattenedArray
        } else {
          len = arr.length
          flattener(arr)
        }
      }
      flattener(arr)
      return flattenedArray
    },

    uniq: function(collection, isSorted, callback) {
      let unique = [...new Set(collection)];
      if (!!callback) {
        const checkArray = [];
        const newArray = [];
        for (const key in unique) {
          const newValue = callback(unique[key]);
          if (!checkArray.includes(newValue)) {
            checkArray.push(newValue);
            newArray.push(unique[key]);
          }
        }
        unique = newArray;
      }
      return unique
      },

      keys: function(collection) {
        const keyNames = []
        for (const key in collection) {
          keyNames.push(key)
        }
        return keyNames
      },

      values: function(collection) {
        const keyValues = []
        for (const key in collection) {
          keyValues.push(collection[key])
        }
        return keyValues
      },

    functions: function(collection) {
      const methods = []
      for (const key in collection) {
        if (typeof collection[key] === "function") {
          methods.push(key)
        }
      }
      return methods
    },

  }
})()

fi.libraryMethod()
