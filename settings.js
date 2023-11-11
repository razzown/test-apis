const fs = require('fs')

global.creator = 'RazzOwne'// yourname
global.MONGO_DB_URI = "mongodb+srv://razzapis:razzapis@razzapis.whq6qsb.mongodb.net/?retryWrites=true&w=majority" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "6285781675560" //isi apa aja bebas
global.your_email = "rasyarasyid80@gmail.com" //email
global.email_password = "vqvkvvvjmkdlgmsb" //application password email
global.limitCount = 1000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `RazzTzy`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `RazzTzy`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `RazzTzy`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `RazzTzy`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
