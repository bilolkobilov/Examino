import { subjectData as law140Data } from './law140/law140';
import { subjectData as soc104Data } from './soc104/soc104';
import { subjectData as aiml301Data } from './aiml301/aiml301';
import { subjectData as cse206Data } from './cse206/cse206';
import { subjectData as it310Data } from './it310/it310';
import { subjectData as csit311Data } from './csit311/csit311';
import { subjectData as etmn100Data } from './etmn100/etmn100';
import { subjectData as etisr101Data } from './etisr101/etisr101';
import { subjectData as lang101Data } from './lang101/lang101';

export { default as law140 } from './law140/law140';
export { default as law140Syllabus } from './law140/law140-syllabus';

export { default as soc104 } from './soc104/soc104';
export { default as soc104Syllabus } from './soc104/soc104-syllabus';

export { default as aiml301 } from './aiml301/aiml301';
export { default as aiml301Syllabus } from './aiml301/aiml301-syllabus';

export { default as cse206 } from './cse206/cse206';
export { default as cse206Syllabus } from './cse206/cse206-syllabus';

export { default as it310 } from './it310/it310';
export { default as it310Syllabus } from './it310/it310-syllabus';

export { default as csit311 } from './csit311/csit311';
export { default as csit311Syllabus } from './csit311/csit311-syllabus';

export { default as etmn100 } from './etmn100/etmn100';
export { default as etmn100Syllabus } from './etmn100/etmn100-syllabus';

export { default as etisr101 } from './etisr101/etisr101';
export { default as etisr101Syllabus } from './etisr101/etisr101-syllabus';

export { default as lang101 } from './lang101/lang101';
export { default as lang101Syllabus } from './lang101/lang101-syllabus';

export const subjects = {
  law140: law140Data,
  soc104: soc104Data,
  aiml301: aiml301Data,
  cse206: cse206Data,
  it310: it310Data,
  csit311: csit311Data,
  etmn100: etmn100Data,
  etisr101: etisr101Data,
  lang101: lang101Data,
};

// Export the subject data for external use
export { law140Data, soc104Data, aiml301Data, cse206Data, it310Data, csit311Data, etmn100Data, etisr101Data, lang101Data };