/* post_script.js
POST送信をするスクリプト
*/

/*--- POST送信 ---*/
function sendPost(_url, _keys, _vals){
    var html = '<form method="post" action="'+_url+'" id="postjump" style="display: none;">';
    for(var cnt=0;cnt<_keys.length;cnt++){
        html += '<input type="hidden" name="'+_keys[cnt]+'" value="'+_vals[cnt]+'" >';
    }
    html += '</form>';
    $("body").append(html);
    $('#postjump').submit();
    $('#postjump').remove();
}
