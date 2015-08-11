angular.module('directoryApp', [])
	.controller('directoryController', function () {
		
		use strict;
    
        var dirList=this;
		
		dirList.toggle = false;
		
		dirList.list=[
		 {name:'John', age:51},
		 {name:'Jeremy', age:47},
		 {name:'Dee', age:43},
		 {name:'Kalen',age:8},
		 {name:'Reid',age:3}
		];
		
		dirList.addPerson = function(){
		 dirList.list.push({name:dirList.name,age:dirList.age});
		 dirList.name='';
		 dirList.age=0;
		};
		dirList.clear = function(){
		 dirList.list=[];
		}
	});
