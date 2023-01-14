
const getHanlder=async (_req,res)=>{
    console.log('get task')
}
const postHandler=async (req,res)=>{
    console.log('post task')
}
const deleteHandler=async (req,res)=>{
    console.log('delete task')
}
const updateHandler=async (req,res)=>{
    console.log('update task')
}

module.exports={getHanlder,postHandler,deleteHandler,updateHandler}