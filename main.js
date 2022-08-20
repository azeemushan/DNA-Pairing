function pairElement(str) {
  let arr=[];
  for(let i=0; i<str.length; i++){
    let x=str[i];
    if(x=='C'){
      let sa=['C','G'];  
      arr.push(sa)
    }
    if(x=='G'){
      let sa=['G','C'];  
      arr.push(sa)
    }
    if(x=='A'){
      let sa=['A','T'];  
      arr.push(sa)
    }

    if(x=='T'){
      let sa=['T','A'];  
      arr.push(sa)
    }
  }
  return arr;
}

pairElement("GCG");
