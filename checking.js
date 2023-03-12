// テキストボックス
$(function(){
  $("#textbox").bind("blur", function(){
  var _textbox = $(this).val();
  check_textbox(_textbox);
  });
});

function check_textbox(str){
  $("#err_textbox p").remove();
  var _result = true;
  var _textbox = $.trim(str);

  if(_textbox.match(/^[ \r\n\t]*$/)){
    $("#err_textbox").append("<p><i class=\"fas fa-exclamation-triangle\"></i>テキストボックスを入力してください。</p>");
    _result = false;
  }else if(_textbox.length > 50){
    $("err_textbox").append("<p><i class=\"fas fa-exclamation-triangle\"></i>テキストボックスは50文字以内です。</p>")
    _result = false;
  }
  return _result;
}

// セレクトボタン
$(function(){
	$("#list_id").bind("change blur", function(){
		var _list_id = $(this).val();
		check_list_id(_list_id);
	});
});

function check_list_id(id){
	$("#err_category p").remove();
	var _result = true;
	var _id = id;

	if(!_id.match(/^[0-9]+$/)){
		$("#err_category").append("<p><i class=\"fa fa-exclamation-triangle\"></i>リストを選択してください。</p>");
		_result = false;
	}
	return _result;
}

// ラジオボタン
$(function(){
	$("input[name='radio_item']").bind("change", function(){
		var _radio_item = $("input[name='radio_item']:checked").val();
		check_radio_item(_radio_item);
	});
});

function check_radio_item(type){
	$("#err_radio_item p").remove();
	var _result = true;
	var _type = type;

	if(_type == undefined || !_type.match(/^[0-9]+$/)){
		$("#err_radio_item").append("<p><i class=\"fa fa-exclamation-triangle\"></i>ラジオボタンを選択してください。</p>");
		_result = false;
	}
	return _result;
}

// チェックボックス
$(function(){
	$("input[name='checkbox']").bind("change", function(){
		check_checkbox();
	});
});

function check_checkbox(){
	$("#err_checkbox p").remove();
	var _result = true;
	var _check_count = 0;

	$("input[type='checkbox']").each(function(){
		if($(this).prop('checked')){
			_check_count = _check_count+1;
		}
	});
	if(_check_count == 0){
		$("#err_checkbox").append("<p><i class=\"fa fa-exclamation-triangle\"></i>チェックボックスを1つ以上選択してください。</p>");
		_result = false;
	}
	return _result;
}


// テキストエリア
$(function(){
	$("#textarea").bind("blur", function() {
	var _textarea = $(this).val();
		check_textarea(_textarea);
	});
});

function check_textarea(str){
	$("#err_textarea p").remove();
	var _result = true;
	var _textarea = $.trim(str);

	if(_textarea.length == 0){
		$("#err_textarea").append("<p><i class=\"fa fa-exclamation-triangle\"></i>テキストエリアを入力してください。</p>");
		_result = false;
	}else if(_textarea.length > 1000){
		$("#err_textarea").append("<p><i class=\"fa fa-exclamation-triangle\"></i>テキストエリアは1000文字以内で入力してください。</p>");
		_result = false;
	}
	return _result;
}