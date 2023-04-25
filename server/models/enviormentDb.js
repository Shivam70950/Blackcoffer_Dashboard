import mongoose from "mongoose";

const envSchema = mongoose.Schema({
    end__year : {
        type : Number
    },
    intensity : {
        type : Number
    },
    sector : {
        type : String
    },
    topic : {
        type : String
    },
    insight : {
        type : String
    },
    url : {
        type : String
    },
    region : {
        type : String
    },
    start__year: {
        type : Number
    },
    impact: {
        type : String
    },
    added: {
        type : String
    },
    published: {
        type : String
    },
    country: {
        type : String
    },
    relevance: {
        type : Number
    },
    pestle: {
        type : String
    },
    source: {
        type :String
    },
    title: {
        type : String
    },
    likelihood: {
        type : Number
    },
})

const envModel = mongoose.model("Enviorment", envSchema)
export default envModel