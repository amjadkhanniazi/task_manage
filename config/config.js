import dotenv from 'dotenv';

dotenv.config();

export default {
    MongoURL: `mongodb+srv://amjad:${process.env.MONGO_PASSWORD}@mongotest.rqx1a.mongodb.net/TaskManage?retryWrites=true&w=majority`,
    options:{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};