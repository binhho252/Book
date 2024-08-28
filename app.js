const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/book', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware để xử lý JSON
app.use(express.json());

// Các route sẽ được định nghĩa ở đây
const BinhRouter=require('./routers/book')
app.use('/book',BinhRouter)
app.use(express.json)
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
