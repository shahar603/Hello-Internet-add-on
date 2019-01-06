const fs = require("fs");




RegexDict = {
    "derek/g": "drik",
    "Derek/g": "Dirk",
    "veritasium/g": "verastablium",
    "Veritasium/g": "Verastablium",
    "Grenfell Centre/gi": "Mighty Black Stamp",
    "Black Stump|Mighty Black Stump/gi": "Mighty Black Stump",
    "The Grenfell Centre/gi": "The Mighty Black Stamp",
    "The Black Stump|The Mighty Black Stump/gi": "The Mighty Black Stump",
}




DerekNames = ["dirk", "durk", "duke of venezuela"];
VeritasiumNames = ["verastablium", "veretasium"];



data = new Object();
data.derekNames = DerekNames;
data.veritasiumNames = VeritasiumNames;
data.regexDict = RegexDict;



fs.writeFile("WordsToReplace.json", JSON.stringify(data), function(err, file) {
    if (err) throw err;
    
   console.log("Saved");
});