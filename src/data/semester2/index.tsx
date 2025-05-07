import { subjectData as es103Data } from './es103/es103';
import { subjectData as es104Data } from './es104/es104';
import { subjectData as it423Data } from './it423/it423';
import { subjectData as chem136Data } from './chem136/chem136';
import { subjectData as math122Data } from './math122/math122';
import { subjectData as bc106Data } from './bc106/bc106';
import { subjectData as lang101Data } from './lang101/lang101';

export { default as es103 } from './es103/es103';
export { default as es103Syllabus } from './es103/es103-syllabus';

export { default as es104 } from './es104/es104';
export { default as es104Syllabus } from './es104/es104-syllabus';

export { default as it423 } from './it423/it423';
export { default as it423Syllabus } from './it423/it423-syllabus';

export { default as chem136 } from './chem136/chem136';
export { default as chem136Syllabus } from './chem136/chem136-syllabus';

export { default as math122 } from './math122/math122';
export { default as math122Syllabus } from './math122/math122-syllabus';

export { default as bc106 } from './bc106/bc106';
export { default as bc106Syllabus } from './bc106/bc106-syllabus';

export { default as lang101 } from './lang101/lang101';
export { default as lang101Syllabus } from './lang101/lang101-syllabus';

export const subjects = {
  es103: es103Data,
  es104: es104Data,
  it423: it423Data,
  chem136: chem136Data,
  math122: math122Data,
  bc106: bc106Data,
  lang101: lang101Data,
};

// Export the subject data for external use
export { es103Data, es104Data, it423Data, chem136Data, math122Data, bc106Data, lang101Data };