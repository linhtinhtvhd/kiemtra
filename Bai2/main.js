function alternatingSums(a){
    let arr1=[];
    let arr2=[]
    for(let i=0;i<a.length;i++){
        if(i%2==0){
            arr1.push(a[i])
        }
        else{
            arr2.push(a[i])
        }
    }
    let sum1=arr1.reduce((acc,cur)=>{
        return acc+ cur
    },0)
    let sum2=arr2.reduce((acc,cur)=>{
        return acc+cur
    },0)
    return [sum1,sum2]
}
console.log(alternatingSums([60, 40, 55, 75, 64]))