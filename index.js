const Discord = require('discord.js');
const bot = new Discord.Client();

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});

const token = 'Prank';

const PREFIX = '!';

cantdelete = ["try","allgemein","-announcement","get-your-roles","get-your-key","twink-request","-check_in","🔍-check_in","🔉-announcement","mythic➕lfm","mythiclfm"
,"mythic➕report","mythicreport","internal-boosts","freehold-lfm","booster-talk","strikes","preise","gold-change","Mythic","Lobby","Boostertalk#1","Boostertalk#2"
,"Public#1","Public#2","afk","moderator-chat","Moderator","Moderator Talk" ];

candelete = [];

bot.on('message', msg=>{
  
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        
        case 'marvin':

        msg.delete();
        msg.reply(" findet das Marvin echt hart stinkt!")

        break;

        case 'Kraggi':

        msg.delete();
        msg.reply(" findet das Kraggi echt n geiler Manager iz!")

        break;

        case 'Kraggi':

        msg.delete();
        msg.reply(" findet das Shaqur der einzige der Arbeitet ist!")

        break;

        case 'test':

        

        break;

        case 'create':

        let allowedRolecreatea = msg.guild.roles.find("name", "Advertiser");
        let allowedRolecreatead = msg.guild.roles.find("name", "Admin");
        var cnt = args[1];

        if (msg.member.roles.has(allowedRolecreatea.id) ||msg.member.roles.has(allowedRolecreatead.id)){

        msg.delete();       

        var server = msg.guild;
        var name = args[3];
        var acces = false;



        if(cnt == 1){            
            mention = msg.mentions.roles.first();
            acces = true;
            if (name == null || mention == null ){

                msg.reply("Falsches Format! Das Format ist !create anzahlTags @GetagteRolle Channelname"); 
           
            }
        }else if(cnt == 2){

            mention = msg.mentions.roles.first(2);
            name = args[4];
            acces = true;
            if (name == null || mention == null ){

                msg.reply("Falsches Format! Das Format ist !create anzahlTags @GetagteRolle Channelname"); 
           
            }

        }else if(cnt == 3){

            mention = msg.mentions.roles.first(3);
            name = args[5];
            acces = true;
            if (name == null || mention == null ){

                msg.reply("Falsches Format! Das Format ist !create anzahlTags @GetagteRolle Channelname"); 
           
            }

        }else{

            msg.reply("Falsches Format! Du Affe hast vergessen eine anzahl an Tags einzugeben!"); 

        }
        
        name = name.toLowerCase();

        if(acces){            

        msg.reply(" createt channel " + name); 

        server.createChannel(name, "text")
        .then(channel => {
            channel.setParent('572715771512487956');
            channel.send(mention + " " + name);
        })
        candelete.push(name);
       
        }
        }else{

            msg.reply(" Keine Rechte für den Befehl!"); 
            }

        break;

        
        case 'delete': 
        
        let allowedRoledelete = msg.guild.roles.find("name", "Advertiser");
        let allowedRoledeletead = msg.guild.roles.find("name", "Admin");

        exist = msg.guild.channels.find(channel => channel.name === args[1]); ;

        if (msg.member.roles.has(allowedRoledelete.id) || msg.member.roles.has(allowedRoledeletead.id)){
       
            if (args[2] != null){

                msg.channel.send("Falsches Format! Das Format ist !delete Channelname"); 
           
            }else if(exist == null){

                msg.channel.send("Der Channel wurde nicht Gefunden!"); 
            }else{
            allow = false;

            if(candelete.length > 0){    
            for(var i = 0; i <= candelete.length; i++){
                if(candelete[i] == args[1]){
                    allow = true;
                }

            }}

            if(allow){
            versuch = msg.guild.channels.find(channel => channel.name === args[1]);                      

            msg.delete();

            msg.reply(" löscht channel " + args[1]); 

            versuch.delete();
            }else{

                msg.channel.send("Du kannst diesen Channel nicht löschen!"); 

            }
            }
        }else {

        msg.reply(" Keine Rechte für den Befehl!");  
        }
        break;

        case 'addchannel':

        let allowedRoleadd = msg.guild.roles.find("name", "Admin");

        if (msg.member.roles.has(allowedRoleadd.id)){

        cantdelete.push(args[1]);

        for(var i = 0; i < cantdelete.length; i++){

            msg.channel.send(cantdelete[i]); 

        }

        } else {

            msg.reply(" Keine Rechte für den Befehl!"); 
        }
        break;

        case 'showsecurechannel':

        let allowedRoleshow = msg.guild.roles.find("name", "Admin");

        if (msg.member.roles.has(allowedRoleshow.id)){

        if(candelete.length > 0){    
        for(var i = 0; i < cantdelete.length; i++){

            msg.channel.send(candelete[i]); 

        }
        }else{

            msg.channel.send("Is Empty");

        }
        }else {

            msg.reply(" Keine Rechte für den Befehl!"); 
        }
        break;
    }
 

    
    

})

bot.on('ready', ()=> {

    console.log('Test Bot is now Ready!');
    
    })
    
bot.login(process.env.BOT_TOKEN);
//client.login(process.env.BOT_TOKEN);

