

const getHanlder = async (req,res)=> {res.send('GET events')}

const getDetailHanlder = async (req, res) => {res.send('GET event detail')}

const postHandler=async (req,res)=>(req,res)=> {res.send('POST event')}

const deleteHandler=async (req,res)=>(req,res)=> {res.send('DELETE event')}

const updateHandler=async (req,res)=> {res.send('PUT event')}

module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
