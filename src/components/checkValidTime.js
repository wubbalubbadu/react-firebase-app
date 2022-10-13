const convertMeets = (meetTime) => {
    const days = meetTime.split(" ")[0];
    const hours = meetTime.split(" ")[1];
    const startTime = hours.split("-")[0];
    const endTime = hours.split("-")[1];
    return [days, startTime, endTime]
}

export const checkValidTime = (courses, selected, meetTime) => {
    if (meetTime === "") {
        return true
    }
    const [days, startTime, endTime] = convertMeets(meetTime);
    for (const x of selected) {
        console.log(meetTime, courses[x].meets)
        if (courses[x].meets !== '') {
            const [thisDays, thisStartTime, thisEndTime] = convertMeets(courses[x].meets);
            if (thisDays === days) {
                if (startTime >= thisStartTime && startTime <= thisEndTime){
                    return false
                }
                else if (thisStartTime >= startTime && thisStartTime <= endTime) {
                    return false
                }
            }
        } 
    }
    return true
}