import { subjectData as es201Data } from './es201/es201';
import { subjectData as cse205Data } from './cse205/cse205';
import { subjectData as math211Data } from './math211/math211';
import { subjectData as cse207Data } from './cse207/cse207';
import { subjectData as csit124Data } from './csit124/csit124';
import { subjectData as ettp100Data } from './ettp100/ettp100';
import { subjectData as lang101Data } from './lang101/lang101';

export { default as es201 } from './es201/es201';
export { default as es201Syllabus } from './es201/es201-syllabus';

export { default as cse205 } from './cse205/cse205';
export { default as cse205Syllabus } from './cse205/cse205-syllabus';

export { default as math211 } from './math211/math211';
export { default as math211Syllabus } from './math211/math211-syllabus';

export { default as cse207 } from './cse207/cse207';
export { default as cse207Syllabus } from './cse207/cse207-syllabus';

export { default as csit124 } from './csit124/csit124';
export { default as csit124Syllabus } from './csit124/csit124-syllabus';

export { default as ettp100 } from './ettp100/ettp100';
export { default as ettp100Syllabus } from './ettp100/ettp100-syllabus';

export { default as lang101 } from './lang101/lang101';
export { default as lang101Syllabus } from './lang101/lang101-syllabus';

export const subjects = {
  es201: es201Data,
  cse205: cse205Data,
  math211: math211Data,
  cse207: cse207Data,
  csit124: csit124Data,
  ettp100: ettp100Data,
  lang101: lang101Data,
};

// Export the subject data for external use
export { es201Data, cse205Data, math211Data, cse207Data, csit124Data, ettp100Data, lang101Data };