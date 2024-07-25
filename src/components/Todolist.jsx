// src/components/Todolist.jsx
import React, { useState, useEffect } from 'react';

import Todohead from './Todohead';
import Todocreate from './Todocreate';
import Todoitem from './Todoitem';
// import ThemeButton from './ThemeButton';

const Todolist = ({currentDate}) => {
  const [todos, setTodos] = useState([]); // 할 일 목록을 저장할 상태
  // 현재 날짜의 투두리스트 로드
  useEffect(() => {
    if (!(currentDate instanceof Date)) return;

    const dateKey = currentDate.toISOString().split('T')[0];
    const savedTodos = JSON.parse(localStorage.getItem(dateKey)) || [];
    setTodos(savedTodos);
  }, [currentDate]);

  // 투두리스트가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    if (!(currentDate instanceof Date)) return;

    const dateKey = currentDate.toISOString().split('T')[0];
    localStorage.setItem(dateKey, JSON.stringify(todos));
  }, [todos, currentDate]);

  // 00시가 되면 새로운 날의 투두리스트로 초기화
  useEffect(() => {
    const checkDateChange = () => {
      const currentDateKey = new Date().toISOString().split('T')[0];
      const dateKey = currentDate.toISOString().split('T')[0];
      if (currentDateKey !== dateKey) {
        localStorage.setItem(dateKey, JSON.stringify(todos));
        setTodos([]);
      }
    };

    const intervalId = setInterval(checkDateChange, 60000); // 1분마다 날짜 변경 체크

    return () => clearInterval(intervalId);
  }, [currentDate, todos]);

  // // 로컬스토리지에서 투두 리스트를 불러옴
  // useEffect(() => {
  //   const savedTodos = localStorage.getItem('todos');
  //   if (savedTodos) {
  //     setTodos(JSON.parse(savedTodos));
  //   }
  // }, []);

  // //투두 리스트를 로컬스토리지에 저장
  // const saveTodos = (newTodos) => {
  //   setTodos(newTodos);
  //   localStorage.setItem('todos', JSON.stringify(newTodos));
  // };

// 새로운 할 일을 추가하는 함수
const addTodo = (text) => {
  const newTodos = [...todos, { text, completed: false }];
  setTodos(newTodos);
};

// 할 일의 완료 상태를 토글하는 함수
const toggleTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].completed = !newTodos[index].completed;
  setTodos(newTodos);
};

// 할 일을 삭제하는 함수
const removeTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

// 할 일을 수정하는 함수
const updateTodo = (index, newText) => {
  const newTodos = [...todos];
  newTodos[index].text = newText;
  setTodos(newTodos);
};

  return (
    <>
    <Todohead />
    <div className="flex flex-col items-center">
      {/* <ThemeButton /> */}
      <div className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md mt-4">
        {/* 새로운 할 일을 추가하는 컴포넌트 */}
        <Todocreate addTodo={addTodo} />
        <ul >
          {todos.map((todo, index) => (
            // 개별 할 일을 표시하는 컴포넌트
            <Todoitem
              key={index}
              todo={todo}
              toggleTodo={() => toggleTodo(index)}
              removeTodo={() => removeTodo(index)}
              updateTodo={(newText) => updateTodo(index, newText)}
            />
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Todolist;
