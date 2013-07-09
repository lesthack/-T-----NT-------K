var xlate = {
"A" : "ᗩ",
"B" : "ᗷ",
"C" : "ᑕ",
"D" : "ᗞ",
"E" : "ᕮ",
"F" : "ᖴ",
"G" : "G",
"H" : "ᕼ",
"I" : "I",
"J" : "ᒍ",
"K" : "K",
"L" : "ᒪ",
"M" : "ᙢ",
"N" : "N",
"O" : "〇",
"P" : "ᖘ",
"Q" : "ᖗ",
"R" : "ᖇ",
"S" : "ᔕ",
"T" : "T",
"U" : "ᑌ",
"V" : "ᐯ",
"W" : "ᕫ",
"X" : "᙭",
"Y" : "ᖻ",
"Z" : "ᙆ"
};

function chText(text){
    ftext = text.value.toUpperCase();
    for(var x in xlate)
        ftext = ftext.replace( new RegExp(x, "g"), xlate[x]);
    text.value = ftext;
}
