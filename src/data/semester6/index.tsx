import { subjectData as cse209Data } from './cse209/cse209';
import { subjectData as csit142Data } from './csit142/csit142';
import { subjectData as cse304Data } from './cse304/cse304';
import { subjectData as cse302Data } from './cse302/cse302';
import { subjectData as it432Data } from './it432/it432';
import { subjectData as pfe301Data } from './pfe301/pfe301';
import { subjectData as sportsData } from './sports/sports';
import { subjectData as lang101Data } from './lang101/lang101';

export { default as cse209 } from './cse209/cse209';
export { default as cse209Syllabus } from './cse209/cse209-syllabus';

export { default as csit142 } from './csit142/csit142';
export { default as csit142Syllabus } from './csit142/csit142-syllabus';

export { default as cse304 } from './cse304/cse304';
export { default as cse304Syllabus } from './cse304/cse304-syllabus';

export { default as cse302 } from './cse302/cse302';
export { default as cse302Syllabus } from './cse302/cse302-syllabus';

export { default as it432 } from './it432/it432';
export { default as it432Syllabus } from './it432/it432-syllabus';

export { default as pfe301 } from './pfe301/pfe301';
export { default as pfe301Syllabus } from './pfe301/pfe301-syllabus';

export { default as sports } from './sports/sports';
export { default as sportsSyllabus } from './sports/sports-syllabus';

export { default as lang101 } from './lang101/lang101';
export { default as lang101Syllabus } from './lang101/lang101-syllabus';

export const subjects = {
  cse209: cse209Data,
  csit142: csit142Data,
  cse304: cse304Data,
  cse302: cse302Data,
  it432: it432Data,
  pfe301: pfe301Data,
  sports: sportsData,
  lang101: lang101Data,
};

// Export the subject data for external use
export { cse209Data, csit142Data, cse304Data, cse302Data, it432Data, pfe301Data, sportsData, lang101Data };