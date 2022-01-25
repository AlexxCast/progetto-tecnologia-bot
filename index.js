
const Telegraf = require('telegraf').Telegraf;
const bot = new Telegraf('5002087416:AAHLuqTMJoVkPFs1NduM2oTik3AIYapTkUQ');
const { Keyboard } = new require('telegram-keyboard') 

var mysql = require('mysql');
var anatomia = 'anatomia' 
var mani = 'mani'
var busto = 'busto'
var gambe = 'gambe'
var posa = 'posa' 
var uomo='uomo'
var donna='donna'
var impiedi='impiedi'
var seduta='seduta'
var paesaggio = 'paesaggio' 
var montagne='montagne'
var lago='lago'
var foresta='foresta'
var mare='mare'
var città='città'
var animali = 'animali' 
var cane='cane'
var gatto='gatto'
var selvatici='selvatici'
var ucelli='uccelli'
var pesci='pesci'
var preferiti= 'preferiti'
var agg_preferiti='agg_preferiti'
var indietro = 'indietro'
var a = null
var b = null
var c = null
var d = null
var e = null





var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reference"

});
 
function tastiera(ctx){
	const keyboard = Keyboard.make([
		[anatomia, posa], 
		[paesaggio, animali], 
		[agg_preferiti, preferiti]
	])
	ctx.reply('seleziona la categoria desiderata', keyboard.reply());
}

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

bot.command('start', ctx => {
    console.log(ctx.from)
	tastiera(ctx)
    // bot.telegram.sendMessage(ctx.chat.id, 'benvenuto', {
    // })
})

bot.hears(anatomia, ctx => {
	con.connect(function(err) {

		a=1;
		b=1;
		c=1;
		const keyboard = Keyboard.make([
			[mani, busto], 
			[gambe],
			[indietro]
		])
		ctx.reply('seleziona la categoria desiderata', keyboard.reply());

	  });    
})

bot.hears(mani, ctx => {
	con.connect(function(err) {
		
		var sql = "select * from image where tipo = '"+ mani+"'"  ;

con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		   })
		  
		});
	  });


	  });    
})

bot.hears(gambe, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ gambe +"'";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		});
	  });


	  });    
})

bot.hears(busto, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ busto+"'" ;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		});
	  });


	  });    
})

bot.hears(uomo, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ uomo+"'";
		
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		   
		  })
		});
	  });


	  });    
})
 
bot.hears(donna, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ donna+"'" ;
		 
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		 
		});
	  });


	  });    
})
bot.hears(seduta, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ seduta+"'";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		  var cont = "select cont(id_generale) from image where tipo = '"+ seduta +"'";
		});
	  });


	  });    
})

bot.hears(impiedi, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ impiedi+"'" ;
		
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		});
	  });


	  });    
})

bot.hears(montagne, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ montagne+"'" 
	
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		 
		});
	  });


	  });    
})

bot.hears(mare, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ mare +"'" ;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		});
	  });


	  });    
})


bot.hears(lago, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ lago+"'"  ;
	
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		  
		});
	  });


	  });    
})

bot.hears(foresta, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ foresta+"'"  ;
	
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		 
		});
	  });


	  });    
})

bot.hears(città, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ città +"'" ;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		
		});
	  });


	  });    
})


bot.hears(cane, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ cane+"'"  ;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		
		});
	  });


	  });    
})

bot.hears(gatto, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ gatto+"'"  ;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		 
		});
	  });


	  });    
})

bot.hears(selvatici, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ selvatici +"'" ;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		 
		});
	  });


	  });    
})

bot.hears(ucelli, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ ucelli+"'"  ;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		  
		});
	  });


	  });    
})

bot.hears(pesci, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = '"+ pesci;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)

		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  })
		 
		});
	  });


	  });    
})
bot.hears(indietro, ctx => {
	con.connect(function(err) {
		a=0;
		b=0;
		c=0;
		d=0;
		e=0;
		tastiera(ctx)

	  });    
})




bot.hears(posa, ctx => {
	con.connect(function(err) {
		a=1;
		b=1;
		c=1;
		d=1;
		const keyboard = Keyboard.make([
			[uomo,donna], 
			[impiedi,seduta],
			[indietro]
		])
		ctx.reply('seleziona la categoria desiderata', keyboard.reply());
	
})
})

bot.hears(paesaggio , ctx => {
	con.connect(function(err) {
		a=0;
		b=0;
		c=0;
		d=0;
		e=0;
		const keyboard = Keyboard.make([
		[montagne,lago,mare], 
			[foresta,città],
			[indietro]
		])
		ctx.reply('seleziona la categoria desiderata', keyboard.reply());
})
})
bot.hears(animali , ctx => {
	con.connect(function(err) {
		    a=0;
			b=0;
			c=0;
			d=0;
			e=0;
		const keyboard = Keyboard.make([
			
		[cane ,gatto,selvatici], 
			[ucelli,pesci],
			[indietro]
		])
		ctx.reply('seleziona la categoria desiderata', keyboard.reply());
		
})
})

bot.hears(preferiti , ctx => {
	id=ctx.chat.id
	con.connect(function(err) {
		
		var sql = "select * from preferiti where chat_id='"+id+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("1 record inserted");

		  Object.keys(result).forEach(function(key) {
			var row = result[key];
			var img=row.im;
			console.log(img)

			bot.telegram.sendPhoto(ctx.chat.id, {
	        source: img
			})
		  });
		});
	  }); 
})

bot.hears(agg_preferiti, ctx => {
	
	id=ctx.chat.id
	ctx.deleteMessage
    imger=ctx.update.message.text
	con.connect(function(err) {
	
		var sql = "INSERT INTO preferiti ('"+imger+"',"+id+") VALUES ('image',chat_id)";


  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("1 record inserted");

			})
		   })
		  });
		



const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My phone number",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};


const requestLocationKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My location",
                request_location: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }

}

