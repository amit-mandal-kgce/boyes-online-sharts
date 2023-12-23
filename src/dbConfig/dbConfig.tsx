import mongoose from "mongoose";

export async function connectToMongoDB(){
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log('connectDB')
    })

    connection.on('error', (err) => {
      console.log('cannot connectDB' + err)
      process.exit()
    })
  } catch (error) {
    console.log('erroe DB :>>' + error)
  }
}
