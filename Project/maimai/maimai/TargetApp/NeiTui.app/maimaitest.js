;function loadSchemeToCallNativeFunction(scheme)
{
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", scheme);
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}

;function creatMaiMaiTest()
{
    var object = {};
    object.getUrl = function(url, callback)
    {
        loadSchemeToCallNativeFunction('maimainative://maimaitest/geturl?url='+encodeURIComponent(url)+'&callback='+encodeURIComponent(callback));
        
    };
    
    object.dnsResolve = function(domain, callback)
    {
        loadSchemeToCallNativeFunction('maimainative://maimaitest/dnsresolve?domain='+encodeURIComponent(domain)+'&callback='+encodeURIComponent(callback));
    };

    object.getJSONObject = function(url, callback)
    {
        loadSchemeToCallNativeFunction('maimainative://maimaitest/getjson?url='+encodeURIComponent(url)+'&callback='+encodeURIComponent(callback));
    };
    
    return object;
};

var MaiMaiTest = creatMaiMaiTest();

