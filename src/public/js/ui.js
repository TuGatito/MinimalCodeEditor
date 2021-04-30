const classBody = "firaCode"
const themeInput = `<input type="text" name="ThemeSelector" id="ThemeSelector" class="themeInput" placeholder="Theme name">`;

const EditingFileText = document.getElementById('EditingFileText');
const optionsInput = document.getElementById('optionsInput');
const CloseWindowButton = document.getElementById('CloseWindowButton');

let pathActualFIle = '';

window.onload = () => {
  ThemeSelect('solarized light')
}

///////////////////
//// LISTENERS ////
///////////////////
CloseWindowButton.addEventListener('click', e => {
  e.preventDefault();
  window.closeApp();
});
///////////////////
///////////////////

//////////////////////
//// KEY BINDINGS ////
//////////////////////
/// OPTIONS ///
// theme
keymage('space o t', function (e) {
  let text = '';
  e.preventDefault();

  ThemeSelectRender();
  const input = document.getElementById('ThemeSelector');
  input.focus();
  input.addEventListener('input', () => {
    text = input.value;
  });
  input.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      console.log('Enter');
      text.toLowerCase
      console.log(text);
      ThemeSelect(text);
      optionsInput.innerHTML = '';
    }
  });
});
// Relative numbers
keymage('space o r', e => {
  e.preventDefault();
  editorOptions.relativeLineNumbers = !editorOptions.relativeLineNumbers;
  console.log(editorOptions.relativeLineNumbers);
  editor.setOption('relativeLineNumbers', editorOptions.relativeLineNumbers);
});
/// FILES ///
// open file
keymage('space f', e => {
  e.preventDefault();
  const {path, data} = window.openFile();
  pathActualFIle = path;
  let mode = modelist.getModeForPath(path).mode;
  editor.insert(data);
  editor.session.setMode(mode);
  EditingFileText.innerText = path
});
// save file
keymage('space s', e => {
  e.preventDefault();
  window.saveFile(pathActualFIle, editor.getValue());
});
//////////////////////
//////////////////////

///////////////////
//// FUNCTIONS ////
///////////////////
// Theme Selector 
function ThemeSelectRender() {
  optionsInput.innerHTML = themeInput;
}
function ThemeSelect(text) {
  switch (text){
    case 'solarized light':
      document.body.className = classBody + ' solarized-light';
      editor.setTheme('ace/theme/solarized_light');
      CloseWindowButton.classList.remove('forDark');
      CloseWindowButton.classList.add('forLight');
      break;
    case 'solarized dark':
      document.body.className = classBody + ' solarized-dark';
      editor.setTheme('ace/theme/solarized_dark');
      CloseWindowButton.classList.remove('forLight');
      CloseWindowButton.classList.add('forDark');
      break;
    case 'monokai':
      document.body.className = classBody + ' monokai';
      editor.setTheme('ace/theme/monokai');
      CloseWindowButton.classList.remove('forLight');
      CloseWindowButton.classList.add('forDark');
      break;
    case 'dracula':
      document.body.className = classBody + ' dracula';
      editor.setTheme('ace/theme/dracula');
      CloseWindowButton.classList.remove('forLight');
      CloseWindowButton.classList.add('forDark');
      break;
    case 'gruvbox':
      document.body.className = classBody + ' gruvbox';
      editor.setTheme('ace/theme/gruvbox');
      CloseWindowButton.classList.remove('forLight');
      CloseWindowButton.classList.add('forDark');
      break;
    case 'nord dark':
      document.body.className = classBody + ' nord-dark';
      editor.setTheme('ace/theme/nord_dark');
      CloseWindowButton.classList.remove('forLight');
      CloseWindowButton.classList.add('forDark');
      break;
    case 'tomorrow':
      document.body.className = classBody + ' tomorrow';
      editor.setTheme('ace/theme/tomorrow');
      CloseWindowButton.classList.remove('forDark');
      CloseWindowButton.classList.add('forLight');
      break;
    default:
      break;
  }
}
///////////////////
///////////////////
