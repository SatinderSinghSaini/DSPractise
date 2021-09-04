let arr=[3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]
let k=10;

let topKFrequent1 = () =>{
        let kv={};
        arr.forEach(e=>{
            if(kv[e]){
                kv[e] = kv[e] + 1;
            }else{
                kv[e] = 1;
            }
        });
        let arrKv = Object.entries(kv);
        let l = arrKv.length;
        return Object.entries(kv).sort((a,b)=>a[1]-b[1]).map(e=>Number(e[0])).slice(l-k,l);
}
topKFrequent1();