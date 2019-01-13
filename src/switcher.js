

const url = "data/WordsToReplace.json";



async function fetchAsync(url) {
  // await response of fetch call
  let response = await fetch(url);
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}


function replaceWords(data){
    "use strict"    
    
    let regexDict = data.regexDict;
    
    let elements = document.getElementsByTagName('*');
    
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
    
        for (let j = 0; j < element.childNodes.length; j++) {
            let node = element.childNodes[j];
    
            if (node.nodeType === 3) {
                let text = node.nodeValue;
                let replacedText = (' ' + text).slice(1);
                
                for(let key in regexDict){
                    let arr = key.split('/');
                    replacedText = replacedText.replace(new RegExp(arr[0], arr[1]), regexDict[key]);        
                }

    
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}







fetchAsync(chrome.runtime.getURL(url))
    .then(data => replaceWords(data));
  