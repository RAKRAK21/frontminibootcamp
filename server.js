const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Todo = require('./models/todo');

// 환경 변수 로드
dotenv.config();

// Express 앱 생성
const app = express();

// 미들웨어 설정
app.use(express.json());

// MongoDB 연결
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // 연결에 실패하면 프로세스를 종료합니다.
  });

// 라우트 설정

// 모든 할 일 가져오기
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 새로운 할 일 추가
app.post('/todos', async (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 서버 시작
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Trying another port...`);
      startServer(port + 1); // 포트 충돌 시 다음 포트를 시도
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });
};

const PORT = process.env.PORT || 3000;
startServer(PORT);
