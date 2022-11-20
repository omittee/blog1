import { connect, connection } from 'mongoose'
export function connectDB() {
  const url = 'mongodb://127.0.0.1:27017/blog1'
  connect(url);
  return new Promise<void>((resolve, reject) =>{
    connection.on('connected', ()=>{
      console.log('connect success');
      resolve();
    })
    connection.on('error', (e)=>{
      console.log('connect fail', e);
      reject();
    })
  }) 
}