

const getHanlder = async (req,res)=> {res.send('GET projects')}

const getDetailHanlder = async (req, res) => {res.send('GET project detail')}

const postHandler=async (req,res)=>(req,res)=> {res.send('POST project')}

const deleteHandler=async (req,res)=>(req,res)=> {res.send('DELETE project')}

const updateHandler=async (req,res)=> {res.send('PUT project')}

module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
