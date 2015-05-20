(function(root, factory){
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.jsonpRequest = root.jsonprequest = factory();
  }
}(this, function(){
  return function(url, callback) {
    var now = Date.now(), cb = ('jQuery' + now + '_' + now);
    window[cb] = function(resp){
      return (callback && callback(resp)) || delete window[cb];
    };
    var script = document.createElement('script'); script.src = (url + (/\?/.test(url) ? '&' : '?') + 'callback=' + cb);
    document.body.appendChild(script);
  }
}));
