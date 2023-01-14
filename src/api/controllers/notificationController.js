
const getHanlder=async (_req,res)=>{
    console.log('get notification')
}
const postHandler=async (req,res)=>{
    console.log('post notification')
}
const deleteHandler=async (req,res)=>{
    console.log('delete notification')
}
const updateHandler=async (req,res)=>{
    console.log('update notification')
}

module.exports={getHanlder,postHandler,deleteHandler,updateHandler}