import codemirrorCSS from "codemirror/lib/codemirror.css"
import foldgutterCSS from "codemirror/addon/fold/foldgutter.css"
import dialogCSS from "codemirror/addon/dialog/dialog.css"
import matchesonscrollbarCSS from "codemirror/addon/search/matchesonscrollbar.css"

export { default as hintCss } from "codemirror/addon/hint/show-hint.css"
export const css =
  codemirrorCSS +
  "\n" +
  foldgutterCSS +
  "\n" +
  dialogCSS +
  "\n" +
  matchesonscrollbarCSS
