var fs = require('fs');
var CONFIG_FILE_PATH = "/boot/config.txt";


module.exports = function(){
  var pi_config      = fs.readFileSync(CONFIG_FILE_PATH).toString();
  var index_of_display_rotate = pi_config.lastIndexOf("display_rotate=");
  if(index_of_display_rotate == -1)
    return 0
  var display_rotate = pi_config.slice(index_of_display_rotate , pi_config.length);
  var result         =  display_rotate.slice(display_rotate.indexOf("=")+1, display_rotate.indexOf("\n")).trim();
  return result ;
}