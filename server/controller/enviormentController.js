import envModel from "../models/enviormentDb.js"

export const FetchData = async(req,res) => {
    try {
        const data = await envModel.find()
        return res.status(200).json({data : data})
    } catch (error) {
        console.log(error.message)
    }
}

export const insertData = async(req,res) => {
    // const {end__year,intensity,sector,topic,insight,url,region,start__year,impact,added,published,country,relevance,pestle,source,title,likelihood} = req.body
try {
    const newData = new envModel(req.body)
    await newData.save()
    return res.status(200).json({
        success : true,
        message : "Data inserted"
    })
} catch (error) {
    console.log(error.message)
}
}