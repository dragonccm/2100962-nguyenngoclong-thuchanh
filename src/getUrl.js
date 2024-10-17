var url = require('url');
const getpath = (req) => {  
    return req.url;
}
const getParamsURL = (req) => {
    console.log(req.url)
    let urldata =url.parse(req.url,true);
    return JSON.stringify(urldata.query)
}
module.exports = {getpath,getParamsURL}