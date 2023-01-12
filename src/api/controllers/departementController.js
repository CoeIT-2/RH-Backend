

const getHanlder = async (req,res)=> {res.send('GET departements')}

const getDetailHanlder = async (req, res) => {res.send('GET departement detail')}

const postHandler=async (req,res)=>(req,res)=> {res.send('POST departement')}

const deleteHandler=async (req,res)=>(req,res)=> {res.send('DELETE departement')}

const updateHandler=async (req,res)=> {res.send('PUT departement')}



module.exports={getHanlder, getDetailHanlder, postHandler,deleteHandler,updateHandler}
