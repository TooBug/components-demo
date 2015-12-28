'use strict';
const $ = require('jquery');
// var Component = require('./component');
import Component from "./component";

const style = require('style!css?modules!./component.css');
$('[component]').each(function(){
	let component = new Component($(this), style);
});
