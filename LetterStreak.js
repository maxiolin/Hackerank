// Given a string determine the largets substring of unique letters.

// e.g hellothere -> lother

const uniqueLetterStreak = (string) => {
  let window = [],
    windowStart = 0,
    windowEnd = 0,
    subStringRecord = {};

  while (windowEnd < string.length) {
    const char = string[windowEnd];
    if (!window.includes(char)) {
      window.push(char);
      windowEnd++;
    } else {
      subStringRecord =
        subStringRecord.length > window.length
          ? subStringRecord
          : {
              subString: string.slice(windowStart, windowEnd),
              length: window.length,
              start: windowStart,
              end: windowEnd - 1,
            };

      windowStart = windowEnd - (window.length - window.indexOf(char) - 1);
      windowEnd = windowStart;
      i = windowStart;
      window = []; // close the window
    }
  }

  subStringRecord.length > window.length
    ? subStringRecord
    : {
        subString: string.slice(windowStart, windowEnd),
        length: window.length,
        start: windowStart,
        end: windowEnd - 1,
      };

  return subStringRecord;
};

console.log(uniqueLetterStreak("heleothlre"));
