// Define a factory function for creating a factory function
const createNode = (value) => {
  return {
    value, // value of the node
    next: null, // pointer to the next node
  }
}

// Define a factory function for creating a new linked list
const createLinkedList = () => {
  return {
    head: null, // the begining of the list initialized to null
    tail: null, // the end of the list initialized to null
    length: 0, // the length of the list initailed to 0

    // Method to add a new node at the end of the list
    append(value) {
      const newNode = createNode(value) // Create a new node

      if (!this.head) {
        this.head = newNode // Set the new node as the head
        this.tail = newNode // Set the new node as the tail
      } else {
        this.tail.next = newNode // Link the current tail to the new node
        this.tail = newNode // Set the new node as the new tail
      }
      this.length++
    },

    // Method to add a new node to the beginnig of the list
    prepend(value) {
      const newNode = createNode(value)

      if (!this.head) {
        // if the list is empty
        this.head = newNode // Set the new node as the head
        this.tail = newNode // Set the new node as the tail
      } else {
        // if the list is not empty
        newNode.next = this.head // Set the new node's next to the current head
        this.head = newNode // Set the head of the list to the new node
      }
      this.length++
    },

    // Method to remove a node from the end of the list
    pop() {
      if (!this.head) return null // If the list is empty, return null

      let currentNode = this.head // Start at the head of the list
      let secondToLastNode // Keep track of the second to last node

      while (currentNode.next) {
        // While there is a last node
        secondToLastNode = currentNode // Update second to last node
        currentNode = currentNode.next // Move to the next node
      }
      secondToLastNode.next = null // Disconnect the last node
      this.tail = secondToLastNode // Update tail to the second to last node
      this.length-- // Decrement the length of the list

      return currentNode.value // Return the value of the removed node
    },

    // Method to remove the node from the begining of the list
    shift() {
      if (!this.head) return null // If the list is empty, return null

      const oldHead = this.head // Store the current head
      this.head = this.head.next // Set the next node as the new head
      this.length--

      if (this.length === 0) {
        // If the list is now empty
        this.tail = null // Set the tail to null
      }

      return oldHead.value
    },

    // Method to get the value of a node at a specific index
    get(index) {
      if (index < 0 || index >= this.length) return null // If the index is out of bounds return null

      let currentNode = this.head // Start at the head of the list
      for (let i = 0; i < index; i++) {
        // Iterate through the list
        currentNode = currentNode.next // Move to the next node
      }

      return currentNode.value // Return the value of the node at the index
    },

    // Method to convert linked list to an array
    toArray() {
      const elements = [] // initialize an empty array
      let currentNode = this.head // Start at the head of the list

      while (currentNode) {
        // While there is a current node
        elements.push(currentNode.value) // Add the value to the array
        currentNode = currentNode.next // Move to the next node
      }
      return elements // Return the array of values
    },
  }
}

// EXAMPLE USAGE

const list = createLinkedList() // Create a new linked list
list.append('a') // Append 'a' to the list
list.append('b') // Append 'b' to the list
list.prepend('0') // Prepend '0' to the list
console.log(list.toArray()) // Convert the list to an array and log it
