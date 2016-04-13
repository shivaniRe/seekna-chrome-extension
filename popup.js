var data = {"facilitating": ["facilitando", "facilitar", "aprovechando", "fortalecer", "mediante"], "imported": ["importadas", "importaciones", "exportada", "exportadas", "importada"], "often": ["menudo", "frecuencia", "frecuentemente", "suelen", "ven"], "language": ["idioma", "dialecto", "lengua", "escritura", "nativo"], "communication": ["comunicaci\u00f3n", "fundo", "fongum", "ahani", "svetik"], "began": ["inicia", "comienza", "prosigue", "concluye", "reanuda"], "documentation": ["documentaci\u00f3n", "yuki", "basse", "documentation", "versaran"], "helped": ["ayudado", "contribuido", "permitido", "procurado", "empezado"], "written": ["escrito", "conciliar\u00e1n", "escritas", "aprobadores", "subregla"], "translators": ["traductores", "revisores", "auxiliares", "electricista", "chofer"], "between": ["entre", "interparlamentaria", "mutuo", "inidep", "negro"], "substantially": ["sustancialmente", "considerablemente", "significativamente", "considerable", "apreciable"], "which": ["cual", "claramente", "literalmente", "concreto", "aparte"]}

function displayTranslation(translatedText) {
  $('#translation').text(translatedText);
};

function getTranslation(word, displayCallback) {
	var translatedText5 = "";

	word = word.toLowerCase();
	$('#selectedword').text(word);
	
	if (Object.keys(data).indexOf(word) !== -1) {
		translatedText5 = data[word];

		var translatedText = ''
		for (i=0; i<3; i++) {
			translatedText += (translatedText5[i] + "\n");
		};
	};

  if (translatedText) {
    displayCallback(translatedText);
  } else {
    displayCallback("Sorry! Word: \'" + word + "\' not found. ")
  };
};


function translate() {
  var word = chrome.extension.getBackgroundPage().selectedWord;
  // var mode = chrome.extension.getBackgroundPage().selectedMode;
  console.log("Translate:", word);
  if (word) {
    getTranslation(word, displayTranslation);
  }; 
};

function load(){
	var mode = chrome.extension.getBackgroundPage().selectedMode;
	$("#lang_dropdown").val(mode);
	translate();
	// $('#translation').text('Please Select a Word')
};

window.onload = load;
window.click = window.close;

$("#lang_dropdown").change(function() {
	var mode = this.value;
	chrome.runtime.sendMessage({"type": "sendMode", "mode": mode});
	translate();
});

$("#searchword").keyup(function(event){
    if(event.keyCode == 13){
        $("#submit").click();
    }
});

$("#submit").click(function() {
	var word = $("#searchword").val();
	chrome.runtime.sendMessage({"type": "sendText", "text": word});
	translate();
	console.log(word)
  if (word) {
    getTranslation(word, displayTranslation);
  }; 
});

// Display either word block or search block 
$(".buttons").click(function(){
	$("#enter_button").toggle();
	$("#back_button").toggle();
	displayTranslation("");

	$("#word").toggle();
	$("#search").toggle();
});
