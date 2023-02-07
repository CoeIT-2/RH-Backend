
const mongoose= require('mongoose')

function connectDB() {	
	mongoose.connect(
	    process.env.DB_URL,
	).then(()=>{
		console.log('db connection established')})
		.catch(e=>{
			console.log(`db connection failed : ${e.message}`)})
		}
		
module.exports=connectDB