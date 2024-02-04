import { createGlobalStyle } from "styled-components";
import PretendardLight from "assets/fonts/Pretendard-Light.woff2";
import PretendardBold from "assets/fonts/Pretendard-Bold.woff2";
import { COLORS } from "common/colors";

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background: linear-gradient(185deg, ${COLORS.lilac} 0%, ${COLORS.light} 25%, ${COLORS.pastel} 50%, ${COLORS.lavender} 75%, ${COLORS.advent} 100%);
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}
ol, ul, li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: 	none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
    text-decoration: none;
    color: inherit;
}  
input, button, textarea{
    border: none;
    background: inherit;
    font-family: 'Pretendard', sans-serif;
	outline: none;
} 
* { 
    box-sizing: border-box;
}
body::-webkit-scrollbar {
  display: none;
}
#root {
	max-width: 1200px;
	margin: 0 auto;
}
@font-face {
	font-family: 'Pretendard';
	src: url(${PretendardLight}) format('woff2');
	font-weight: 300;
}
@font-face {
	font-family: 'Pretendard';
	src: url(${PretendardBold}) format('woff2');
	font-weight: 700;
} 
body {
	min-height: 100vh;
	font-family: 'Pretendard';
}
`;

export default GlobalStyles;
