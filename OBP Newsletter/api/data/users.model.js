var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

mongoose.model('Users', userSchema);
