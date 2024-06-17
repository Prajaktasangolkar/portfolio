import * as adobeXd from './javascript.svg';
import * as bootstrap from './javascript.svg';
import * as c from './javascript.svg';
import * as canva from './javascript.svg';
import * as css from './javascript.svg';
import * as figma from './javascript.svg';
import * as git from './javascript.svg';
import * as html from '../assets/skill/html.svg';
import * as java from './javascript.svg';
import * as javascript from './javascript.svg';
import * as mongoDB from './javascript.svg';
import * as mysql from './javascript.svg';
import * as numpy from './javascript.svg';
import * as opencv from './javascript.svg';
import * as python from './javascript.svg';
import * as react from './javascript.svg';
import * as selenium from './javascript.svg';
import * as tailwind from './javascript.svg';
import * as vitejs from './javascript.svg';
import * as wordpress from './javascript.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'adobe xd':
      return adobeXd;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'c':
      return c;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'selenium':
      return selenium;
    case 'wordpress':
      return wordpress;
    case 'figma':
      return figma;
    case 'canva':
      return canva;
    default:
      break;
  }
}