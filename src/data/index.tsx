import * as semester1Module from './semester1';
import * as semester2Module from './semester2';
import * as semester3Module from './semester3';
import * as semester4Module from './semester4';
import * as semester5Module from './semester5';
import * as semester6Module from './semester6';
import * as semester7Module from './semester7';
import * as semester8Module from './semester8';

// Re-export all semester modules
export * as semester1 from './semester1';
export * as semester2 from './semester2';
export * as semester3 from './semester3';
export * as semester4 from './semester4';
export * as semester5 from './semester5';
export * as semester6 from './semester6';
export * as semester7 from './semester7';
export * as semester8 from './semester8';

export const allSubjects = {
  semester1: semester1Module.subjects,
  semester2: semester2Module.subjects,
  semester3: semester3Module.subjects,
  semester4: semester4Module.subjects,
  semester5: semester5Module.subjects,
  semester6: semester6Module.subjects,
  semester7: semester7Module.subjects,
  semester8: semester8Module.subjects,
};