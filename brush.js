var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  // Contributed by Andres Almiray
  // http://jroller.com/aalmiray/entry/nice_source_code_syntax_highlighter

  var keywords = 'as assert break case catch class continue def default do else extends finally ' +
    'if in implements import instanceof interface new package property return switch ' +
    'throw throws try while public protected private static';
  var types = 'void boolean byte char short int long float double';
  var constants = 'null';
  var methods = 'allProperties count get size ' +
    'collect each eachProperty eachPropertyName eachWithIndex find findAll ' +
    'findIndexOf grep inject max min reverseEach sort ' +
    'asImmutable asSynchronized flatten intersect join pop reverse subMap toList ' +
    'padRight padLeft contains eachMatch toCharacter toLong toUrl tokenize ' +
    'eachFile eachFileRecurse eachB yte eachLine readBytes readLine getText ' +
    'splitEachLine withReader append encodeBase64 decodeBase64 filterLine ' +
    'transformChar transformLine withOutputStream withPrintWriter withStream ' +
    'withStreams withWriter withWriterAppend write writeLine ' +
    'dump inspect invokeMethod print println step times upto use waitForOrKill ' +
    'getText';

  this.regexList = [
    {
      regex: regexLib.singleLineCComments,
      css: 'comments'
    },
    {
      regex: regexLib.multiLineCComments,
      css: 'comments'
    },
    {
      regex: regexLib.doubleQuotedString,
      css: 'string'
    },
    {
      regex: regexLib.singleQuotedString,
      css: 'string'
    },
    {
      regex: /""".*"""/g,
      css: 'string'
    },
    {
      regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'),
      css: 'value'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    },
    {
      regex: new RegExp(this.getKeywords(types), 'gm'),
      css: 'color1'
    },
    {
      regex: new RegExp(this.getKeywords(constants), 'gm'),
      css: 'constants'
    },
    {
      regex: new RegExp(this.getKeywords(methods), 'gm'),
      css: 'functions'
    }
		];

  this.forHtmlScript(regexLib.aspScriptTags);
}

Brush.prototype = new BrushBase();
Brush.aliases = ['groovy'];
module.exports = Brush;