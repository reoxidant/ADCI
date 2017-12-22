	var text = document.getElementById('text');
	var buttonNext = document.getElementById('btn');
	var body = document.getElementById('body');
	var buttonBack = document.createElement('button');

	function buttonClick() {
	    if (document.getElementById('input').value == "") {
	        alert("Впишите поле");
	    } else {
	        buttonBack.setAttribute("onclick", "buttonClickBack()");
	        buttonBack.setAttribute("id", "btn_back");
	        buttonNext.setAttribute("onclick", "buttonClickNext()");

	        text.innerHTML = "Введите фамилию:";
	        buttonBack.innerHTML = "Назад";
	        buttonNext.innerHTML = "Далее";

	        body.appendChild(buttonBack);
	        document.getElementById('input').value = "";
	    }

	}

	function buttonClickBack() {
	    text.innerHTML = "Введите имя:";
	    document.getElementById('btn_back').remove();
	    document.getElementById('btn').setAttribute("onclick", "buttonClick()");

	}

	function buttonClickBack2() {
	    buttonBack.setAttribute("onclick", "buttonClickBack()");
	    buttonBack.setAttribute("id", "btn_back");
	    buttonNext.setAttribute("onclick", "buttonClickNext()");
	    text.innerHTML = "Введите фамилию:";
	    buttonBack.innerHTML = "Назад";
	    buttonNext.innerHTML = "Далее";
	}

	function buttonClickNext() {
	    if (document.getElementById('input').value == "") {
	        alert("Впишите поле")
	    } else {
	        text.innerHTML = "Введите email:";
	        document.getElementById('btn').innerHTML = "Завершить!";
	        document.getElementById('btn').setAttribute("onclick", "finish()");
	        document.getElementById('btn_back').setAttribute("onclick", "buttonClickBack2()");
	        document.getElementById('input').value = "";
	    }
	}

	function finish() {
	    if (document.getElementById('input').value == "") {
	        alert("Впишите поле");
	    } else {
	        alert("Спасибо!");
	        document.getElementById('input').value = "";
	    }


	}