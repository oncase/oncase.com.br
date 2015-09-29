/**
    @marpontes

    The intention to this program is to save to our git repo
    rendered versions of our Angularjs website once we know that web crawlers
    don't render/handle javascript apps.

    So after a commit that would drastically change our site content,
    we should re-generate the robots content accordingly. [TODO]: AUTOMATE-THIS

    No variable should be configured in this file. There's the 
    static-render-cfg.js for this purpose.
    
    In order to run this renderer, you should - somewhere - have a running
    instance of prerender [https://github.com/prerender/prerender].

    After ensuring that prerender is running, also make sure that you're
    pointing your config variables to the correct places.

    To call the program, you should use
      $ node static.render.js

    When the program is done executing, you should be able to commit the
    changes it's made to your git repo.


 */

var http = require('http'),
    fs = require("fs"),
    cfg = require("./static-render-cfg.js"),
    prerenderUrl = cfg.PRERENDER_URL,
    saveTo = cfg.GIT_REPO_URL + "/prerender",
    requestDomain = "http://oncase.com.br",
    htmlName = "index.html",
    urls = cfg.URLS;



function getFileUrl(url){
  return saveTo + url + htmlName;
}


function getSiteUrl(url){
  return prerenderUrl + requestDomain + url;
}


function processChunks(url,responses){
    var newFile = getFileUrl(url);
    console.log("[oncase.com.br][static-render] Processing chunks: "+newFile);
    fs.writeFileSync(newFile, responses.join(), "utf8");
}


urls.forEach(function(url) {

  var responses = []
      reqUrl = getSiteUrl(url),
      saveToPath = getFileUrl(url);

  http.get(reqUrl, function(res) {

    res.on('data', function(chunk){
      console.log("[oncase.com.br][static-render] Ddata arrived for: "+url);
      responses.push(chunk);
    });

    res.on('end', function(){
        processChunks(url,responses);
    });

  });

})