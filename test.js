var list = ['geek','geekster', 'geeky'];
function geek(list)
{
    for(let i=0;i<list.length;++i)
    {
       if(list[i]==="geekster")
        {
         console.log("index number of geekster is:" + i);
         list.splice(i,1);
         console.log(list);
        }
    }
}
geek(list);



//index position of b
var arr= ['a','b','c','d'];
function find(arr)
{
    for(let i=0;i<arr.length;++i)
    {
        if(arr[i]==="b")
        {
         console.log("index number of b is:" + i);
    }
}
}
find(arr);
