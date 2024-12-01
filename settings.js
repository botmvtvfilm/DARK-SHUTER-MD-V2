const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'urIm3SjS#_y4VCGDbda6-cGIvHCFymRCXiXud2S7CUU7iQQ0TyvU' : process.env.SESSION_ID,
};
