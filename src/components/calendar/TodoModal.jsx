import React, { useEffect, useRef } from 'react';

const TodoModal = ({ isOpen, onClose, date, todos }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-xl mb-4">Todos for {date.toLocaleDateString()}</h2>
        <ul>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <li key={index} className="mb-2">
                {todo.text}
              </li>
            ))
          ) : (
            <li>No todos for this date.</li>
          )}
        </ul>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default TodoModal;
