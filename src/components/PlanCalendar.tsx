import dayjs from 'dayjs'
import CalandarSmallDate from './CalendarSmallDate'
import { getAllDaysInWeek } from '../util/functions' 
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../util/hooks'
import { decrementCounter, incrementCounter, updateNotCurrentWeek } from '../reducers/TodaySlice'
import { useEffect } from 'react'

const PlanCalendar = ():JSX.Element => {
  const dispatch = useAppDispatch()

  const today = useAppSelector((state) => state.today.today)
  const notCurrentWeek = useAppSelector((state) => state.today.notCurrentWeek)
    // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday" ]

    const handleIncrement = () => {
      dispatch(incrementCounter())
      dispatch(updateNotCurrentWeek())
    }

    const handleDecrement = () => {
      dispatch(decrementCounter());
			dispatch(updateNotCurrentWeek());
    }

    // console.log(currentWeek)

  return (
<div>
  <div className={`flex gap-3`}>
    <button onClick={() => handleDecrement()}><FaCaretLeft /></button>
    <h1>July</h1>
    <button onClick={() => handleIncrement()}><FaCaretRight /></button>
  </div>
    <div className='flex justify-around'>
    {notCurrentWeek.map((date) => (
        <CalandarSmallDate date={date} />
    ))}
    </div>
</div>
  )
}

export default PlanCalendar