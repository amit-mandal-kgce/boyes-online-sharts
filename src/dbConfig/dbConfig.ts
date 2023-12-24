// import mongoose from "mongoose";

// export async function connectToMongoDB(){
//   try {
//     mongoose.connect(process.env.MONGO_URI!)
//     const connection = mongoose.connection

//     connection.on('connected', () => {
//       console.log('connectDB')
//     })

//     connection.on('error', (err) => {
//       console.log('cannot connectDB' + err)
//       process.exit()
//     })
//   } catch (error) {
//     console.log('erroe DB :>>' + error)
//   }
// }

import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    const mongoURI = process.env.MONGO_URI?.toString();

    if (!mongoURI) {
      console.error('MONGO_URI is not defined');
      process.exit(1); // Exit the process with an error code
    }

    await mongoose.connect(mongoURI);

    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('Connected to MongoDB');
    });

    connection.on('error', (err) => {
      console.error('Cannot connect to MongoDB: ' + err);
      process.exit(1); // Exit the process with an error code
    });
  } catch (error) {
    console.error('Error connecting to MongoDB: ' + error);
    process.exit(1); // Exit the process with an error code
  }
}
