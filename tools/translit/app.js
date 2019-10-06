/* global jsyaml, source, uploadMapping, selectMapping, textTransliterated, placeholderTransliterated */

let fadeTimer;
let mappings = { Direct: { maxLength: 0, map: new Map() } };

const PERSISTANCE = {
  YAML: 'transliterator__yaml',
  SELECTION: 'transliterator__selection'
};

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

function onLoadMapping(e) {
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

function onSelectMapping() {
  textTransliterated.style.opacity = 0;
  if (fadeTimer) clearTimeout(fadeTimer);
  fadeTimer = setTimeout(function () {
    updateContents();
    textTransliterated.style.opacity = 1;
    fadeTimer = null;
  }, 150);

  try {
    localStorage.setItem(PERSISTANCE.SELECTION, selectMapping.value);
  } catch (e) {
    console.error('Save selection error', e);
  }
}

function updateContents() {
  const currentSchema = mappings[selectMapping.value];
  const originalText = source.value;
  const transliteratedText = currentSchema
      ? remap(originalText, currentSchema)
      : originalText;

  textTransliterated.textContent = transliteratedText;
}

function remap(str, { maxLength, map }) {
  if (map.size === 0) {
    return str;
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    for (let l = maxLength; l >= 0; l--) {
      if (l > 0) {
        const chunk = str.substr(i, l);
        const transliteratedChunk = findChunk(chunk, map);
        if (transliteratedChunk !== void 0) {
          result += transliteratedChunk;
          i += l - 1;
          break;
        }
      } else {
        result += map.get('') || str[i];
      }
    }
  }

  return result;
}

function findChunk(chunk, table) {
  if (table.has(chunk)) {
    return table.get(chunk);
  }

  const fallbackChunk = isLowerCase(chunk, 0)
    ? chunk.toLocaleLowerCase()
    : chunk.toLocaleUpperCase();

  if (table.has(fallbackChunk)) {
    return mimicCase(table.get(fallbackChunk), chunk);
  }

  return void 0;
}

function mimicCase(str, pattern) {
  let res = '';

  const upper = str.toLocaleUpperCase();
  const lower = str.toLocaleLowerCase();

  for (let i = 0; i < str.length; i++) {
    res += (isLowerCase(pattern, i) ? lower : upper)[i];
  }

  return res;
}

function isLowerCase(str, index = 0) {
  const chr = str[index];
  return chr.toLocaleLowerCase() === chr;
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

  onSelectMapping();
}

function parseYaml(str) {
  let parsed;

  try {
    parsed = jsyaml.safeLoad(str);
  } catch (e) {
    throw new Error(`File parsing error:\n${e.message}`);
  }

  try {
    const schemas = {};

    for (const entry of Object.entries(parsed)) {
      const [name, dictionary] = entry;
      const map = new Map();
      let maxLength = 1;

      for (const key of Object.keys(dictionary)) {
        const value = dictionary[key];

        maxLength = Math.max(value.length, maxLength);
        map.set(key, value);

        const lowerKey = key.toLocaleLowerCase();
        if (!dictionary.hasOwnProperty(lowerKey)) {
          map.set(lowerKey, value.toLocaleLowerCase());
        }

        const upperKey = key.toLocaleUpperCase();
        if (!dictionary.hasOwnProperty(upperKey)) {
          map.set(upperKey, value.toLocaleUpperCase());
        }

        schemas[name] = {
          maxLength,
          map: map,
        };
      }
    }

    return schemas;
  } catch (e) {
    throw new Error(`File interpretation error:\n${e.stack}`);
  }
}


function saveFile(yaml) {
  try {
    localStorage.setItem(PERSISTANCE.YAML, yaml)
  } catch (e) {
    console.error('Save settings error', e);
  }
}

window.onload = function () {
  loadFromStorage();

  uploadMapping.onchange = onLoadMapping;
  selectMapping.onchange = onSelectMapping;
  source.oninput = updateContents;
  textTransliterated.onclick = textTransliterated.onfocus = () => textTransliterated.select();
};
