(function () {

    var names = ["Deepika", "Shahrukh", "Salman", "Katrina", "Alia", "Amir", "Modi", "Vivek", "Gaurav", "Ritu"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    