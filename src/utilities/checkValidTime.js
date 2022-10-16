const convertMeets = (meetTime) => {
    const days = meetTime.split(" ")[0];
    const hours = meetTime.split(" ")[1];
    const startTime = hours.split("-")[0];
    const endTime = hours.split("-")[1];
    return [days, startTime, endTime]
}

// 1 if t1 > t2, 0 if t1 = t2, -1 if t1 < t2
const compareTime = (t1, t2) => {
    if (t1 === t2) return 0;
    const h1 = parseInt(t1.split(':')[0])
    const m1 = parseInt(t1.split(':')[1])
    const h2 = parseInt(t2.split(':')[0])
    const m2 = parseInt(t2.split(':')[1])
    if (h1 > h2) {
        return 1
    }
    else if (h1 < h2){
        return -1
    }
    else {
        return m1 > m2 ? 1 : -1
    }
}
const checkValidTime = (course1, course2) => {
    const time1 = course1.meets;
    const time2 = course2.meets;
    const term1 = course1.term;
    const term2 = course2.term;
    if (term1 !== term2) return true;
    if (time1 === '' || time2 === '') return true; 
    const [days1, startTime1, endTime1] = convertMeets(time1);
    const [days2, startTime2, endTime2] = convertMeets(time2);
    if (days1 === days2) {
        if (compareTime(startTime1, startTime2) !== -1 && compareTime(startTime1, endTime2) !== 1){
            return false
        }
        if (compareTime(startTime2, startTime1) !== -1 && compareTime(startTime2, endTime1) !== 1) {
            return false
        }
    }
    return true
}

export const catchConflicts = (courses, course) => {
    return Object.keys(courses).filter((x) => x !== course && !checkValidTime(courses[x], courses[course]));
}