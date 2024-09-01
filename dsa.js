// console.log('creating a custom array');

// class MyArray {
//     constructor(){
//         this.length = 0
//         this.data = {}
//     }

//     push(args){
//         this.length++
//         this.data = {
//             ...this.data,
//             [this.length] : args
//         }
//         return this.length
//     }

//     pop(){
//         if (this.length == 0 ) return undefined
//         const deletedData = this.data[this.length]
//         delete this.data[this.length]
//         this.length--
//         return deletedData
//     }
    
// }

// const arrayObj = new MyArray()

// arrayObj.push('sahil')
// arrayObj.push(12)
// arrayObj.push(true)
// arrayObj.push({name : 'sahil'})

// console.log('before delete ',arrayObj)
// arrayObj.pop()
// console.log('after delete ',arrayObj)





// --- reverse a string  

// function rev_str(str = ''){
//     if (str == '' || typeof str != 'string') return 'not valid string';

//     let res = ''
//     for (let i = str.length-1; i >= 0; i--) {
//         res += str[i]
//     }

//     // console.log('reverse string' , res , 'original str : ', str )
//     return res
// }


// function palindrome(str){
//     const rev = rev_str(str)
//     return str == rev
// }   

// console.log('palindrome', palindrome('haah'))


// function rev_int(numb){
//     let res = '';
//     while (numb) {
//         const rem  = numb % 10
//         numb = Math.round(numb / 10)
//         res += rem
//     }
//     return parseInt(res)
// }

// console.log(rev_int(1234));


// function fizzBuzz(num){
//     for (let i = 1; i <= num; i++) {
//         let opStr = ''
//         if (i % 5 == 0 && i % 3 == 0) {
//             opStr += 'FizzBuzz'
//         }else{
//             if (i % 3 == 0) opStr += 'Fizz'
//             if (i % 5 == 0) opStr += 'Buzz'
//         }
//         console.log(${i} : ${opStr})
//     }
// }

// fizzBuzz(15)



// function maxProfit(arr){
//     !arr.length && 'Enter valid Array'

//     let profit = 0
//     let min = arr[0]
//     let max = 0

//     for (let i = 0; i < arr.length; i++) {
//         min = Math.min(arr[i] ,min);
//         max = Math.max(min, arr[i]);

//         if ((max - min) > profit) {
//             profit = max - min
//         }
//     }

//     return profit
// }
// console.log(maxProfit([7,6,4,3,1]));


// function arrayChunk(arr , cSize){
//     let res = []
//     while (arr.length) {
//         if (arr.length > cSize) {
//             res.push(arr.slice(0,cSize))
//             arr.splice(0, cSize)
//         }else if(arr.length < cSize){
//             res.push([...arr])
//             arr.splice(0,arr.length)
//         }
//     }
//     return res
// }

// arrayChunk([1,2,3,4,5,6,7,8,9,0], 4)


// two sum 

// function twoSum(arr, target){
//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i] + arr[j] == target){
//                 console.log(`${arr[i]} , ${arr[j]} : [${[i , j]}]`);
//                 return [i , j]
//             }
//         }
//     }
// }

// const arr = [3,3]
// console.log(twoSum(arr , 6));

// linked list is linear data structure and its elements are called a nodes and nodes are not stroed in a contiguous mennory, but each nodes contains a refrence of another node or link of another nodes and the last node hold the reference null
 

// node {data : 1, next : null}

// class Node{
//     constructor(value){
//         this.head = value
//         this.next = null 
//     }
// }

// class LinkedList{
//     constructor(value){
//         this.head = value ? new Node(value) : null
//         this.tail = this.head
//         this.length = value ? 1: 0
//     }

//     push(value){
//         const newNode = new Node(value)

//         if (this.head) {
//             this.tail.next = newNode
//         }else{
//             this.head = newNode
//         }

//         this.tail = newNode
//         this.length++
//     }

//     pop(){
//         if (!this.head) {
//             return undefined
//         }

//         let temp = this.head
//         let prev = this.head

//         while(temp.next){
//             prev = temp
//             temp = prev.next
//         }

//         if (this.length == 0) {
//             this.head = null
//             this.next = null
//         }

//         this.tail = prev
//         this.tail.next = null
//         this.length--

//         return temp
//     }

//     unshift(value){
//         let newNode = new Node(value)
//         if (!this.head) {
//             this.head = newNode
//             this.tail = newNode
//         }
//         newNode.next = this.head
//         this.head = newNode
//         this.length++ 
//     }

//     shift(){
//         if (!this.head) {
//             return undefined
//         }
//         this.head = this.head.next.head
//         this.length--
//     }


//     getFirst(){
//         return this.head
//     }

//     getLast(){
//         let temp = this.head

//         while(temp.next){
//             temp = temp.next
//         }

//         return temp
//     }

//     getElementById(id){
//         if (!this.head) {
//             return 'No Node Found!'
//         }

//         let count = 0
//         let temp = this.head

//         while(temp){
//             if (count ==  id) {
//                  return temp
//             }
//             count++
//             temp = temp.next
//         }
//     }

//     setElementById(id, value){
//         let nodeFound = this.getElementById(id)
//         if (nodeFound) {
//             nodeFound.head = value
//             return true
//         }
//         return false
//     }

//     insertById(index , value){
//         if (!this.head) {
//             return 'No Node Found!'
//         }

//         if (index == 0) {
//             this.unshift(value)
//         }
//         if (index == this.length) {
//             this.push(value)
//         }

//         let newNode =  new Node(value)

//         const temp = this.getElementById(index - 1)
        
//         if (!temp) {
//             return false
//         }
//         newNode.next = temp.next
//         temp.next = newNode
//         return true
        
//     }

//     size(){
//         return this.length
//     }

//     clear(){
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }
// }

// const myLinkedList = new LinkedList()

// console.log(myLinkedList);


// doubly linked list is same as linked list but in this we have one more refrence of previous node

class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedlist{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    push(value){
        let newNode =  new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        return this
    }

    pop(){
        if (!this.head) {
            return undefined
        }


        let temp = this.head
        let prev = temp
        while(temp.next){
            prev = temp
            temp = temp.next
        }

        prev.next = null
        this.tail = prev
        this.length--
        return this
    }

    shift(){
        if (!this.head) {
            return false
        }

        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length = 0
            return true
        }

        let firstOne =  this.head

        this.head = this.head.next
        this.head.prev = null
        this.length--
        return firstOne
    }

    unshift(value){
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
            this.length++
            return
        }

        let temp = this.head
        this.head = newNode
        newNode.next = temp
        this.length++
    }
}

const MyDoublyLinkedList = new DoublyLinkedlist(2)

MyDoublyLinkedList.unshift(1)
console.log(MyDoublyLinkedList);

MyDoublyLinkedList.unshift(0)
MyDoublyLinkedList.pop()
console.log(MyDoublyLinkedList);


