//Alessio Castronovo 5cia 26/01/2022 bot_referance db immagini
const Telegraf = require('telegraf').Telegraf;
const bot = new Telegraf('5231072881:AAF_FCIA2U6GA6TMwfbr3bRS4LLEF56EgCU');
const { Keyboard } = new require('telegram-keyboard') 
 //variabi 
var mysql = require('mysql');
var anatomia = '💪anatomia' 
var mani = '🤚mani'
var busto = '👤busto'
var gambe = '🦵gambe'
var posa = '🕺posa' 
var uomo='🕴️uomo'
var donna='🧍‍♀️donna '
var impiedi='🧍in piedi'
var seduta='🪑seduto'
var paesaggio = '🏞️paesaggio' 
var montagne='🏔️montagne'
var antartide = '❄️antartide'
var deserto ='🏜️deserto'
var giungla = '🦍giungla'
var savana = '🦁savana'
var lago='🌅lago'
var foresta='🌲foresta'
var mare='🏖️mare'
var città='🌇città'
var animali = '🐼animali' 
var cane='🐶cane'
var gatto='🐱gatto'
var selvatici='🦌selvatici'
var ucelli='🦅uccelli'
var pesci='🐟pesci'
var preferiti= '⭐preferiti'
var agg_preferiti='➕⭐agg_preferiti'
var indietro = '⬅️indietro'
var a = null
var b = null
var c = null
var d = null
var e = null
var temp = null
var id_rel =null
var der=null;
var es = null;


 

//conessione database

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reference"

});
//tastiera personalizata

function tastiera(ctx){
	const
	 keyboard = Keyboard.make([
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
	ctx.reply("*Referance default\n\nUtilizza la tastiera dedicata per selezionare la categoria desiderata successivamente sempre con la stessa tastiera seleziona la sottocategoria.\n\n\n*Preferiti\n\nInvia una foto poi seleziona agg_preferiti  per salvarla poi selezionare preferiti per visualizzare le immagini salvate .\n\n\nscrivi help per rivisualizare il messaggio ");
	tastiera(ctx)
})

//richiamo funzioni 

bot.hears(anatomia, ctx => {
	con.connect(function(err) {

		const keyboard = Keyboard.make([
			[mani, busto], 
			[gambe],
			[indietro]
		])
		ctx.reply('seleziona la categoria desiderata', keyboard.reply());

	  });    
})

bot.hears('help', ctx => {
	con.connect(function(err) {
		ctx.reply("*Referance default\n\nUtilizza la tastiera dedicata per selezionare la categoria desiderata successivamente sempre con la stessa tastiera seleziona la sottocategoria.\n\n\n*Preferiti\n\nInvia una foto poi seleziona agg_preferiti  per salvarla poi selezionare preferiti per visualizzare le immagini salvate .");

	  });    
})
// funzione con query per il richiamo delle immagini
bot.hears(mani, ctx => {
	 
	con.connect(function(err) {
		var sql = "select* from image where tipo = 'mani' ORDER BY RAND() LIMIT 1"  ;
           
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");

		Object.keys(result).forEach(function(key) {
		  var row = result[key];
		  var img=row.im;
		  console.log(img)
		  es=img;
          
		  bot.telegram.sendPhoto(ctx.chat.id, {
		  source: img
		  });

		 });
	   
	  });
	 });
	
	 })

	
    

bot.hears(gambe, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = 'gambe' ORDER BY RAND() LIMIT 1";
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
		var sql = "select * from image where tipo = 'busto' ORDER BY RAND() LIMIT 1" ;
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
		var sql = "select * from image where tipo = 'uomo' ORDER BY RAND() LIMIT 1";

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
		var sql = "select * from image where tipo = 'donna' ORDER BY RAND() LIMIT 1" ;

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
		var sql = "select * from image where tipo = 'seduta' ORDER BY RAND() LIMIT 1";
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

bot.hears(savana, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = 'savana' ORDER BY RAND() LIMIT 1";
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
		  var cont = "select cont(id_generale) from image where tipo = '"+ savana +"'";
		});
	  });


	  });    
})

bot.hears(giungla, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = 'giungla' ORDER BY RAND() LIMIT 1";
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
		  var cont = "select cont(id_generale) from image where tipo = 'giungla'";
		});
	  });


	  });    
})

bot.hears(deserto, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = 'deserto' ORDER BY RAND() LIMIT 1";
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
		  var cont = "select cont(id_generale) from image where tipo = '"+ deserto +"'";
		});
	  });


	  });    
})

bot.hears(antartide, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = 'antartide' ORDER BY RAND() LIMIT 1";
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
		  var cont = "select cont(id_generale) from image where tipo = '"+ antartide +"'";
		});
	  });


	  });    
})
bot.hears(impiedi, ctx => {
	con.connect(function(err) {
		var sql = "select * from image where tipo = 'impiedi' ORDER BY RAND() LIMIT 1" ;

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
		var sql = "select * from image where tipo = 'montagne' ORDER BY RAND() LIMIT 1" 

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
		var sql = "select * from image where tipo = 'mare' ORDER BY RAND() LIMIT 1" ;
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
		var sql = "select * from image where tipo = 'lago' ORDER BY RAND() LIMIT 1"  ;

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
		var sql = "select * from image where tipo = 'foresta' ORDER BY RAND() LIMIT 1"  ;

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
		var sql = "select * from image where tipo = 'città' ORDER BY RAND() LIMIT 1" ;
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
		var sql = "select * from image where tipo = 'cane' ORDER BY RAND() LIMIT 1"  ;
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
		var sql = "select * from image where tipo = 'gatto' ORDER BY RAND() LIMIT 1"  ;
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
		var sql = "select * from image where tipo = 'selvatici' ORDER BY RAND() LIMIT 1" ;
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
		var sql = "select * from image where tipo = 'uccelli' ORDER BY RAND() LIMIT 1"  ;
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
		var sql = "select * from image where tipo = 'pesci' ORDER BY RAND() LIMIT 1";
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
			[foresta,città,giungla],
			[deserto,savana,antartide],
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

		var sql = "select id_ima from preferiti where id_per="+id+"";
  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("1 record inserted");

		  Object.keys(result).forEach(function(key) {
			var row = result[key];
			var img=row.id_ima;
			console.log(img)

			bot.telegram.sendPhoto(ctx.chat.id, img)
		  });
		});
	  }); 
})


bot.on('photo', ctx => {
	var ph=ctx.message.photo[2].file_id;

	temp = ph;
	id_rel=ctx.chat.id;
	console.log('ph '+ph)
	


})


bot.hears(agg_preferiti, ctx => {

	id_p=ctx.chat.id
	con.connect(function(err) {

		if(id_p==id_rel)
		{


          var sql = "INSERT INTO preferiti (id_ima,id_per) VALUES ('"+temp+"','"+id_p+"')";


  con.query(sql, function (err, result) {
    if (err) throw err;
	console.log("1 record inserted");
    temp=null;
			})
		}
		   })
		
	  });



bot.launch();