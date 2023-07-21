// const Node = require('./node');
// const LinkedList = require('./LinkedList');

const linkedList = LinkedList();

linkedList.add("André");
linkedList.add("Busiswa");
linkedList.add("Vuyisa");
linkedList.add("Moipone");
linkedList.add("Ncebakazi");

console.log(linkedList.count());
console.log(linkedList.first()); 		// should return false
console.log(linkedList.last()); 		// should return false

function print (name) {
	console.log("--- : " + name);
}

linkedList.forEach(print);

linkedList.clear();

console.log(linkedList.count()); 

linkedList.add("Ncebakazi");

console.log(linkedList.count()); 

console.log(linkedList.contains("John")); 		
console.log(linkedList.contains("Ncebakazi")); 	
linkedList.add("John");
console.log(linkedList.contains("John")); 		

console.log(linkedList.first()); 		
console.log(linkedList.last()); 		



