const seriesDurations = [
    {
        title: 'Vikings',
        days: 2,
        hours: 16,
        minutes: 26,
    },
    {
        title: 'The Bridge',
        days: 1,
        hours: 14,
        minutes: 39,
    },
    {
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
]
const lifeSpanInMinutes = 80 * 365 * 24 * 60;
function calculateTotalTime() {
    let totalMinutes = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
        let daysToMinutes = seriesDurations[i].days * 24 * 60;
        let hoursToMinutes = seriesDurations[i].hours * 60;
        let minutes = seriesDurations[i].minutes;
        let totalMinutesPerSeries = daysToMinutes + hoursToMinutes + minutes;
        let timeSpentWatching = (totalMinutesPerSeries / lifeSpanInMinutes) * 100;

        console.log(seriesDurations[i].title + " took " + timeSpentWatching.toFixed(2) + "% of my life");
        totalMinutes += totalMinutesPerSeries;
    }

    return totalMinutes;

}
let totalMinutesOfAllSeries = calculateTotalTime();
let percentageOfLife = (totalMinutesOfAllSeries / lifeSpanInMinutes) * 100;
console.log("In total that is " + percentageOfLife.toFixed(2) + "% of my life")


