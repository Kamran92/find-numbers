createGame(createRandomArr(createArr(5)), 5);

// основанная функция, запускает другие функции 
function createGame(arrElem, numLeng) {
	var table = document.querySelector("table");
	var button = document.querySelector("button");
	
	var num1 = 0;
	var num2 = 0;
	
	createTableElem(arrElem, table, num1, numLeng);
	styleRed(table, num2, numLeng);
};

// функция создает таймер обратного отсчета
function timer() {
	intervalID = setInterval(countdown, 1000);
};

// функция создает обратный отсчет
function countdown() {
	var p = document.querySelector("p");
	var table = document.querySelector("table");
	
	p.innerHTML = parseInt(p.innerHTML) - 1 + " сек";
	
	if (parseInt(p.innerHTML) == 0) {
		alert("Нубик проиграл :)");
		
		clearInterval(intervalID);
		
		p.innerHTML = "40 сек";
		table.innerHTML = "";
		numElem = 0;
		
		createGame(createRandomArr(createArr(5)), 5);
	};
};

// функция добавляет при клике красный цвет элементу таблицы
function styleRed(tableElem, numElem, numLeng) {
	var td = tableElem.querySelectorAll("td");
	
	for (var i = 0; i < td.length; i++) {
		td[i].addEventListener("click", function() {
			
			if (this.innerHTML == "1") {
				timer();
			};
			
			var arr = createArr(numLeng);
			if (arr[numElem] == Number(this.innerHTML)) {
				this.style.background = "red";
				numElem += 1;
			};
			
			if (numElem == arr.length) {
				alert("Победил :)");
				
				var p = document.querySelector("p");
				clearInterval(intervalID);
				p.innerHTML = "40 сек";
				clearInterval(intervalID);
				tableElem.innerHTML = "";
				numElem = 0;
				numLeng += 1;
				createGame(createRandomArr(createArr(numLeng)), numLeng);
			};
		});
	};
};

// функция создает элементы из случайных чисел для таблицы
function createTableElem(arrElem, tableElem, numElem, numLeng) {
	for (var i = 0; i < numLeng; i++) {
		var tr = document.createElement("tr");
		
		for (var j = numElem; j < numElem + numLeng; j++) {
			var td = document.createElement("td");
			
			td.innerHTML = arrElem[j];
			tr.appendChild(td);
		};
		
		numElem += numLeng;
		tableElem.appendChild(tr);
	};
};

// функция создает массив
function createArr(numElem) {
	numElem = numElem * numElem;
	var arr = [];
	
	for (var i = 1; i <=numElem; i++) {
		arr.push(i);
	};
	return arr;
};

// функция создает массив из случайных чисел
function createRandomArr(arrElem){
	var arr = [];
	
	while (arr.length < arrElem.length) {
		var num = getRandomInt(1, arrElem.length);
		
		if (arr.indexOf(num) == -1) {
			arr.push(num);
		};
	};
	return arr;
};

// функция выводит случайное число
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};