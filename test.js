//FIXME: really make some better annotated tests, this is just silly
var _ = require('./underscore');
var Set = require('./underscore.set');

var item1 = 1;
var item2 = {a:2};
var item3 = [1];
var item4 =[{a:2}];

console.log(
    _.isEqual(
	Set([item1,item2,item3]).list(),
	[item1,item2,item3])
	+
	' _.isEqual(Set([item1,item2,item3]).list(),[item1,item2,item3])');

console.log(
    _.isEqual(
	Set().add(item4).list(),
	[item4])
	+
	' _.isEqual(Set().add(item4).list(),[item4])');
console.log(
    _.isEqual(
	(Set([item2]).add(item1).list()),
	[item1,item2])
	+
	' _.isEqual((Set([item2]).add(item1).list()),[item1,item2])');

console.log(
    _.isEqual(
	Set([item2]).add(item1).remove(item2).list(),
	[item1])
	+
	' _.isEqual(Set([item2]).add(item1).remove(item2).list(),[item1])');

console.log(
    _.isEqual(
	Set([item2]).add(item1).remove(item4).list(),
	[item1,item2])
	+
	' _.isEqual(Set([item2]).add(item1).remove(item4).list(),[item1,item2])');

console.log(
    _.isEqual(
	Set().remove(item1).remove(item4).list(),
	[])
	+
	' _.isEqual(Set().remove(item1).remove(item4).list(),[])');
