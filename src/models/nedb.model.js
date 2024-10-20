const Datastore = require('nedb');

// Tạo một database mới, lưu trữ trong file 'data.db'
const db = new Datastore({ filename: 'data.db', autoload: true });

// Thêm một bản ghi vào database
const doc = { name: 'John Doe', age: 30, occupation: 'developer' };
db.insert(doc, function (err, newDoc) {
  if (err) {
    console.log('Error inserting document:', err);
  } else {
    console.log('Document inserted:', newDoc);
  }
});

// Truy vấn database
db.find({ age: 30 }, function (err, docs) {
  if (err) {
    console.log('Error querying database:', err);
  } else {
    console.log('Documents found:', docs);
  }
});
