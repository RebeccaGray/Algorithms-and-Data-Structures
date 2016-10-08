const hasCycle = (linkedList)=>{
  var t = linkedList,h = linkedList
  while (h.next !== null){
    if(h.next === null) return false
    h = h.next
    if(h.next === null) return false
    h = h.next
    t = t.next
    if(h.value === t.value) return true
  }
  return false
};
