const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const mysql = require('mysql');
const http = require('http');
const moment = require('moment');
var meterID='16';
var vvit_meterID='2';

server.listen(2048);
// app.get('/',function(req,res){res.sendFile(__dirname + '/public/home.html');});
// app.get('/reports/daily/cea/exe_summary-04.pdf',function(req,res){res.sendFile(__dirname + '/public/reports/daily/cea/exe_summary-04.pdf');});
// app.get('/home.html',function(req,res){res.sendFile(__dirname + '/public/home.html');});
// app.get('/viewbh.html',function(req,res){res.sendFile(__dirname + '/public/viewbh.html');});
// app.get('/lib/p5.min.js',function(req,res){res.sendFile(__dirname + '/public/lib/p5.min.js');});
// app.get('/lib/addons/p5.dom.min.js',function(req,res){res.sendFile(__dirname + '/public/lib/addons/p5.dom.min.js');});
// app.get('/lib/addons/p5.sound.min.js',function(req,res){res.sendFile(__dirname + '/public/lib/addons/p5.sound.min.js');});
// app.get('/sk.js',function(req,res){res.sendFile(__dirname + '/public/sk.js');});
// app.get('/skchart.js',function(req,res){res.sendFile(__dirname + '/public/skchart.js');});
// app.get('/iith/iithhome.html',function(req,res){ res.sendFile(__dirname + '/public/iith/iithhome.html');});
// app.get('/iith/realtime',function(req,res){res.sendFile(__dirname + '/public/iith/real.html');});

// app.get('/iith/iithoverview.html',function(req,res){res.sendFile(__dirname + '/public/iith/iithoverview.html');});
// app.get('/iith/iithmicrogrid.html',function(req,res){res.sendFile(__dirname + '/public/iith/iithmicrogrid.html');});
// app.get('/iith/iithhistory.html',function(req,res){res.sendFile(__dirname + '/public/iith/iithhistory.html');});
// app.get('/iith/iithcasestudies.html',function(req,res){res.sendFile(__dirname + '/public/iith/iithcasestudies.html');});
// app.get('/iith/iithkeyinfo.html',function(req,res){res.sendFile(__dirname + '/public/iith/iithkeyinfo.html');});


// app.get('/iith/iithoverview-image.jpg',function(req,res){res.sendFile(__dirname + '/public/img/iithoverview-image.jpg');});
// app.get('/iith/iith-hv-grid.png',function(req,res){res.sendFile(__dirname + '/public/img/iith-hv-grid.png');});
// app.get('/iith/iithaprmay.png',function(req,res){res.sendFile(__dirname + '/public/img/iithcase/iithaprmay.png');});
// app.get('/iith/iith-apr-loadcurve.png',function(req,res){res.sendFile(__dirname + '/public/img/iithcase/iith-apr-loadcurve.png');});
// app.get('/iith/bh.png',function(req,res){res.sendFile(__dirname + '/public/img/iithcase/bh.png');});
// app.get('/iith/gh.png',function(req,res){res.sendFile(__dirname + '/public/img/iithcase/gh.png');});
// app.get('/iith/fh.png',function(req,res){res.sendFile(__dirname + '/public/img/iithcase/fh.png');});
// app.get('/iith/pv.png',function(req,res){res.sendFile(__dirname + '/public/img/iithcase/pv.png');});


// app.get('/vvit/vvitoverview.html',function(req,res){res.sendFile(__dirname + '/public/vvit/vvitoverview.html');});
// app.get('/vvit/vvitmicrogrid.html',function(req,res){res.sendFile(__dirname + '/public/vvit/vvitmicrogrid.html');});
// app.get('/iith/iithhistory.html',function(req,res){res.sendFile(__dirname + '/public/iith/iithhistory.html');});
// app.get('/iith/iithcasestudies.html',function(req,res){res.sendFile(__dirname + '/public/iith/iithcasestudies.html');});
// app.get('/vvit/vvitkeyinfo.html',function(req,res){res.sendFile(__dirname + '/public/vvit/vvitkeyinfo.html');});

// app.get('/vvit/vvitmeterdata2.html',function(req,res){
//   //vvit_meterID = req.params.mid;
//   res.sendFile(__dirname + '/public/vvit/vvitmeterdata2.html');
//   //vvit_run_query(vvit_meterID);
//   setTimeout(function(){vvit_run_query(vvit_meterID);}, 1000);
// });


// // ******************************************************************************************
// //          G N I T S - pages
// // ******************************************************************************************
// app.get('/gnits/gnits.png',function(req,res){res.sendFile(__dirname + '/public/img/gnits.png');});
// app.get('/gnits/gnitsmicrogird.png',function(req,res){res.sendFile(__dirname + '/public/img/gnitsmicrogird.png');});
// app.get('/gnits/gnitsoverview.html',function(req,res){res.sendFile(__dirname + '/public/gnits/gnitsoverview.html');});
// app.get('/gnits/gnitsmicrogrid.html',function(req,res){res.sendFile(__dirname + '/public/gnits/gnitsmicrogrid.html');});
// app.get('/gnits/gnitshist.html',function(req,res){res.sendFile(__dirname + '/public/gnits/gnitshist.html');});
// app.get('/gnits/gnitscasestudies.html',function(req,res){res.sendFile(__dirname + '/public/gnits/gnitscasestudies.html');});
// app.get('/gnits/gnitskeyinfo.html',function(req,res){res.sendFile(__dirname + '/public/gnits/gnitskeyinfo.html');});
// app.get('/gnits/gnitsmeterdata2.html',function(req,res){
//   //vvit_meterID = req.params.mid;
//   res.sendFile(__dirname + '/public/gnits/gnitsmeterdata2.html');
//   //vvit_run_query(vvit_meterID);
//   //gnits_run_query();
//   setTimeout(function(){gnits_run_query();}, 1000);
// });



// app.get('/gnits/gnitspeak.html',function(req,res){
//   //vvit_meterID = req.params.mid;
//   res.sendFile(__dirname + '/public/gnits/gnitspeak.html');
//   //vvit_run_query(vvit_meterID);
//   //gnits_run_query();
//   setTimeout(function(){gnits_run_query_peak();}, 1000);
// });





// // ******************************************************************************************
// //          PVPSIT - pages
// // ******************************************************************************************
// app.get('/pvpsit/pvpsit.jpg',function(req,res){res.sendFile(__dirname + '/public/img/pvpsit.jpg');});

// app.get('/pvpsit/pvpsitoverview.html',function(req,res){res.sendFile(__dirname + '/public/pvpsit/pvpsitoverview.html');});
// app.get('/pvpsit/pvpsitmicrogrid.html',function(req,res){res.sendFile(__dirname + '/public/pvpsit/pvpsitmicrogrid.html');});
// app.get('/pvpsit/pvpsithist.html',function(req,res){res.sendFile(__dirname + '/public/pvpsit/pvpsithist.html');});
// app.get('/pvpsit/pvpsitcasestudies.html',function(req,res){res.sendFile(__dirname + '/public/pvpsit/pvpsitcasestudies.html');});
// app.get('/pvpsit/pvpsitkeyinfo.html',function(req,res){res.sendFile(__dirname + '/public/pvpsit/pvpsitkeyinfo.html');});

// app.get('/pvpsit/pvpsitmeterdata2.html',function(req,res){
//   //vvit_meterID = req.params.mid;
//   res.sendFile(__dirname + '/public/pvpsit/pvpsitmeterdata2.html');
//   //vvit_run_query(vvit_meterID);
//   //gnits_run_query();
//   setTimeout(function(){pvpsit_run_query();}, 1000);
// });

// app.get('/pvpsit/pvpsitpeak.html',function(req,res){
//   //vvit_meterID = req.params.mid;
//   res.sendFile(__dirname + '/public/pvpsit/pvpsitpeak.html');
//   //vvit_run_query(vvit_meterID);
//   //gnits_run_query();
//   setTimeout(function(){pvpsit_run_query_peak();}, 1000);
// });

// // ******************************************************************************************
// //          Demo - pages
// // ******************************************************************************************
// app.get('/demo/bvrith.png',function(req,res){res.sendFile(__dirname + '/public/img/bvrith.png');});

// app.get('/demo/demooverview.html',function(req,res){res.sendFile(__dirname + '/public/demo/demooverview.html');});
// app.get('/demo/demomicrogrid.html',function(req,res){res.sendFile(__dirname + '/public/demo/demomicrogrid.html');});
// app.get('/demo/demohist.html',function(req,res){res.sendFile(__dirname + '/public/demo/demohist.html');});
// app.get('/demo/democasestudies.html',function(req,res){res.sendFile(__dirname + '/public/demo/democasestudies.html');});
// app.get('/demo/demokeyinfo.html',function(req,res){res.sendFile(__dirname + '/public/demo/demokeyinfo.html');});

// app.get('/demo/demometerdata2.html',function(req,res){
//   //vvit_meterID = req.params.mid;
//   res.sendFile(__dirname + '/public/demo/demometerdata2.html');
//   //vvit_run_query(vvit_meterID);
//   //gnits_run_query();
//   setTimeout(function(){demo_run_query();}, 1000);
// });



// app.get('/demo/demopeak.html',function(req,res){
//   //vvit_meterID = req.params.mid;
//   res.sendFile(__dirname + '/public/demo/demopeak.html');
//   //vvit_run_query(vvit_meterID);
//   //gnits_run_query();
//   setTimeout(function(){demo_run_query_peak();}, 1000);
// });

// // ******************************************************************************************
// //          OUCE - pages
// // ******************************************************************************************
// app.get('/ouce/ouce.png',function(req,res){res.sendFile(__dirname + '/public/img/ouce.png');});
// app.get('/ouce/oucemicrogird.png',function(req,res){res.sendFile(__dirname + '/public/img/oucemicrogird.png');});

// app.get('/ouce/ouceoverview.html',function(req,res){res.sendFile(__dirname + '/public/ouce/ouceoverview.html');});
// app.get('/ouce/oucemicrogrid.html',function(req,res){res.sendFile(__dirname + '/public/ouce/oucemicrogrid.html');});
// app.get('/ouce/oucehist.html',function(req,res){res.sendFile(__dirname + '/public/ouce/oucehist.html');});
// app.get('/ouce/oucecasestudies.html',function(req,res){res.sendFile(__dirname + '/public/ouce/oucecasestudies.html');});
// app.get('/ouce/oucekeyinfo.html',function(req,res){res.sendFile(__dirname + '/public/ouce/oucekeyinfo.html');});


// app.get('/ouce/oucemeterdata2.html',function(req,res){
//   //vvit_meterID = req.params.mid;
//   res.sendFile(__dirname + '/public/ouce/oucemeterdata2.html');
//   //vvit_run_query(vvit_meterID);
//   //ouce_run_query();
//   setTimeout(function(){ouce_run_query();}, 1000);
// });




// app.get('/demo/demobvrithmeterdata2.html',function(req,res){
//   //vvit_meterID = req.params.mid;
//   res.sendFile(__dirname + '/public/demo/demobvrithmeterdata2.html');
//   //vvit_run_query(vvit_meterID);
//   //gnits_run_query();
//   setTimeout(function(){demo_bvrith_run_query();}, 1000);
// });

// app.get('/vvit/vvitoverview-image.png',function(req,res){res.sendFile(__dirname + '/public/img/vvitoverview-image.png');});
// app.get('/vvit/VIVA.png',function(req,res){res.sendFile(__dirname + '/public/img/VIVA.png');});
// app.get('/vvit/grid.png',function(req,res){res.sendFile(__dirname + '/public/img/grid.png');});




// app.get('/iith/iithhist.html',function(req,res){res.sendFile(__dirname + '/public/iith/iithhist.html');});

// app.get('/iith.png',function(req,res){
//   res.sendFile(__dirname + '/public/img/iith.png');
// });

// app.get('/iith/iith.png',function(req,res){
//   res.sendFile(__dirname + '/public/img/iith.png');
// });

// app.get('/vvit.png',function(req,res){
//   res.sendFile(__dirname + '/public/img/vvit.png');
// });

// app.get('/your.png',function(req,res){
//   res.sendFile(__dirname + '/public/img/your.png');
// });

// app.get('/ouce.png',function(req,res){
//   res.sendFile(__dirname + '/public/img/ouce.png');
// });

// app.get('/other.png',function(req,res){
//   res.sendFile(__dirname + '/public/img/other.png');
// });

app.get('/ablockmeterdata.html:mid',function(req,res){
  meterID = req.params.mid;
  a_run_query(meterID);
  //vvit_run_query(meterID);
  res.sendFile(__dirname + '/public/ablockmeterdata.html');
  app.get('/power_plot.png',function(req,res){
    res.sendFile(__dirname + '/public/img/iith_history/power_'+meterID+'.png');
  });
});


app.get('/cblockmeterdata.html:mid',function(req,res){
  meterID = req.params.mid;
  c_run_query(meterID);
  //vvit_run_query(meterID);
  res.sendFile(__dirname + '/public/cblockmeterdata.html');
});

app.get('/vvit/vvitmeterdata.html:mid',function(req,res){
  vvit_meterID = req.params.mid;
  res.sendFile(__dirname + '/public/vvit/vvitmeterdata.html');
  //vvit_run_query(vvit_meterID);
  setTimeout(function(){vvit_run_query(vvit_meterID);}, 1000);
});


app.get('/demo.html:mid',function(req,res){
  vvit_meterID = req.params.mid;
  res.sendFile(__dirname + '/public/demo.html');
  //vvit_run_query(vvit_meterID);
  setTimeout(function(){demo_run_query(vvit_meterID);}, 1000);
});




console.log("node server is up and running. visit localhost:2048 in your favourite browser !");

// this part of the code is for establishing connection with IITH database server
/*var con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "toor",
  database: "iit_raw"
});*/


var vvit_meterID='2';

// var vvit_con = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "bms",
//   password: "Sglab_1234",
//   database: "VVIT",
//   socketPath: '/var/run/mysqld/mysqld.sock'
// });



// var ouce_con = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "bms",
//   password: "Sglab_1234",
//   database: "OUCE",
//   socketPath: '/var/run/mysqld/mysqld.sock'
// });

// var gnits_con = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "bms",
//   password: "Sglab_1234",
//   database: "GNITS",
//   socketPath: '/var/run/mysqld/mysqld.sock'
// });

// var pvpsit_con = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "bms",
//   password: "Sglab_1234",
//   database: "PVPSIT",
//   socketPath: '/var/run/mysqld/mysqld.sock'
// });

// var demo_con = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "bms",
//   password: "Sglab_1234",
//   database: "demo",
//   socketPath: '/var/run/mysqld/mysqld.sock'
// });

// var demo_bvrith_con=mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "bms",
//   password: "Sglab_1234",
//   database: "BVRITH",
//   socketPath: '/var/run/mysqld/mysqld.sock'
// });

// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "10001",
//   user: "root",
//   password: "Sglab1",
//   database: "iith_ems"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Mysql connection opened with IITH database!");
// });

// var vvit_con = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "bms",
//   password: "Sglab_1234",
//   database: "VVIT",
//   socketPath: '/var/run/mysqld/mysqld.sock'
// });
// vvit_con.connect(function(err) {
//   if (err) throw err;
//   console.log("Mysql connection opened with VVIT database on IITH server!");
// });

var reg_dict = {IIT_A_Emergency_Panel_11_13: 'r1',
                IIT_A_Emergency_Panel_11_14: 'r2',
                IIT_A_Emergency_Panel_11_201: 'r3',
                IIT_A_Emergency_Panel_11_202: 'r4',
                IIT_A_Emergency_Panel_11_203: 'r5',
                IIT_A_Emergency_Panel_11_204: 'r6',
                IIT_A_Emergency_Panel_11_23: 'r7',
                IIT_A_Emergency_Panel_11_230: 'r8',
                IIT_A_Emergency_Panel_11_231: 'r9',
                IIT_A_Emergency_Panel_11_24: 'r10',
                IIT_A_Emergency_Panel_11_33: 'r11',
                IIT_A_Emergency_Panel_11_34: 'r12',
                IIT_A_Emergency_Panel_11_4: 'r13',
                IIT_A_Emergency_Panel_11_43: 'r14',
                IIT_A_Emergency_Panel_11_44: 'r15',
                IIT_A_Emergency_Panel_11_5: 'r16',
                IIT_A_Emergency_Panel_11_53: 'r17',
                IIT_A_Emergency_Panel_11_54: 'r18',
                IIT_A_Emergency_Panel_11_63: 'r19',
                IIT_A_Emergency_Panel_11_64: 'r20',
                IIT_A_Emergency_Panel_11_73: 'r21',
                IIT_A_Emergency_Panel_11_74: 'r22',
                IIT_A_Normal_Panel_7_101: 'r23',
                IIT_A_Normal_Panel_7_21: 'r24',
                IIT_A_Normal_Panel_7_231: 'r25',
                IIT_A_Normal_Panel_7_3: 'r26',
                IIT_A_Normal_Panel_3_31: 'r27',
                IIT_A_Normal_Panel_3_32: 'r28',
                IIT_A_Normal_Panel_3_62: 'r29',
                IIT_A_Normal_Panel_3_71: 'r30',
                IIT_A_Normal_Panel_3_72: 'r31',
                IIT_A_Normal_Panel_1_2: 'r32',
                IIT_A_Normal_Panel_1_51: 'r33',
                IIT_A_Normal_Panel_1_61: 'r34',
                IIT_A_Normal_Panel_8_102: 'r38',
                IIT_A_Normal_Panel_8_103: 'r39',
                IIT_A_Normal_Panel_8_104: 'r40',
                IIT_A_Normal_Panel_8_11: 'r41',
                IIT_A_Normal_Panel_8_12: 'r42',
                IIT_A_Normal_Panel_8_22: 'r43',
                IIT_A_Normal_Panel_8_232: 'r44',
                IIT_A_Normal_Panel_8_233: 'r45',
                IIT_A_Normal_Panel_8_41: 'r46',
                IIT_A_Normal_Panel_8_42: 'r47',
                IIT_A_Normal_Panel_8_52: 'r48',
                IIT_C_Emergency_Panel_14_134: 'r49',
                IIT_C_Emergency_Panel_14_143: 'r50',
                IIT_C_Emergency_Panel_14_144: 'r51',
                IIT_C_Emergency_Panel_14_153: 'r52',
                IIT_C_Emergency_Panel_14_154: 'r53',
                IIT_C_Emergency_Panel_14_163: 'r54',
                IIT_C_Emergency_Panel_14_164: 'r55',
                IIT_C_Emergency_Panel_14_174: 'r56',
                IIT_C_Emergency_Panel_14_204: 'r57',
                IIT_C_Emergency_Panel_14_218: 'r58',
                IIT_C_Emergency_Panel_16_103: 'r59',
                IIT_C_Emergency_Panel_16_104: 'r60',
                IIT_C_Emergency_Panel_16_113: 'r61',
                IIT_C_Emergency_Panel_16_114: 'r62',
                IIT_C_Emergency_Panel_16_123: 'r63',
                IIT_C_Emergency_Panel_16_124: 'r64',
                IIT_C_Emergency_Panel_16_133: 'r65',
                IIT_C_Emergency_Panel_16_201: 'r66',
                IIT_C_Emergency_Panel_16_202: 'r67',
                IIT_C_Emergency_Panel_16_203: 'r68',
                IIT_C_Emergency_Panel_16_217: 'r69',
                IIT_C_Emergency_Panel_18_103: 'r70',
                IIT_C_Emergency_Panel_18_104: 'r71',
                IIT_C_Emergency_Panel_18_113: 'r72',
                IIT_C_Emergency_Panel_18_114: 'r73',
                IIT_C_Emergency_Panel_18_123: 'r74',
                IIT_C_Emergency_Panel_18_124: 'r75',
                IIT_C_Emergency_Panel_18_133: 'r76',
                IIT_C_Emergency_Panel_18_201: 'r77',
                IIT_C_Emergency_Panel_18_202: 'r78',
                IIT_C_Emergency_Panel_18_203: 'r79',
                IIT_C_Emergency_Panel_18_217: 'r80',
                IIT_C_Normal_Panel_17_111: 'r81',
                IIT_C_Normal_Panel_17_112: 'r82',
                IIT_C_Normal_Panel_17_132: 'r83',
                IIT_C_Normal_Panel_17_142: 'r84',
                IIT_C_Normal_Panel_17_151: 'r85',
                IIT_C_Normal_Panel_17_161: 'r86',
                IIT_C_Normal_Panel_17_162: 'r87',
                IIT_C_Normal_Panel_17_171: 'r88',
                IIT_C_Normal_Panel_17_172: 'r89',
                IIT_C_Normal_Panel_17_213: 'r90',
                IIT_C_Normal_Panel_17_215: 'r91',
                IIT_C_Normal_Panel_17_216: 'r92',
                IIT_C_Normal_Panel_19_100: 'r93',
                IIT_C_Normal_Panel_19_101: 'r94',
                IIT_C_Normal_Panel_19_102: 'r95',
                IIT_C_Normal_Panel_19_121: 'r96',
                IIT_C_Normal_Panel_19_122: 'r97',
                IIT_C_Normal_Panel_19_131: 'r98',
                IIT_C_Normal_Panel_19_141: 'r99',
                IIT_C_Normal_Panel_19_152: 'r100',
                IIT_C_Normal_Panel_19_211: 'r101',
                IIT_C_Normal_Panel_19_212: 'r102'
};

var board_dict = {};
var vvit_last_socket = '';
var connections = [];

io.sockets.on('connection', function(socket){

 connections.push(socket);
 console.log('Connected: %s sockets connected',connections.length);
 if ((socket.handshake.headers.referer).includes('vvitmeterdata')) {
   console.log(socket.handshake.headers.referer);
   vvit_last_socket = socket.id;
   console.log(vvit_last_socket);
 };


 //disconnect
 socket.on('disconnect',function(data){
   connections.splice(connections.indexOf(socket),1);
   console.log('Disconnected: %s sockets connected',connections.length);
 });

 socket.on('send message', function(data){
   io.sockets.emit('iith_data_msg', {msg: data})
 });


 socket.on('meter_id', function(data){
 console.log("client is requesting data from the meter id:");
 //console.log(data);
 });


socket.on('request_history',function(data){
  //console.log('server received : '+data);
  if (data == 'atot') {
	  console.log('received query for A block total');
	  var a_query = 'SELECT * FROM `block_totals` order by tstamp desc limit 120';
	  con.query(a_query, function (err, result, fields) {
    if (err) throw err;
    A_history_result = result;
	io.sockets.emit('a_block_history', A_history_result);
	console.log('server sending A block historical data');
    });

  }


  //io.sockets.emit('su_data_for_plot', data)
})


socket.on('client_tstamp', function(data){
//console.log(data);

// var con_bh = mysql.createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "bms",
//   password: "Sglab_1234",
//   database: "IITH_SS_data"
// });
// con_bh.connect(function(err) {
//   if (err) throw err;
//   console.log("Mysql connection opened with SS database!");
// });


console.log('server will connect to database of boys hostel');
var bh_query="SELECT * FROM `SS_ems` WHERE `meterID` = '14' and `tstamp` < '"+data+"' order by `tstamp` DESC limit 60"
con_bh.query(bh_query, function (err, result, fields) {
if (err) throw err;
bh_result = result;
io.sockets.emit('bh_data', bh_result);
console.log(bh_result[59].Ptot);
});



});



});


 function run_query(meterID) {
 con.query("select * from `sensorreadings` where `date` = (select MAx(`date`) from `sensorreadings` where `meter_number` = "+
          meterID +") and `meter_number` = "+meterID,
 function (err, result, fields) {
  if (err) throw err;
  meter_result = result;
  io.sockets.emit('meter_data', meter_result);
  console.log(meter_result);
  });
 }


  function a_run_query(meterID) {
  con.query("select * from `sensorreadings` where `date` = (select MAx(`date`) from `sensorreadings` where `meter_number` = "+
           meterID +" and `block` = 'Block_A') and `meter_number` = "+meterID,
  function (err, result, fields) {
   if (err) throw err;
   meter_result = result;
   io.sockets.emit('a_meter_data', meter_result);
   console.log(meter_result);
   });
  }


   function c_run_query(meterID) {
   con.query("select * from `sensorreadings` where `date` = (select MAx(`date`) from `sensorreadings` where `meter_number` = "+
            meterID +" and `block` = 'Block_C') and `meter_number` = "+meterID,
   function (err, result, fields) {
    if (err) throw err;
    meter_result = result;
    io.sockets.emit('c_meter_data', meter_result);
    console.log(meter_result);
    });
   }


  function vvit_run_query(vvit_meterID) {

  vvit_con.query("SELECT * FROM `vvit_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM vvit_data GROUP BY `meter_ID` ) order by `meter_ID`",
  function (err, result, fields) {
   if (err) throw err;
   vvit_meter_result = result;
   //console.log(meter_result);
   //io.sockets.emit('vvit_meter_data', meter_result);
  // console.log(vvit_last_socket);
   io.sockets.emit('vvit_meter_data', vvit_meter_result);
   console.log(vvit_meter_result);
   });
  }



    function ouce_run_query() {

    ouce_con.query("SELECT * FROM `ou_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM ou_data GROUP BY `meter_ID` ) order by `meter_ID`",
    function (err, result, fields) {
     if (err) throw err;
     ouce_meter_result = result;
     //console.log(meter_result);
     //io.sockets.emit('vvit_meter_data', meter_result);
    // console.log(vvit_last_socket);
     io.sockets.emit('ouce_meter_data', ouce_meter_result);
     console.log(ouce_meter_result);
     });
    }






  function gnits_run_query() {
    gnits_con.query("SELECT * FROM `gnits_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM gnits_data GROUP BY `meter_ID` ) order by `meter_ID`",
    function (err, result, fields) {
     if (err) throw err;
     gnits_meter_result = result;
     //console.log(meter_result);
    //io.sockets.emit('vvit_meter_data', meter_result);
    //console.log(vvit_last_socket);
     io.sockets.emit('gnits_meter_data', gnits_meter_result);
     //console.log(gnits_meter_result);
   });
  }










  function gnits_run_query_peak() {
    mids=['2','3','4','5','6','7','8','9','10','11','12'];
    var i;
    for (i = 0; i < mids.length; i++) {
      gnits_con.query("SELECT `tstamp`, `meter_ID`, `Ptot` FROM `gnits_data` WHERE `Ptot` =( SELECT MAX(`Ptot`) FROM `gnits_data` WHERE DATE(`tstamp`) = CURDATE()-1 AND `meter_ID` = "+mids[i]+" ) AND DATE(`tstamp`) = CURDATE()-1 AND `meter_ID` = "+mids[i],
       function (err, result, fields) {
          if (err) throw err;
          io.sockets.emit('gnits_peak_meter_data', result);

    });
  }
}















  function pvpsit_run_query() {
    pvpsit_con.query("SELECT * FROM `pvpsit_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM pvpsit_data GROUP BY `meter_ID` ) order by `meter_ID`",
    function (err, result, fields) {
     if (err) throw err;
     pvpsit_meter_result = result;
     //console.log(meter_result);
    //io.sockets.emit('vvit_meter_data', meter_result);
    //console.log(vvit_last_socket);
     io.sockets.emit('pvpsit_meter_data', pvpsit_meter_result);
     //console.log(gnits_meter_result);
   });
  }



    function demo_run_query() {
      demo_con.query("SELECT * FROM `meter_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM meter_data GROUP BY `meter_ID` ) order by `tstamp` DESC",
      function (err, result, fields) {
       if (err) throw err;
       demo_meter_result = result;
       //console.log(meter_result);
      //io.sockets.emit('vvit_meter_data', meter_result);
      //console.log(vvit_last_socket);
       io.sockets.emit('demo_meter_data', demo_meter_result);
       //console.log(gnits_meter_result);
     });
    }





    function demo_bvrith_run_query() {
      demo_bvrith_con.query("SELECT * FROM `bvrith_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM bvrith_data GROUP BY `meter_ID` ) order by `tstamp` DESC",
      function (err, result, fields) {
       if (err) throw err;
       bvrith_meter_result = result;
       //console.log(meter_result);
      //io.sockets.emit('vvit_meter_data', meter_result);
      //console.log(vvit_last_socket);
       io.sockets.emit('bvrith_meter_data', bvrith_meter_result);
       //console.log(gnits_meter_result);
     });
    }


  function pvpsit_run_query_peak() {
    pvpsit_con.query("SELECT `tstamp`,`meter_ID`, `Ptot` FROM `pvpsit_data` WHERE `Ptot` =( SELECT MAX(`Ptot`) FROM `pvpsit_data` WHERE DATE(`tstamp`) = '2019-11-05' ) and DATE(`tstamp`) = '2019-11-05'",
    function (err, result, fields) {
     if (err) throw err;
     pvpsit_meter_result = result;
     console.log(pvpsit_meter_result);
    //io.sockets.emit('vvit_meter_data', meter_result);
    //console.log(vvit_last_socket);
     io.sockets.emit('pvpsit_peak_meter_data', pvpsit_meter_result);
     //console.log(gnits_meter_result);
   });
  }
//  function vvit_run_query(vvit_meterID) {
//  var query_string = "select * from `vvit_data` where `tstamp` = (select MAx(`tstamp`) from `vvit_data` where `meter_ID` = "+
//           vvit_meterID +") and `meter_ID` = "+vvit_meterID
//  vvit_con.query(query_string,
//  function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
//  io.sockets.emit('vvit_meter_data', result);
//  });
//  }



  var myresult=[];
  var A_total_result=[];

//  var result_su=[];

setInterval(
  function() {
    //con.query("SELECT *,UNIX_TIMESTAMP(time_inse) as utime FROM sensorreadings WHERE id IN ( SELECT MAX(id) FROM sensorreadings GROUP BY meter_number ) order by meter_number", function (err, result, fields) {
    con.query("SELECT *,UNIX_TIMESTAMP(date) as utime FROM sensorreadings WHERE id IN ( SELECT MAX(id) FROM sensorreadings GROUP BY row2 ) order by row2", function (err, result, fields) {
    if (err) throw err;
    myresult = result;
    //console.log(myresult);
    });


	con.query("SELECT * FROM `block_totals` WHERE `tstamp` = (select max(`tstamp`) from `block_totals`)", function (err, result, fields) {
    if (err) throw err;
    A_total_result = result;
    console.log(A_total_result);
	io.sockets.emit('a_block_total', A_total_result[0]);
    });


  //con.close;
  reg_data={};
  var ts = Math.round(new Date().getTime() / 1000);

  for (i=0; i<myresult.length;i++){
    var diff = ts-parseInt(myresult[i].utime);
    var freshness_flag=0;
    if (diff<300) {
      freshness_flag=1;
    } else if (diff<420) {
      freshness_flag=2;
    } else if (diff<480) {
      freshness_flag=3;
    } else {
      freshness_flag=4;
    }
   //console.log(freshness_flag.toString()+', '+diff.toString()+', '+ts.toString()+', '+myresult[i].row1+', '+myresult[i].utime+', '+ myresult[i].meter_number);
   reg_data[reg_dict[myresult[i].row2]]=[myresult[i].total_active_power,freshness_flag];
   //console.log(myresult[i].row2.split("_")[4],freshness_flag)
   board_dict[myresult[i].row2.split("_")[4]]=freshness_flag

 };
  //console.log(reg_data);
  io.sockets.emit('iith_data_msg', reg_data);
  //console.log(board_dict);

  io.sockets.emit('iith_boards_msg', board_dict);


//  su_registers={};
//  freshness_flag=1;
//  con_su.query("SELECT UnixTime,totalPVPower,W_realtime_PVstr1,W_realtime_PVstr2,W_realtime_PVstr3,W_realtime_PVstr4,"+
  //"W_realtime_PVstr5,W_realtime_PVstr6,W_realtime_PVstr7,W_realtime_PVstr8,W_realtime_PVstr9 "+
//  "FROM systems.plc_readings where UnixTime = "+(T_su+=15).toString(), function (err, result, fields) {
//  if (err) throw err;
//  result_su = result;
  //console.log(result);
 // });
//  for (i=0; i<result_su.length;i++){
    /*su_message = result_su[i].UnixTime+', '
    + result_su[i].W_realtime_PVstr1+', '
    + result_su[i].W_realtime_PVstr2+', '
    + result_su[i].W_realtime_PVstr3+', '
    + result_su[i].W_realtime_PVstr4+', '
    + result_su[i].W_realtime_PVstr5+', '
    + result_su[i].W_realtime_PVstr6+', '
    + result_su[i].W_realtime_PVstr7+', '
    + result_su[i].W_realtime_PVstr8+', '
    + result_su[i].W_realtime_PVstr9+', '
    + result_su[i].totalPVPower;
    console.log(su_message);*/
//    su_registers['p0']=[(new Date(result_su[i].UnixTime*1000)).toLocaleString(),freshness_flag];
//    su_registers['p1']=result_su[i].W_realtime_PVstr1;
//    su_registers['p2']=result_su[i].W_realtime_PVstr2;
//    su_registers['p3']=result_su[i].W_realtime_PVstr3;
//    su_registers['p4']=result_su[i].W_realtime_PVstr4;
//    su_registers['p5']=result_su[i].W_realtime_PVstr5;
//    su_registers['p6']=result_su[i].W_realtime_PVstr6;
//    su_registers['p7']=result_su[i].W_realtime_PVstr7;
//    su_registers['p8']=result_su[i].W_realtime_PVstr8;
//    su_registers['p9']=result_su[i].W_realtime_PVstr9;
//    su_registers['p10']=result_su[i].totalPVPower;
//    io.sockets.emit('su_data_msg', su_registers);
// };














},

15 * 1000

); // 60 * 1000 milsec




setInterval(
  function() {


   console.log('received query for A block total');
	  //var a_query = 'SELECT * FROM `block_totals` order by tstamp desc limit 120';
	  var a_query='SELECT * FROM (SELECT * FROM `block_totals` order by tstamp DESC limit 120) sub ORDER BY `tstamp` ASC'
	  con.query(a_query, function (err, result, fields) {
    if (err) throw err;
    A_history_result = result;
	io.sockets.emit('a_block_history', A_history_result);
	console.log('server sending A block historical data');
    });


  },
  10 * 1000
  );
