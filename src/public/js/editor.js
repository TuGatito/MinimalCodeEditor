ace.require('ace/ext/language_tools');
ace.require('ace/ext/emmet');
let modelist = ace.require('ace/ext/modelist');

const editor = ace.edit("TextEditor");

let FilePath = "";
let ThemeName = "textmate";

let editorOptions = {
  highlightGutterLine: true,
  relativeLineNumbers: true,
  cursorStyle: "slim",
  showPrintMargin: false,
  showInvisibles: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  enableEmmet: true,
  theme: `ace/theme/${ThemeName}`,

};

editor.setOptions({
  highlightGutterLine: editorOptions.highlightGutterLine,
  relativeLineNumbers: editorOptions.relativeLineNumbers,
  cursorStyle: editorOptions.cursorStyle,
  showPrintMargin: editorOptions.showPrintMargin,
  showInvisibles: editorOptions.showInvisibles,
  enableSnippets: editorOptions.enableSnippets,
  enableLiveAutocompletion: editorOptions.enableLiveAutocompletion,
  enableEmmet: editorOptions.enableEmmet,
  theme: editorOptions.theme,

});

let mode = modelist.getModeForPath(FilePath).mode;
editor.session.setMode(mode);
