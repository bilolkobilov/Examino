import { subjectData as math114Data } from './math114/math114';
import { subjectData as phys132Data } from './phys132/phys132';
import { subjectData as es101Data } from './es101/es101';
import { subjectData as es202Data } from './es202/es202';
import { subjectData as bc105Data } from './bc105/bc105';
import { subjectData as lang101Data } from './lang101/lang101';
import { subjectData as ettp101Data } from './ettp101/ettp101';

export { default as math114 } from './math114/math114';
export { default as math114Syllabus } from './math114/math114-syllabus';

export { default as phys132 } from './phys132/phys132';
export { default as phys132Syllabus } from './phys132/phys132-syllabus';

export { default as es101 } from './es101/es101';
export { default as es101Syllabus } from './es101/es101-syllabus';

export { default as es202 } from './es202/es202';
export { default as es202Syllabus } from './es202/es202-syllabus';

export { default as bc105 } from './bc105/bc105';
export { default as bc105Syllabus } from './bc105/bc105-syllabus';

export { default as lang101 } from './lang101/lang101';
export { default as lang101Syllabus } from './lang101/lang101-syllabus';

export { default as ettp101 } from './ettp101/ettp101';
export { default as ettp101Syllabus } from './ettp101/ettp101-syllabus';

export const subjects = {
  math114: math114Data,
  phys132: phys132Data,
  es101: es101Data,
  es202: es202Data,
  bc105: bc105Data,
  lang101: lang101Data,
  ettp101: ettp101Data,
};

// Export the subject data for external use
export { math114Data, phys132Data, es101Data, es202Data, bc105Data, lang101Data, ettp101Data };