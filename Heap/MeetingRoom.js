const myAnswer = (intervals) => {
  const start = [];
  const end = [];
  intervals.forEach((value) => {
    start.push(value[0]);
    end.push(value[1]);
  });
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let rooms = 0;
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr1 < start.length) {
    if (start[ptr1] < end[ptr2]) {
      ptr1++;
      rooms++;
    } else {
      ptr1++;
      ptr2++;
    }
  }
  return rooms;
};

var minMeetingRooms = function (intervals) {
  // handle edge case
  const iLen = intervals.length;
  if (iLen < 2) return iLen;

  // create two arrays of start and end times
  const start = [],
    end = [];
  for (let i = 0; i < iLen; i++) {
    start.push(intervals[i][0]);
    end.push(intervals[i][1]);
  }

  // sort both arrays
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  // create roomCount, and end pointer
  let roomCount = 0,
    endPtr = 0;

  // loop start times
  for (const s of start) {
    // if end and start times overlaps, need a new room
    if (end[endPtr] > s) roomCount++;
    // otherwise, don't need a new room, move onto next end time
    else endPtr++;
  }

  return roomCount;
};
