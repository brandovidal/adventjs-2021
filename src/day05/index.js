/**
 * It takes a date as an argument, calculates the number of days between that date and Christmas Day,
 * and returns the result
 * @param {Date} date - The date to compare to Christmas.
 * @returns The number of days until Christmas.
 */
export default function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const ONE_DAY = 1000 * 60 * 60 * 24

    const christmasDay = new Date('Dec 25, 2021').getTime()

    const subtractedDays = christmasDay - date.getTime()

  	const days = Math.ceil(subtractedDays / ONE_DAY)
    
    return days === -0 ? Math.abs(days) : days
}