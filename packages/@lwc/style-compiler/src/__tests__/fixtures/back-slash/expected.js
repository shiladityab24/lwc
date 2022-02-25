function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".foo" + shadowSelector + " {content: \"\\\\\";}";
  /*LWC compiler vX.X.X*/
}
export default [stylesheet];