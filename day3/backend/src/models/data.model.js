 import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    name: String,
    tittle: String,
    description: String,
})

const Data = mongoose.model('Data', dataSchema);

export default Data