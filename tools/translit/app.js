/* global ta7uul, jsyaml, source, uploadMapping, selectMapping, textTransliterated, placeholderTransliterated */

let fadeTimer;
let mappings = { Direct: {} };

const PERSISTANCE = {
  YAML: 'transliterator__yaml',
  SELECTION: 'transliterator__selection'
};

function remap(str, table) {
  const C = Math.max(1, ...Object.keys(table).map(k => k.length));

  let tra = "";
  for (let i = 0; i < str.length; i++) {
    for (let l = C; l >= 0; l--) {
      if (l === 0) {
        tra += table[''] || str[i];
        break;
      }
      const chunk = str.substr(i, l);
      const traChunk = findChunk(chunk, table);
      if (traChunk !== void 0) {
        tra += traChunk;
        i += l - 1;
        break;
      }
    }
  }
  return tra;
}

function findChunk(chunk, table) {
  if (table.hasOwnProperty(chunk)) {
    return table[chunk];
  }

  if (isUpperCase(chunk)) {
    const uChunk = chunk.toLocaleUpperCase();
    if (table.hasOwnProperty(uChunk)) {
      return table[uChunk].toLocaleUpperCase();
    }
  }

  if (isLowerCase(chunk)) {
    const lChunk = chunk.toLocaleLowerCase();
    if (table.hasOwnProperty(lChunk)) {
      return table[lChunk].toLocaleLowerCase();
    }
  }

  return void 0;
}

function isUpperCase(str) {
  const firstChar = str[0];
  return firstChar.toLocaleUpperCase() === firstChar;
}

function isLowerCase(str) {
  const firstChar = str[0];
  return firstChar.toLocaleLowerCase() === firstChar;
}

function retransliterate() {
  const table = mappings[selectMapping.value];
  if (table) {
    textTransliterated.textContent = remap(source.value, table);
  } else {
    textTransliterated.textContent = source.value;
  }
}

function onChangeMapping() {
  textTransliterated.style.opacity = 0;
  if (fadeTimer) clearTimeout(fadeTimer);
  fadeTimer = setTimeout(function () {
    retransliterate();
    textTransliterated.style.opacity = 1;
    fadeTimer = null;
  }, 150);

  try {
    localStorage.setItem(PERSISTANCE.SELECTION, selectMapping.value);
  } catch (e) {
    console.error('Save selection error', e);
  }
}

function populateMappings(newMappings = mappings) {
  mappings = newMappings;

  selectMapping.innerHTML = '';
  const allRules = Object.keys(mappings);
  allRules.forEach(function (ruleName) {
    const opt = document.createElement("option");
    opt.value = ruleName;
    opt.textContent = ruleName;
    selectMapping.appendChild(opt);
  });

  onChangeMapping();
}

function checkEnter(ev) {
  if (ev.which !== 13)
    return;

  ev.preventDefault();
  source.blur();

  selectTransliteratedContents();
}

function selectTransliteratedContents() {
  const range = document.createRange();
  range.selectNodeContents(textTransliterated);

  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function byLength(a, b) {
  if (a.length > b.length) return -1;
  if (a.length < b.length) return 1;
  return a.localeCompare(b);
}

function parseYaml(str) {
  let parsed;

  try {
    parsed = jsyaml.safeLoad(str);
  } catch (e) {
    throw new Error(`File parsing error:\n${e.message}`);
  }

  try {
    const newMappings = {};

    for (const entry of Object.entries(parsed)) {
      const [schema, table] = entry;
      const resorted = {};
      const keys = Object.keys(table).sort(byLength);

      for (const key of keys) {
        const lowerKey = key.toLocaleLowerCase();
        const upperKey = key.toLocaleUpperCase();
        const value = table[key];

        resorted[key] = value;
        if (!table.hasOwnProperty(lowerKey)) {
          resorted[lowerKey] = value.toLocaleLowerCase();
        }

        if (!table.hasOwnProperty(upperKey)) {
          resorted[upperKey] = value.toLocaleUpperCase();
        }

        newMappings[schema] = resorted;
      }
    }

    return newMappings;
  } catch (e) {
    throw new Error(`File interpretation error:\n${e.stack}`);
  }
}

function loadMapping(e) {
  const [file] = e.target.files;

  if (!file) {
    alert('Error: no files were uploaded');
    return;
  }

  const reader = new FileReader();

  reader.onload = function (evt) {
    let success = false;
    const yaml = evt.target.result;

    try {
      populateMappings(parseYaml(yaml));
      success = true;
    } catch (e) {
      alert(e.message);
    }

    if (success) {
      saveFile(yaml);
    }
  };

  reader.onerror = function () {
    reader.abort();
    alert('Failed to read file contents!');
  };

  reader.readAsText(file, "utf-8");
}

function saveFile(yaml) {
  try {
    localStorage.setItem(PERSISTANCE.YAML, yaml)
  } catch (e) {
    console.error('Save settings error', e);
  }
}

function loadFromStorage() {
  const [yaml, selection] = [
    localStorage.getItem(PERSISTANCE.YAML),
    localStorage.getItem(PERSISTANCE.SELECTION)
  ];

  try {
    const newMappings = yaml ? parseYaml(yaml) : void 0;
    populateMappings(newMappings);
  } catch (e) {
    console.error('Load settings error', e);
  }

  if (mappings[selection]) {
    selectMapping.value = selection;
  }
}

window.onload = function () {
  loadFromStorage();

  uploadMapping.onchange = loadMapping;
  selectMapping.onchange = onChangeMapping;
  source.oninput = retransliterate;
  textTransliterated.onkeyup = checkEnter;
};
