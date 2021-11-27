export const calcRuntime = (arr: number[]) => {
    const runtimeNum = arr[0];
    let result = '';
    if (runtimeNum > 0) {
        const hour = Math.floor(runtimeNum / 60);
        const minutes = runtimeNum % 60;

        if (hour > 0 && minutes > 0) {
            // Есть и часы и минуты.
            result = `${hour}h ${minutes}m`;
        } else if (hour > 0) {
            // Есть только часы.
            result = `${hour}h`;
        } else if (minutes > 0) {
            // Есть только минуты.
            result = `${minutes}m`;
        }
    }

    return result;
};
