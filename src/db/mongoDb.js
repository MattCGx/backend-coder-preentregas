import mongoose from 'mongoose';

const connectionString = "mongodb+srv://mattcontrerasg:bTElCdg96IZaQrd3@mattcgx.pwtewoj.mongodb.net/proyectofinal?retryWrites=true&w=majority&appName=MattCgx"

export const initMongoDB = async() => {
    try {
      await mongoose.connect(connectionString);
      console.log('Conectado a la base de datos de MongoDB');
    } catch (error) {
      console.log(`ERROR => ${error}`);
    }
  }