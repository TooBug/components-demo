'use strict';
let inputTmpl = require('text!./inputTmpl.html');
let dropdownTmpl = require('text!./dropdownTmpl.html');
const $ = require('jquery');


class Component{

	constructor($ele, style){
		console.log(style);
		let $input = $(inputTmpl);
		let $dropdown = $(dropdownTmpl);
		$ele.append($input).append($dropdown);
		$ele.on('click',function(){
			$dropdown.slideToggle();
		});

		let inputOldClass=[],inputNewClass=[];
		$input[0].classList.forEach((className)=>{
			inputOldClass.push(className);
			inputNewClass.push(style[className]);
		});

		$input.removeClass(inputOldClass.join(' ')).addClass(inputNewClass.join(' '));

		var dropdownOldClass=[],dropdownNewClass=[];
		$dropdown[0].classList.forEach((className)=>{
			dropdownOldClass.push(className);
			dropdownNewClass.push(style[className]);
		});

		$dropdown.removeClass(dropdownOldClass.join(' ')).addClass(dropdownNewClass.join(' '));
	}
}

export default Component;
//module.exports = Component;
