const htmlc = require('htmlspecialchars')

function stripslashes(data){


    return data.replace(/\//g, "" );
}


function CleanData(data){

    var dat  =  htmlc(data)

    var datt = dat.trim()

    this. d = stripslashes(datt)

}

module.exports = {

CleanData : CleanData
}