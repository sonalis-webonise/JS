/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


var storage = sessionStorage;
var local_storage=localStorage;

function set(key, value) {
   console.log(key, value);
   this.setItem(key, value);
}

function get(key){
   console.log(this.getItem(key));
}

function remove (key) {
   console.log(this.removeItem(key));
}
function removeall(){
   console.log(this.clear());
   
}

set.call(storage, "name", "sonali");
get.call(storage,"name");
remove.call(storage,"name");
removeall.call(storage);

set.call(local_storage, "name", "sulgadle");
get.call(local_storage,"name");
remove.call(local_storage,"name");
removeall.call(local_storage);
