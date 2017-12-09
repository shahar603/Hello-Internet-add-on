
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/derek/g, 'drik');
            replacedText = replacedText.replace(/Derek/g, 'Dirk');
            replacedText = replacedText.replace(/veritasium/g, 'verastablium');
            replacedText = replacedText.replace(/Veritasium/g, 'Verastablium');
            replacedText = replacedText.replace(/Grenfell Centre/i, 'The Mighty Black Stamp');
            replacedText = replacedText.replace(/Black Stump|Mighty Black Stump/gi, 'Mighty Black Stump');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

