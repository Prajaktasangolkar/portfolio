import adobeXd from '../assets/skill/adobe-xd.svg';
import bootstrap from '../assets/skill/bootstrap.svg';
import c from '../assets/skill/c.svg';
import canva from '../assets/skill/canva.svg';
import css from '../assets/skill/css.svg';
import figma from '../assets/skill/figma.svg';
import git from '../assets/skill/git.svg';
import html from '../assets/skill/html.svg';
import java from '../assets/skill/java.svg';
import javascript from '../assets/skill/javascript.svg';
import mongoDB from '../assets/skill/mongoDB.svg';
import mysql from '../assets/skill/mysql.svg';
import numpy from '../assets/skill/numpy.svg';
import opencv from '../assets/skill/opencv.svg';
import python from '../assets/skill/python.svg';
import react from '../assets/skill/react.svg';
import selenium from '../assets/skill/selenium.svg';
import tailwind from '../assets/skill/tailwind.svg';
import vitejs from '../assets/skill/vitejs.svg';
import wordpress from '../assets/skill/wordpress.svg';



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