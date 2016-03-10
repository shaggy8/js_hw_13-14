jQuery(function () {
	'use strict'
	var madTest = {
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

	localStorage['madTest'] = JSON.stringify(madTest);
	
	writeTest();
console.log($('input:checked').parent())

	function getTest() {
		var obj = JSON.parse(localStorage['madTest']);
		for (var key in obj) {
			obj[key]['answers'] = obj[key]['answers'].sort(function() {
				return Math.random() - 0.5});
		}
		return obj;
	};


	function writeTest() {
		$('ol').html(tmpl( 'madmadtest', {'test': getTest()} ));
	}


	function checkResults(argument) {
		// body...
	}
});