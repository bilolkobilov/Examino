import { subjectData as es204Data } from './es204/es204';
import { subjectData as math242Data } from './math242/math242';
import { subjectData as cse202Data } from './cse202/cse202';
import { subjectData as csit206Data } from './csit206/csit206';
import { subjectData as it201Data } from './it201/it201';
import { subjectData as aiml201Data } from './aiml201/aiml201';
import { subjectData as csit118Data } from './csit118/csit118';
import { subjectData as lang101Data } from './lang101/lang101';

export { default as es204 } from './es204/es204';
export { default as es204Syllabus } from './es204/es204-syllabus';

export { default as math242 } from './math242/math242';
export { default as math242Syllabus } from './math242/math242-syllabus';

export { default as cse202 } from './cse202/cse202';
export { default as cse202Syllabus } from './cse202/cse202-syllabus';

export { default as csit206 } from './csit206/csit206';
export { default as csit206Syllabus } from './csit206/csit206-syllabus';

export { default as it201 } from './it201/it201';
export { default as it201Syllabus } from './it201/it201-syllabus';

export { default as aiml201 } from './aiml201/aiml201';
export { default as aiml201Syllabus } from './aiml201/aiml201-syllabus';

export { default as csit118 } from './csit118/csit118';
export { default as csit118Syllabus } from './csit118/csit118-syllabus';

export { default as lang101 } from './lang101/lang101';
export { default as lang101Syllabus } from './lang101/lang101-syllabus';

export const subjects = {
  es204: es204Data,
  math242: math242Data,
  cse202: cse202Data,
  csit206: csit206Data,
  it201: it201Data,
  aiml201: aiml201Data,
  csit118: csit118Data,
  lang101: lang101Data,
};

// Export the subject data for external use
export { es204Data, math242Data, cse202Data, csit206Data, it201Data, aiml201Data, csit118Data, lang101Data };