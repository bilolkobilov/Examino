import { subjectData as etmj100Data } from './etmj100/etmj100';

export { default as etmj100 } from './etmj100/etmj100';
export { default as etmj100Syllabus } from './etmj100/etmj100-syllabus';

export const subjects = {
  etmj100: etmj100Data,
};

// Export the subject data for external use
export { etmj100Data };