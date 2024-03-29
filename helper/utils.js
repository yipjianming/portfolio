export function diff_year_month_day(dt1, dt2) {
    let display = `${dt1} - `

    if (isNaN(Date.parse(dt1))) {
        return null
    }
    else if (isNaN(Date.parse(dt2))) {
        display += 'Present · '
        dt2 = new Date()
    } else {
        display += `${dt2} · `
    }

    dt1 = Date.parse(dt1)
    dt2 = Date.parse(dt2)

    var time = (dt2 - dt1) / 1000;
    var year = Math.abs(Math.round((time / (60 * 60 * 24 * 365.25))));
    var month = Math.abs(Math.ceil((time % (60 * 60 * 24 * 365.25)) / (60 * 60 * 24 * 7 * 4)));
    if (year === 1) {
        display += `1 yr `
    }
    if (year > 1) {
        display += `${year} yrs `
    }
    if (month === 1) {
        display += `1 mo `
    }
    if (month > 1) {
        display += `${month} mos `
    }
    return display;

}