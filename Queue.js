function Queue() {
	let endNode = null;
	let startNode = null;

	function enqueue(value) {

		const newNode = Node(value, null);

		if (endNode == null && startNode == null) {
			startNode = newNode
			endNode = newNode
		} else {
			endNode.setNextNode(newNode)
			endNode = newNode

		}
	}

	function dequeue() {
		if (startNode) {
	console.log('HI');
	console.log(startNode);
			const dequeueValue = startNode.getValue();
			const newNode = startNode.getNextNode();
			startNode = newNode;
			return dequeueValue;

		}
		console.log('Bye');
	}
	return {
		enqueue,
		dequeue
	}
}
