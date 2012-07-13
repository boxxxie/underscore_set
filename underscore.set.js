//requires underscore.js & JSON.js
/*
 * This is a functional implementation of a SET
 * adding and removing from sets do not overwrite previous values of the set
 */
var _ = require('./underscore');
function Set(initial_items){
    if(initial_items && !_.isObject(initial_items)){
	throw "the set must be given a list of initial items, or empty arguments"
    }
    function initialize_items(initial_items){
	return _.chain(initial_items || [])
	.map(JSON.stringify) //make hashes
	.zip(initial_items) //pair hashes with items
	.unique(false,_.first) //not sorted
	.reduce(function(list,item_hash_pair){
		    var hash = item_hash_pair[0];
		    var item = item_hash_pair[1];
		    list[hash] = item;
		    return list;
		},{})
	.value();
    }

    return (function Trusted_Set(set_items, passed_values){
	   var items = set_items;
	   return {
	       add:function(item){
		   var item_hash = JSON.stringify(item); //only works for sets
		   var new_set = _.clone(items);
		   new_set[item_hash] = item;
		   return Trusted_Set(new_set);
	       },
	       remove:function(item){
		   var item_hash = JSON.stringify(item); //only works for sets
		   var new_set = _.clone(items);
		   delete new_set[item_hash];
		   return Trusted_Set(new_set);
	       },
	       exists:function(item){
		   var item_hash = JSON.stringify(item); //only works for sets
		   return _.has(items,item_hash);
	       },
	       list:function(){
		   return _.values(items);
	       }
	   }
       })
    (initialize_items(initial_items || []))
}
module.exports = Set;