const Discord = require('discord.js');
const bot = new Discord.Client();
var Gamsel = false;
const token = 'Prank';
var counter = 0;
const PREFIX = '!';

cantdelete = ["try","allgemein","-announcement","get-your-roles","get-your-key","twink-request","-check_in","🔍-check_in","🔉-announcement","mythic➕lfm","mythiclfm"
,"mythic➕report","mythicreport","internal-boosts","freehold-lfm","booster-talk","strikes","preise","gold-change","Mythic","Lobby","Boostertalk#1","Boostertalk#2"
,"Public#1","Public#2","afk","moderator-chat","Moderator","Moderator Talk" ];

candelete = [];

bot.on('message', msg=>{
  
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        
        case 'Marvin':

        msg.delete();
        msg.reply(" findet das Marvin echt hart stinkt!")

        break;
        
        case 'Gamselon':

        msg.delete();
        msg.reply("Gamsel = " + Gamsel)
        Gamsel = true;
        break;
        
         case 'Gamseloff':

        msg.delete();
        msg.reply("Gamsel = " + Gamsel)
        Gamsel = false;
        break;
        
        
        case 'Zeit':

        msg.delete();
        msg.reply(counter + " T-6E")

        break;

        case 'Kraggi':

        msg.delete();
        msg.reply(" findet das Kraggi echt n geiler Manager iz!")

        break;

        case 'Shaqur':

        msg.delete();
        msg.reply(" findet das Shaqur der einzige der Arbeitet ist!")

        break;

        case 'test':

        

        break;

        case 'create':

        let allowedRolecreatea = msg.guild.roles.find("name", "Advertiser");
        let allowedRolecreatead = msg.guild.roles.find("name", "Admin");        

        if (msg.member.roles.has(allowedRolecreatea.id) ||msg.member.roles.has(allowedRolecreatead.id)){

        msg.delete();       

        var server = msg.guild;
        var name = args[1];  
        
        name = name.toLowerCase();                
      
        server.createChannel(name, "text")
        .then(channel => {
            channel.setParent('572715771512487956');   
            channel.send(name);
            if(Gamsel == true){
            channel.send("Gamsele Hunter DD");
            }

        })
        candelete.push(name);       
        
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
   
counter = counter + 1 ;
//bot.login(process.env.BOT_TOKEN);
bot.login(process.env.BOT_TOKEN);

