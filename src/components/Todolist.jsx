// src/components/Todolist.jsx
import React, { useState } from 'react';
import Todohead from './Todohead';
import Todocreate from './Todocreate';
import Todoitem from './Todoitem';
import ThemeButton from './ThemeButton';

const Todolist = () => {
  const [todos, setTodos] = useState([]); // 할 일 목록을 저장할 상태

  // 새로운 할 일을 추가하는 함수
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]); // 새로운 할 일을 목록에 추가
  };

  // 할 일의 완료 상태를 토글하는 함수
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed; // 완료 상태를 반전
    setTodos(newTodos); // 업데이트된 목록을 상태에 저장
  };

  // 할 일을 삭제하는 함수
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // 특정 할 일을 목록에서 제거
    setTodos(newTodos); // 업데이트된 목록을 상태에 저장
  };

  // 할 일을 수정하는 함수
  const updateTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText; // 할 일 텍스트 수정
    setTodos(newTodos); // 업데이트된 목록을 상태에 저장
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black flex flex-col items-center">
      {/* 상단에 오늘의 날짜와 명언을 보여주는 컴포넌트 */}
      <Todohead />
      <ThemeButton />
      <div className="w-full max-w-md p-4">
        {/* 새로운 할 일을 추가하는 컴포넌트 */}
        <Todocreate addTodo={addTodo} />
        <ul>
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
  );
};

export default Todolist;
