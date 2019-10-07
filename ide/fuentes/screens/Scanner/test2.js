function readTextFile2(callback) {
    var params = '';
    var xmlhttp = new XMLHttpRequest();
    var result = '';
    xmlhttp.onreadystatechange =  function () {
        if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            params = xmlhttp.responseText;
            callback(split_param(params));
        }
    };
    xmlhttp.open("GET", "params.txt", true);
    xmlhttp.send();
}

function split_param(text) {
    var responseArray = [];
    console.log(text);
    var s = text.split(";");
    for(i=1;i<s.length;i++){
            responseArray.push(s[i].split("\n")[0]);
    }
   // console.log(responseArray);
    return responseArray;
    /*
    console.log(s[1]);
    var test = s[3].split("\n");
    console.log(test[0]);*/
}