//Linked list

var sLinkedList = (function(){
  
  var head = null;
  var current = null;
  var size = 0;
  
  //Create list object
  function createNode(data){
      
    var obj = {};
        obj.node = data;
        obj.next = null;
    
    return obj;
    
  }
  
  //Add method to add nodes to the list
  function addToList(data){
    
    var list = createNode(data);
    
    if(head === null){
      
      head = list;
      current = head;
    }else{
      
      while(current.next != null){
        current = current.next;
      }
      
      current.next = list;
    }
    
    size++; //Increase the size
  }

  function getSize(){ 
      return size;
  }
  
  function findKthElementFromLast(k){
    
    if(!size){
      throw "Empty List";
      return;
    }
    
    if(!k || k > size){
      throw "Need Valid input";
      return;
    }
    
    if(size > 0 && k >= 0){
      
      var diff = size - k, i =0, l = head;
      
      while(i < diff){
        l = l.next;
        i++;
      }
      return l.node;
    }
    
    return false;
  }
  
  return{
    add : addToList,
    count : getSize,
    find: findKthElementFromLast
  }
  
  
  
  
})();


//Implemention 
sLinkedList.add(1);
sLinkedList.add(2);
sLinkedList.add(3);
sLinkedList.add(4);
sLinkedList.add(5);
sLinkedList.add(6);
sLinkedList.add(7);
sLinkedList.add(8);
sLinkedList.add(9);
sLinkedList.add(10);


console.log(sLinkedList.find(5)); //logs 6
