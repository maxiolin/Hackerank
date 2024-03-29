// Given a string determine the largets substring of unique letters.

// e.g hellothere -> lother

const uniqueLetterStreak = (string) => {
  let window = {},
    windowStart = 0,
    windowEnd = 0,
    subStringRecord = { startTime: Date.now() };

  while (windowEnd < string.length) {
    const char = string[windowEnd];
    if (!window[char]) {
      window[char] = windowEnd;
      windowEnd++;
    } else {
      const windowLength = windowEnd - windowStart;
      subStringRecord =
        subStringRecord.length > windowLength
          ? subStringRecord
          : {
              ...subStringRecord,
              subString: string.slice(windowStart, windowEnd),
              length: windowLength,
              start: windowStart,
              end: windowEnd - 1,
            };

      windowStart = window[char] + 1;
      windowEnd = windowStart;
      i = windowStart;
      window = {}; // close the window
    }
  }

  subStringRecord =
    subStringRecord.length > windowEnd - windowStart
      ? subStringRecord
      : {
          ...subStringRecord,
          subString: string.slice(windowStart, windowEnd),
          length: windowEnd - windowStart,
          start: windowStart,
          end: windowEnd - 1,
        };

  subStringRecord.endTime = Date.now();

  return subStringRecord;
};

// Given a string determine the largets substring of unique letters.

// e.g hellothere -> lother

const findLongestSubstring = (string) => {  // Using arrays
  let i,
    window = [],
    windowStart = 0,
    windowEnd = 0,
    subStringRecord = { startTime: Date.now() };

  while (windowEnd < string.length) {
    const char = string[windowEnd];
    if (!window.includes(char)) {
      window.push(char);
      windowEnd++;
    } else {
      subStringRecord =
        subStringRecord.length > window.length
          ? subStringRecord
          : Object.assign(
              subStringRecord,{
              subString: string.slice(windowStart, windowEnd),
              length: window.length,
              start: windowStart,
              end: windowEnd - 1,
            });

      windowStart = windowEnd - (window.length - window.indexOf(char) - 1);
      windowEnd = windowStart;
      i = windowStart;
      window = []; // close the window
    }
  }

  subStringRecord =
    subStringRecord.length > window.length
      ? subStringRecord
      : Object.assign(
        subStringRecord,{
        subString: string.slice(windowStart, windowEnd),
        length: window.length,
        start: windowStart,
        end: windowEnd - 1,
      });

  subStringRecord.endTime = Date.now();

  return subStringRecord.length;
};

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6