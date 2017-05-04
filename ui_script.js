/* ui_script.js
POSTフォームの追加を行う
*/

// フォームの個数
var form_count = 0;

/* フォームの追加 */
function Add(){
  form_count++;
  form_count_str = String(form_count);

  // フォームの追加
  var div_element = document.createElement("div");
  div_element.innerHTML = "<p>post" + form_count_str + "(key,value)</p>"
    + "<form name=\"post" + form_count_str + "_form\">"
    + "  <input type=\"text\" name=\"key\">"
    + "  <input type=\"text\" name=\"value\">"
    + "</form>";
  var parent_object = document.getElementById("post_form");
  parent_object.appendChild(div_element);
}

/* --- Formからのデータの受け取り --- */
function getForms(){
  //result
  var names_array = [""];
  var values_array = [""];

  //URL
  var url = url_form.textbox.value;

  // add script
  for (var count=1 ; count<=form_count ; count++){
    var get_form_script = "  names_array.push(post"+ count + "_form.key.value);"
    + "  values_array.push(post" + count + "_form.value.value);";

    eval(get_form_script);
  }
  names_array.shift();
  values_array.shift();

  return [url,names_array,values_array];
}
