// Given a string determine the largets substring of unique letters.

// e.g hellothere -> lother

const uniqueLetterStreak = (string) => {
  let window = {},
    windowStart = 0,
    windowEnd = 0,
    subStringRecord = {};

  while (windowEnd < string.length) {
    const char = string[windowEnd];
    if (!window[char]) {
      window[char] = windowEnd;
      windowEnd++;
    } else {
      const windowLength = windowEnd - windowStart
      subStringRecord =
        subStringRecord.length > windowLength
          ? subStringRecord
          : {
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

  subStringRecord.length > windowEnd - windowStart
    ? subStringRecord
    : {
        subString: string.slice(windowStart, windowEnd),
        length: windowEnd - windowStart,
        start: windowStart,
        end: windowEnd - 1,
      };

  return subStringRecord;
};

console.log(uniqueLetterStreak("heleothlre"));
