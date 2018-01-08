function add(i,j)
{
    return i+j;
}
function mul(i,j)
{
    return i*j;
}
function operation(func,a)
{ 
    function op(b)
    {
        return func(a,b);
    }
   return op;   
}
console.log(add(10,20));
console.log(mul(10,20));
console.log(operation(add,10)(20));
console.log(operation(mul,10)(20));