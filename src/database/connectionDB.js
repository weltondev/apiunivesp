const mongoose = require('mongoose');

function connection(){
  mongoose.connect(
    `mongodb+srv://admin:admin123@cluster0.oelrajq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(()=>{
    console.log(`Conectado ao MongoDB!`);
  })
  .catch((error)=>{
    console.log(`error`);
  })
}

module.exports = connection;