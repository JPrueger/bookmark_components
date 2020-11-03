const postDataService = {
  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * Speichert einen neuen Post
   */
  store: (postData) => {
    // ACHTUNG: wir verwenden hier Promise nur, um aus LocalStorage auch ein "Promise" zu machen (damit haben wir dann sowohl bei Laravel, als auch LocalStorage genau den gleichen Funktionsaufruf)
    // würden wir nicht beide Aufbauten gleichzeitig machen, könnte man sich das ganze Promise/resolve, ... sparen und es einfach direkt wieder zurückgeben
    return new Promise((resolve) => {
      // holen wir uns die aktuellen posts aus localStorage
      const allSuggestions = JSON.parse(localStorage.getItem("suggestions")) || [];

      // jeder Eintrag benötigt eine eindeutige id
      // normalerweise macht das Laravel automatisch. Mit Localstorage müssen wir uns hier händisch etwas ausdenken, dass sich nie wiederholen kann bzw. eher unwahrscheinlich ist -> zufällige Zahl
      postData.id = Math.random();

      // nun fügen wir diesen neuen Post an das Ende all unserer Posts
      allSuggestions.push(postData);

      // speichere die Daten in localstorage
      // Da localStorage nur "strings" speichern kann und keine echten Javascript Objekte, müssen wir es mit JSON.stringify in einen String verwandeln
      localStorage.setItem("suggestions", JSON.stringify(allSuggestions));

      // gib die neu gespeicherten Daten (alle Posts inklusive dem Neuen) an das "Promise" zurück
      return resolve(allSuggestions);
    });
  },

  storeFirstStep: (postData) => {
    // ACHTUNG: wir verwenden hier Promise nur, um aus LocalStorage auch ein "Promise" zu machen (damit haben wir dann sowohl bei Laravel, als auch LocalStorage genau den gleichen Funktionsaufruf)
    // würden wir nicht beide Aufbauten gleichzeitig machen, könnte man sich das ganze Promise/resolve, ... sparen und es einfach direkt wieder zurückgeben
    return new Promise((resolve) => {
      // holen wir uns die aktuellen posts aus localStorage
      const allSuggestions = JSON.parse(localStorage.getItem("suggestions")) || [];

      // jeder Eintrag benötigt eine eindeutige id
      // normalerweise macht das Laravel automatisch. Mit Localstorage müssen wir uns hier händisch etwas ausdenken, dass sich nie wiederholen kann bzw. eher unwahrscheinlich ist -> zufällige Zahl
      postData.id = Math.random();

      // nun fügen wir diesen neuen Post an das Ende all unserer Posts
      // allSuggestions.push(postData);

      // speichere die Daten in localstorage
      // Da localStorage nur "strings" speichern kann und keine echten Javascript Objekte, müssen wir es mit JSON.stringify in einen String verwandeln
      localStorage.setItem("suggestions", JSON.stringify(allSuggestions));

      // gib die neu gespeicherten Daten (alle Posts inklusive dem Neuen) an das "Promise" zurück
      return resolve(allSuggestions);
    });
  },

  storeRegistration: (postData) => {
    // ACHTUNG: wir verwenden hier Promise nur, um aus LocalStorage auch ein "Promise" zu machen (damit haben wir dann sowohl bei Laravel, als auch LocalStorage genau den gleichen Funktionsaufruf)
    // würden wir nicht beide Aufbauten gleichzeitig machen, könnte man sich das ganze Promise/resolve, ... sparen und es einfach direkt wieder zurückgeben
    return new Promise((resolve) => {
      // holen wir uns die aktuellen posts aus localStorage
      const allRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];

      // jeder Eintrag benötigt eine eindeutige id
      // normalerweise macht das Laravel automatisch. Mit Localstorage müssen wir uns hier händisch etwas ausdenken, dass sich nie wiederholen kann bzw. eher unwahrscheinlich ist -> zufällige Zahl
      postData.id = Math.random();

      // nun fügen wir diesen neuen Post an das Ende all unserer Posts
      allRegistrations.push(postData);

      // speichere die Daten in localstorage
      // Da localStorage nur "strings" speichern kann und keine echten Javascript Objekte, müssen wir es mit JSON.stringify in einen String verwandeln
      localStorage.setItem("registrations", JSON.stringify(allRegistrations));

      // gib die neu gespeicherten Daten (alle Posts inklusive dem Neuen) an das "Promise" zurück
      return resolve(allRegistrations);
    });
  },


  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * Gibt eine Liste mit allen Posts zurück
   */
  index: () => {
    return new Promise((resolve) => {

      // SIMONS
      // console.log(typeof localStorage.getItem("suggestions"))
      // console.log(localStorage.getItem("suggestions"))

      // const suggestions = JSON.parse(localStorage.getItem("suggestions"));
      // console.log(typeof suggestions)
      // console.log(suggestions)

      const suggestions = JSON.parse(localStorage.getItem("suggestions"));
      console.log(suggestions)

      const firstArray = suggestions[0];
      console.log(typeof firstArray)
      const firstObjectInArray  = Object.entries(firstArray);
      console.log(firstObjectInArray)

      const secondArray = suggestions[1];
      console.log(typeof secondArray)
      const secondObjectInArray  = Object.entries(secondArray);
      console.log(secondObjectInArray)

      const thirdArray = firstObjectInArray.concat(secondObjectInArray);
      console.log(typeof thirdArray)
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
      // SIMONS END

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
      // hol die posts aus localStorage (und verwandel sie mit JSON.parse ) vom String wieder in ein Javascript Objekt
      const registrations = JSON.parse(localStorage.getItem("registrations"));

      // wenn noch nichts im localstorage ist -> würden wir "null" returnen. Wir wollen hier aber sichergehen, dass immer ein Array zurückgegeben wird. Daher setzen wir es in diesem Fall als leeres Array
      if (!registrations) {
        return [];
      }

      // übergib sie mit resolve an das "Promise"
      return resolve(registrations);
    });
  },

  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * Gibt nur einen spezifischen Post
   */
  find: (suggestionId) => {
    return new Promise((resolve, reject) => {
      // hol alle posts aus localStorage (und verwandel sie mit JSON.parse ) vom String wieder in ein Javascript Objekt
      const suggestions = JSON.parse(localStorage.getItem("suggestions"));

      let theCorrectSuggestion = null;

      // Das hier ist jetzt nur etwas komplexer, da wir hier eigentlich die Arbeit machen, die sonst Laravel machen würden
      // wir müssen aus allen Posts, die wir haben den richtigen Post mit der korrekten id finden
      suggestions.map((suggestion) => {
        if (suggestion.id == suggestionId) {
          theCorrectSuggestion = suggestion;
        }

        return;
      });

      // falls wir den Post gefunden haben -> löse das Versprechen ein (resolve)
      if (theCorrectSuggestion) {
        resolve(theCorrectSuggestion);
        return;
      }

      // Ansonsten, falls der Post nicht gefunden wurde -> gib einen Fehler zurück
      reject("Der Post " + suggestionId + " wurde nicht gefunden!");
    });
  },

  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * Update einen speziellen Post
   */
  update: (suggestionId, newData) => {
    return new Promise((resolve, reject) => {
      // hol alle posts aus localStorage (und verwandel sie mit JSON.parse ) vom String wieder in ein Javascript Objekt
      const suggestions = JSON.parse(localStorage.getItem("suggestions"));

      let theCorrectSuggestion = null;

      // Das hier ist jetzt nur etwas komplexer, da wir hier eigentlich die Arbeit machen, die sonst Laravel machen würden
      // wir müssen aus allen Posts, die wir haben den richtigen Post mit der korrekten id finden
      const updatedSuggestions = suggestions.map((suggestion) => {
        // falls es der Post ist, den wir haben wollen -> tausche die Daten durch die neuen Datenn aus
        if (suggestion.id == suggestionId) {
          theCorrectSuggestion = newData;
          return newData;
        }

        // ansonsten gib genau den zurück, der auch im Array steht
        return suggestion;
      });

      // speicher das gesamte neue Posts array in localstorage ab
      localStorage.setItem("suggestions", JSON.stringify(updatedSuggestions));

      // falls wir den Post gefunden haben -> löse das Versprechen ein (resolve)
      if (theCorrectSuggestion) {
        resolve(theCorrectSuggestion);
        return;
      }

      // Ansonsten, falls der Post nicht gefunden wurde -> gib einen Fehler zurück
      reject("Der Post " + suggestionId + " wurde nicht gefunden!");
    });
  },

  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * Löscht einen speziellen Post
   */
  delete: (suggestionId) => {
    return new Promise((resolve) => {
      // hol alle posts aus localStorage (und verwandel sie mit JSON.parse ) vom String wieder in ein Javascript Objekt
      const suggestions = JSON.parse(localStorage.getItem("suggestions"));

      // Das hier ist jetzt nur etwas komplexer, da wir hier eigentlich die Arbeit machen, die sonst Laravel machen würden
      // wir müssen aus allen Posts, die wir haben den richtigen Post mit der korrekten id finden und mit Hilfe der "filter" Methode aus dem Array entfernen
      const updatedSuggestions = suggestions.filter((suggestion) => {
        return suggestion.id != suggestionId;
      });

      // speicher das gesamte neue Posts array in localstorage ab
      localStorage.setItem("suggestions", JSON.stringify(updatedSuggestions));

      resolve(true);
    });
  },
};

export default postDataService;
