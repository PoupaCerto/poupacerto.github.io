$(document).ready(function() {

	/* ======= Fullpage.js ======= */
	/* Ref: https://github.com/alvarotrigo/fullPage.js */

    $('#fullpage').fullpage({
		anchors: ['home', 'organize', 'benefit1', 'benefit2', 'benefit3', 'download'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Inicio', 'Organize suas finanças', 'Alcance seus sonhos', 'Não perca mais dinheiro', 'Tome decisões com mais facilidade', ' Apoiado por...'],
		resize : false,
		scrollBar: true,
		autoScrolling: false,
		paddingTop: '120px'

	});


});
