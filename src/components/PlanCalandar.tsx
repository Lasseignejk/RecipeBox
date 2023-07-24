import dayjs from 'dayjs'
import CalandarSmallDate from './CalandarSmallDate'
import { getSunday, getAllDaysInWeek } from '../util/functions' 

const PlanCalandar = ():JSX.Element => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday" ]

    // console.log(getSunday())
    console.log(getAllDaysInWeek())

    const today = dayjs().toDate().toDateString()

    // console.log(today)
  return (
<div>
    {/* <span>{startDay} {months[startMonth]} - {endDay} {[endMonth]}</span> */}
    <div>
    {getAllDaysInWeek().map((date) => (
        <CalandarSmallDate date={date} />
    ))}
    </div>
</div>
  )
}

export default PlanCalandar