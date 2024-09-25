import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import CalendarPagination from '../../components/CalendarPagination/CalendarPagination';
import { addMonths, subMonths } from 'date-fns';
import css from './MonthInfo.module.css';
import axios from 'axios';

const MonthInfo = ({ selectedDate, setSelectedDate }) => {
  // !! Check how to get data about percentage of the water
  const [waterData, setWaterData] = useState([]);

    // Fetch water data from API
    const fetchWaterData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          console.error('No authentication token found.');
          return;
        }

        const response = await axios.get(`${BASE_URL}/water/consumption/month`, {
          params: { month },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Fetched Water Data:', response.data);

        if (response.data && response.data.data) {
          setWaterData(response.data.data.data || []);
        }
      } catch (error) {
        console.error('Error fetching water consumption data:', error);
      }
    };


    useEffect(() => {
      if (selectedDate) {
        fetchWaterData();
      } else {
        console.error('selectedDate is null or undefined.');
      }
    }, [selectedDate]);
    // !! Check the part above

  const nextMonth = () => {
    setSelectedDate(prevDate => addMonths(prevDate, 1));
  };

  const previousMonth = () => {
    setSelectedDate(prevDate => subMonths(prevDate, 1));
  };



  return (
    <div className={`${css.monthlyInfo} monthlyInfo`}>
      <div className={css.monthWrapper}>
        <p className={css.monthName}>Month</p>
        <CalendarPagination
          selectedDate={selectedDate}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
        />
      </div>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}
       waterData={waterData}
       />
    </div>
  );
};

export default MonthInfo;
