
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/[^D]derek/gi, 'drik');
            replacedText = replacedText.replace(/Derek/gi, 'Dirk');
            replacedText = replacedText.replace(/[^V]veritasium/gi, 'verastablium');
            replacedText = replacedText.replace(/Veritasium/gi, 'Verastablium');
            replacedText = replacedText.replace(/[Gg]renfell [Cc]entre/gi, 'The Mighty Black Stamp');
            replacedText = replacedText.replace(/[Bb]lack [Ss]tump|[mM]ighty [bB]lack [sS]tump/gi, 'Mighty Black Stump');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

