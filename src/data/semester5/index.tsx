import { subjectData as it425Data } from './it425/it425';
import { subjectData as cse204Data } from './cse204/cse204';
import { subjectData as cse201Data } from './cse201/cse201';
import { subjectData as cse303Data } from './cse303/cse303';
import { subjectData as bs309Data } from './bs309/bs309';
import { subjectData as etpt100Data } from './etpt100/etpt100';
import { subjectData as lang101Data } from './lang101/lang101';

export { default as it425 } from './it425/it425';
export { default as it425Syllabus } from './it425/it425-syllabus';

export { default as cse204 } from './cse204/cse204';
export { default as cse204Syllabus } from './cse204/cse204-syllabus';

export { default as cse201 } from './cse201/cse201';
export { default as cse201Syllabus } from './cse201/cse201-syllabus';

export { default as cse303 } from './cse303/cse303';
export { default as cse303Syllabus } from './cse303/cse303-syllabus';

export { default as bs309 } from './bs309/bs309';
export { default as bs309Syllabus } from './bs309/bs309-syllabus';

export { default as etpt100 } from './etpt100/etpt100';
export { default as etpt100Syllabus } from './etpt100/etpt100-syllabus';

export { default as lang101 } from './lang101/lang101';
export { default as lang101Syllabus } from './lang101/lang101-syllabus';

export const subjects = {
  it425: it425Data,
  cse204: cse204Data,
  cse201: cse201Data,
  cse303: cse303Data,
  bs309: bs309Data,
  etpt100: etpt100Data,
  lang101: lang101Data,
};

// Export the subject data for external use
export { it425Data, cse204Data, cse201Data, cse303Data, bs309Data, etpt100Data, lang101Data };