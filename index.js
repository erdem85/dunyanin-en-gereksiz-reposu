const za = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const low = za(adapter)

module.exports = {
	set: function(x, y){
		low.set(x, y).write()
	},
	get: function(x){
		return low.get(x).value()
	},
	push: function(x, y){
		low.get(x).push(y).write()
	},
	has: function(x){
		return low.has(x).value()
	}
}

// set: (x, y) => db.set(x, y).write()
// get: x => db.get(x).value()
// push: (x, y) => db.get(x).push(y).write()
// has: x => db.has(x).value()
// ARROW FUNCTION DENEDIGIMDE SEBEPSIZCE HATA VERDI, YERİ DEĞİLMİŞ DEMEKKİ
