const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
	uri: 'mongodb://rodan888:gtx560@ds143242.mlab.com:43242/shelfmobile',
	secret: crypto,
	db: 'shelfmobile'
}