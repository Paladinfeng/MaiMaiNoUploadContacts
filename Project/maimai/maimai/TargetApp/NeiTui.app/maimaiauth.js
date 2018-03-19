
;function loadSchemeToCallNativeFunction(scheme)
{
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", scheme);
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}

;function creatMaiMaiAuth()
{
    var object = {};
    object.auth = function(appid, callback)
    {
        loadSchemeToCallNativeFunction('maimainative://maimaiauth/auth?appid='+encodeURIComponent(appid)+'&callback='+encodeURIComponent(callback));
        
    };
    
    object.atUser = function(callback)
    {
        loadSchemeToCallNativeFunction('maimainative://maimaiauth/atuser?callback='+encodeURIComponent(callback));
    };
    
    return object;
};

var MaiMai = creatMaiMaiAuth();


