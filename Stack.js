
function Stack() {
		let topNode = null;
	
		function push (value) {
			const newNode = Node(value, null);
			if (topNode == null) {
				topNode = newNode;
			} else {
				newNode.setNextNode(topNode);
				topNode = newNode
			}
		}
	
		function pop() {
	
			if (topNode) {
	
				const poppedValue = topNode.getValue();
				const newTopNode = topNode.getNextNode();
				topNode = newTopNode;
				return poppedValue;
	
			}
	
		}
	
		return {
			push,
			pop
		}
	}
