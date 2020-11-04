const postDataService = {

  store: (postData) => {
    return new Promise((resolve) => {

      const allSuggestions = JSON.parse(localStorage.getItem("suggestions")) || [];

      postData.id = Math.random();

      allSuggestions.push(postData);

      localStorage.setItem("suggestions", JSON.stringify(allSuggestions));

      return resolve(allSuggestions);

    });
  },

  storeRegistration: (postData) => {
    return new Promise((resolve) => {

      const allRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];

      postData.id = Math.random();

      allRegistrations.push(postData);

      localStorage.setItem("registrations", JSON.stringify(allRegistrations));

      return resolve(allRegistrations);

    });
  },


  index: () => {
    return new Promise((resolve) => {

      // console.log(typeof localStorage.getItem("suggestions"))
      // console.log(localStorage.getItem("suggestions"))

      // const suggestions = JSON.parse(localStorage.getItem("suggestions"));
      // console.log(typeof suggestions)
      // console.log(suggestions)

      // TODO: Bug entfernen dass Suggestions vom Local Storage 2 x ausgegeben werden (nicht in einer Suggestion gesammelt)

      const suggestions = JSON.parse(localStorage.getItem("suggestions"));
      console.log(suggestions)

      // const firstArray = suggestions[0];
      // console.log(typeof firstArray)
      // const firstObjectInArray  = Object.entries(firstArray);
      // console.log(firstObjectInArray)

      // const secondArray = suggestions[1];
      // console.log(typeof secondArray)
      // const secondObjectInArray  = Object.entries(secondArray);
      // console.log(secondObjectInArray)

      // const thirdArray = firstObjectInArray.concat(secondObjectInArray);
      // console.log(typeof thirdArray)
      // const firstObjectInArray = Object.values(firstArray);
      // console.log(firstObjectInArray)

      // const secondArray = suggestions[1];
      // console.log(typeof secondArray)

      // const thirdArray = firstArray.concat(secondArray);
      // console.log(thirdArray)

      // Array.prototype.push.apply(firstArray, secondArray);
      // console.log(firstArray)

      // const suggestionsValues = Object.values(suggestions)
      // console.log(suggestionsValues)
      // console.log(typeof suggestions)
      // console.log(suggestions)
      // console.log(typeof Object.values(suggestions));
      // console.log(Object.values(suggestions));
      // console.log(Object.assign(suggestions[0], suggestions[1]))
      // let test = Object.assign(suggestions[0], suggestions[1]);
      // console.log(test)
      // console.log(suggestions)

      if (!suggestions) {
        return [];
      }

      return resolve(suggestions);

      // const allSuggestions = localStorage.getItem("suggestions")
      // console.log(allSuggestions)

      // const allSuggestionsObject = JSON.parse(allSuggestions)
      // console.log(allSuggestionsObject)
      // const whatAmI = localStorage.getItem("suggestions");
      // console.log(typeof whatAmI)

      // const suggestionsObject = JSON.parse(localStorage.getItem("suggestions"));
      // console.log(typeof suggestionsObject[0])

      // const suggestions = Object.assign(suggestionsObject[0], suggestionsObject[1]);
      // console.log(typeof suggestions)
      // console.log(suggestions)

      // var suggestions = Object.entries(suggestionsMergedObject).map(([key, value]) => ({key,value}));
      // console.log(suggestions);

      // console.log(suggestions)

      // const suggestions = JSON.parse(localStorage.getItem("suggestions"));
      // console.log(suggestions)

      // wenn noch nichts im localstorage ist -> würden wir "null" returnen. Wir wollen hier aber sichergehen, dass immer ein Array zurückgegeben wird. Daher setzen wir es in diesem Fall als leeres Array
      // if (!suggestions) {
      //   return [];
      // }

      // übergib sie mit resolve an das "Promise"
      // return resolve(Object.values(suggestions));
    });
  },

  indexRegistration: () => {
    return new Promise((resolve) => {
      const registrations = JSON.parse(localStorage.getItem("registrations"));

      if (!registrations) {
        return [];
      }

      return resolve(registrations);
    });
  },

  find: (suggestionId) => {
    return new Promise((resolve, reject) => {

      const suggestions = JSON.parse(localStorage.getItem("suggestions"));

      let theCorrectSuggestion = null;

      suggestions.map((suggestion) => {
        if (suggestion.id == suggestionId) {
          theCorrectSuggestion = suggestion;
        }

        return;
      });

      if (theCorrectSuggestion) {
        resolve(theCorrectSuggestion);
        return;
      }

      reject("Der Post " + suggestionId + " wurde nicht gefunden!");

    });
  },


  update: (suggestionId, newData) => {
    return new Promise((resolve, reject) => {

      const suggestions = JSON.parse(localStorage.getItem("suggestions"));

      let theCorrectSuggestion = null;

      const updatedSuggestions = suggestions.map((suggestion) => {
        if (suggestion.id == suggestionId) {
          theCorrectSuggestion = newData;
          return newData;
        }

        return suggestion;
      });

      localStorage.setItem("suggestions", JSON.stringify(updatedSuggestions));

      if (theCorrectSuggestion) {
        resolve(theCorrectSuggestion);
        return;
      }

      reject("Der Post " + suggestionId + " wurde nicht gefunden!");

    });
  },

  delete: (suggestionId) => {
    return new Promise((resolve) => {
      
      const suggestions = JSON.parse(localStorage.getItem("suggestions"));

      const updatedSuggestions = suggestions.filter((suggestion) => {
        return suggestion.id != suggestionId;
      });

      localStorage.setItem("suggestions", JSON.stringify(updatedSuggestions));

      resolve(true);

    });
  },
};

export default postDataService;
