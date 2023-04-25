import mongoose from 'mongoose'

const db = () => {
    mongoose.connect(`mongodb+srv://shivamsharma70950:${process.env.PASSWORD}@cluster0.tqzpa5t.mongodb.net/?retryWrites=true&w=majority`).then((data) => console.log("Db connected")).catch((e) => console.log("Error"))
}

export default db