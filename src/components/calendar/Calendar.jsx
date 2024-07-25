import React, {useState} from 'react';
import CalendarHead from './CalendarHead';
import CalendarBody from './CalendarBody';
import TodoModal from './TodoModal';


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const todosForSelectedDate = selectedDate
    ? JSON.parse(localStorage.getItem(selectedDate.toISOString().split('T')[0])) || []
    : [];

  return (
    <div className="calendar-container flex flex-col items-center w-full max-w-4xl mx-auto h-full min-h-[800px]">
      <CalendarHead currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <CalendarBody currentDate={currentDate} onDateClick={handleDateClick}/>
      <TodoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        date={selectedDate}
        todos={todosForSelectedDate}
      />
    </div>
  );
};

export default Calendar;
