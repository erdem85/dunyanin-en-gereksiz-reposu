const db = require('./util/low')

db.set('za', 'mal')

console.log(db.get('za'))

if(db.has('za')) console.log('mal')