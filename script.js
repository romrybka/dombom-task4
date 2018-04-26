

function applyLanguage (lang) {
	alert('now language is: ' + lang);
}

function getCurrentLanguage () {
  let defaultLanguage = 'ua';
  let langInStorage = window.localStorage.getItem('lang');
  
  if (!langInStorage) {
    return defaultLanguage;
  } else if (langInStorage != defaultLanguage) {
    defaultLanguage = langInStorage;
    return defaultLanguage
  } else {
    return defaultLanguage;
  }
}

function showElements (arr) {
  for (let i = 0; i < arr.length; i++ ) {
    let el = arr[i];
    // langEl.style.display = 'inline';
    el.classList.add('visible');
  }
}

function hideElements (arr) {
  arr.forEach(function(el) {
    if (el.className.indexOf('visible') != -1) {
      el.classList.remove('visible');
    }
  })
}

const currentLang = getCurrentLanguage();
const langEls = document.getElementsByClassName('lang-' + currentLang);

showElements(langEls);

// $<prefix> == DOMElement
let $save = document.querySelector("button[type='submit']");

$save.addEventListener('click', function(){
  const radioButtons = document.querySelectorAll("input[type='radio']");
  const langElsAll = document.querySelectorAll('.lang');
  
  var lang;
  
	radioButtons.forEach(function(button) {
      if ( button.checked === true ) {
        lang = button.value;
        window.localStorage.setItem('lang', lang);  
      }
  });
  
  applyLanguage(lang);

  hideElements(langElsAll);

  // let langEls = document.getElementsByClassName('lang-' + lang);
  let langEls = document.querySelectorAll(`.lang-${lang}`);
  
  showElements(langEls);

});