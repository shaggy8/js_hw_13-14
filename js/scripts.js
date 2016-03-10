jQuery(function () {
	'use strict'
	var originTest = {
		'test1': {
			'question': 'На клавіатурі кнопки тиснемо, а на екрані\
					нічого не відбувається. Що зробили не так?',
			'answers': ['Вчора щось не те з\'їли', 'Не вмикнули комп\'ютера',
					'Ананаси і єноти!!!'],
			'rightAnswer': ['Не вмикнули комп\'ютера']
		},
		'test2': {
			'question': 'Вмикнули бравзера, а всі сайти якось\
					дивно відображаються. Як виправити недолік?',
			'answers': ['Під\'єднати інтернет',
					'Не користуватися бравзерами Internet Explorer',
					'Постукати по монітору'],
			'rightAnswer': ['Під\'єднати інтернет',
					'Не користуватися бравзерами Internet Explorer']
		},
		'test3': {
			'question': 'На сайтах все шевелиться, анімується,\
					змінює колір — це...',
			'answers': ['хтось трясе твого монітора', 'класно!', 'javaScript'],
			'rightAnswer': ['javaScript']
		},
	};

	localStorage['madTest'] = JSON.stringify(originTest);
	var test = JSON.parse(localStorage['madTest']);
	var rightAnswers = getRightAnswers();
	
	writeTest();
	getRightAnswers();
	$('input[type=submit]').click(checkResults);

	function getTest() {
		for (var key in test) {
			test[key]['answers'] = test[key]['answers'].sort(function() {
				return Math.random() - 0.5});
		}
		return test;
	};

	function writeTest() {
		$('ol').html(tmpl( 'madtest', {'test': getTest()} ));
	}


	function getRightAnswers() {
		var answers = [];
		for (var key in test) {
			answers = answers.concat(test[key]['rightAnswer']);
		}
		return answers;
	}


	function checkResults(event) {
		event.preventDefault();
		var val = 0;
		var answers = $('input:checked').parent().text();
		for (var i = 0; i < rightAnswers.length; i++) {

			if (answers.indexOf(rightAnswers[i]) + 1) {
				val++;
			} else {
				val--;
			}
		}
console.log(val);
	}
});