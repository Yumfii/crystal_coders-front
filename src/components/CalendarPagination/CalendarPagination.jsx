import { format } from 'date-fns';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';
import React from 'react';
import css from './CalendarPagination.module.css';

const CalendarPagination = ({ selectedDate, previousMonth, nextMonth }) => {
  return (
    <div className={css.paginator}>
      <button className={css.paginatorBtn} onClick={previousMonth}>
        <GrFormPrevious size={18} />
      </button>
      <p>{format(selectedDate, 'MMMM, yyyy')}</p>
      <button className={css.paginatorBtn} onClick={nextMonth}>
        <MdNavigateNext size={18} />
      </button>
    </div>
  );
};

export default CalendarPagination;
