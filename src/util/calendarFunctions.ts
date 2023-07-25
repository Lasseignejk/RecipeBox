export const getSunday = () => {
    const today = new Date()
    console.log(today.getDate()) // 24 (date of the month)
    console.log(today.getDay()) // 1 (1 is Monday)
    const sunday = today.getDate() - today.getDay() // 23
    return new Date(today.setDate(sunday)) // sets the new Date's day to the 23rd
}

export const getAllDaysInWeek = (time:string = "", counter:number = 0) => {
    let today = new Date();
	let day = new Date();

    // time not passed, counter passed
    if (time == "" && counter != 0) {
		day.setDate(day.getDate() + counter);

    // both time and counter passed
    } else if (time != "" && counter != 0) {
		day = new Date(time);
		day.setDate(day.getDate() + counter);

    } else if (time != "" && counter == 0) {
        day = new Date(time);
    }
    // neither passed, use today's date 


    const currentWeek = []
    for (let i = 0; i < 7; i++) {
        const dateOfMonth = day.getDate() - day.getDay() + i
        const dateToAdd = new Date(day.setDate(dateOfMonth))
        currentWeek.push({date: dateToAdd.toDateString(), today: today.toDateString() === dateToAdd.toDateString()})
    }
    return currentWeek
}