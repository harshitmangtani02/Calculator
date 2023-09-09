let one=document.getElementById("1")
let two=document.getElementById("2")
let three=document.getElementById("3")
let four=document.getElementById("4")
let five=document.getElementById("5")
let six=document.getElementById("6")
let seven=document.getElementById("7")
let eight=document.getElementById("8")
let nine=document.getElementById("9")
let zero=document.getElementById("0")
let dzero=document.getElementById("00")
let clear=document.getElementById("c")
let dec=document.getElementById("point")
let add=document.getElementById("plus")
let sub=document.getElementById("minus")
let mul=document.getElementById("multiply")
let division=document.getElementById("divide")
let percent=document.getElementById("per")
let backspace=document.getElementById("back")
let eq=document.getElementById("equal")
let f1=document.getElementById("inp1")
let f2=document.getElementById("inp2")
let btns = document.querySelectorAll('button');

let pc=0
let s=""
let z=""
let f=0
let o=0
let h=0
let arr=[]
f1.value=""
f2.value=""

one.addEventListener("click",function(e){
    if(h==1){
        f1.value="1"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="1"
    f1.value+="1";
    z+="1"
    if(f==1){
        f2.value=eval(z)
    }
})
two.addEventListener("click",function(e){
    if(h==1){
        f1.value="2"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="2"
    f1.value+="2";
    z+="2"
    if(f==1){
    f2.value=eval(z)
    }
})
three.addEventListener("click",function(e){
    if(h==1){
        f1.value="3"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="3"
    f1.value+="3";
    z+="3"
    if(f==1){
    f2.value=eval(z)
    }
})
four.addEventListener("click",function(e){
    if(h==1){
        f1.value="4"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="4"
    f1.value+="4";
    z+="4"
    if(f==1){
    f2.value=eval(z)
    }
})
five.addEventListener("click",function(e){
    if(h==1){
        f1.value="5"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="5"
    f1.value+="5";
    z+="5"
    if(f==1){
    f2.value=eval(z)
    }
})
six.addEventListener("click",function(e){
    if(h==1){
        f1.value="6"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="6"
    f1.value+="6";
    z+="6"
    if(f==1){
    f2.value=eval(z)
    }
})
seven.addEventListener("click",function(e){
    if(h==1){
        f1.value="7"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="7"
    f1.value+="7";
    z+="7"
    if(f==1){
    f2.value=eval(z)
    }
})
eight.addEventListener("click",function(e){
    if(h==1){
        f1.value="8"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="8"
    f1.value+="8";
    z+="8"
    if(f==1){
    f2.value=eval(z)
    }
})
nine.addEventListener("click",function(e){
    if(h==1){
        f1.value="9"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="9"
    f1.value+="9";
    z+="9"
    if(f==1){
    f2.value=eval(z)
    }
})
zero.addEventListener("click",function(e){
    if(h==1){
        f1.value="0"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="0"
    f1.value+="0";
    z+="0"
    if(f==1){
    f2.value=eval(z)
    }
})
dzero.addEventListener("click",function(e){
    if(h==1){
        f1.value="00"
        f2.value=""
        s=f1.value
        z=f1.value
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        arr.clear()
    }
    if(o>0){
        f=1
    }
    s+="00"
    f1.value+="00"
    z+="00"
    if(f==1){
    f2.value=eval(z)
    }
})
dec.addEventListener("click",function(e){
    if(h==1){
        f1.value=""
        f2.value=""
        s=f1.value
        z=f1.value
        pc=0
        h=0
        o=0
        f=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
        // arr.clear()
    }
    if(pc==0){
        if(s=="" || f1.value==""){
            f1.value+="0."
            z+="0."
            if(f==1){
            f2.value+="0."
            }
        }
        else{
            f1.value+="."
            z+="."
            if(f==1){
            f2.value+="."
            }
        }
    }
    s+="."
    pc++
    if(f==1){
        f2.value=eval(z)
    }
})
c.addEventListener("click",function(e){
    f1.style.color="white"
    f1.style.fontSize="40px"
    f2.style.color="rgba(128, 128, 128, 0.705)"
    f2.style.fontSize="25px"
    f1.value=""
    z=""
    f2.value=""
    s=f1.value
    f=0
    o=0
    
    pc=0
  
    arr.clear()
    arr.push(f2.value)
})
add.addEventListener("click",function(e){
    if(h==1){
        f1.value=f2.value.toString()
        f2.value=""
        s=f1.value
        z=f1.value
        f=0
        o=0
        h=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
    }
    arr.push(parseFloat(s))
    if(s==""){
        f1.value=f1.value.slice(0,-1)
        z=z.slice(0,-1)
        f2.value=eval(z)
        o--
    }
    if(f1.value!=""){
        if(f1.value.substring(f1.value.length,f1.value.length-1)=="."){
            f1.value+="0+"
            o++
            z+="0+"
            pc=0
            s=""
            f2.value=eval(z)
        }
        else{
            f1.value+="+"
            o++
            z+="+"
            pc=0
            s=""
            console.log(f1.value)
    console.log(s)
    console.log(o)
            f2.value=eval(z)
        }
        f=1
    }
})
sub.addEventListener("click",function(e){
    if(h==1){
        f1.value=f2.value.toString()
        f2.value=""
        s=f1.value
        z=f1.value
        f=0
        o=0
        h=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
    }
    arr.push(parseFloat(s))
    f=1
    if(s==""){
        if(f1.value.substring(f1.value.length,f1.value.length-1)=="-" || f1.value.substring(f1.value.length,f1.value.length-1)=="+"){
        f1.value=f1.value.slice(0,-1)
        z=z.slice(0,-1)
        s=""
        f2.value=eval(z)
        }
    }
    if(f1.value!=""){
        if(f1.value.substring(f1.value.length,f1.value.length-1)=="."){
            f1.value+="0-"
            o++
            z+="0-"
            pc=0
            s=""
            f2.value=eval(z)
        }
        else{
            f1.value+="-"
            o++
            z+="-"
            pc=0
            s=""
            f2.value=eval(z)
        }
    }
})
mul.addEventListener("click",function(e){
    if(h==1){
        f1.value=f2.value.toString()
        f2.value=""
        s=f1.value
        z=f1.value
        f=0
        o=0
        h=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
    }
    arr.push(parseFloat(s))
    f=1
    if(s==""){
        f1.value=f1.value.slice(0,-1)
        z=z.slice(0,-1)
        f2.value=eval(z)
    }
    if(f1.value!=""){
        if(f1.value.substring(f1.value.length,f1.value.length-1)=="."){
            f1.value+="0×"
            o++
            z+="0*"
            pc=0
            s=""
            f2.value=eval(z)
        }
        else{
            f1.value+="×"
            o++
            z+="*"
            pc=0
            s=""
            f2.value=eval(z)
        }
    }
})
percent.addEventListener("click",function(e){
    if(h==1){
        f1.value=f2.value.toString()
        f2.value=""
        s=f1.value
        z=f1.value
        f=0
        o=0
        h=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
    }
    arr.push(parseFloat(s))
    f=1
    if(s==""){
        f1.value=f1.value.slice(0,-1)
        z=z.slice(0,-1)
        f2.value=eval(z)
    }
    if(f1.value!=""){
        if(f1.value.substring(f1.value.length,f1.value.length-1)=="."){
            f1.value+="0%";
            o++
            z+="0%"
            pc=0
            s=""
            f2.value=eval(z)
        }
        else{
            f1.value+="%";
            o++
            z+="%"
            pc=0
            s=""
            f2.value=eval(z)
        }
    }
})
division.addEventListener("click",function(e){
    if(h==1){
        f1.value=f2.value.toString()
        f2.value=""
        s=f1.value
        z=f1.value
        f=0
        o=0
        h=0
        f1.style.color="white"
        f1.style.fontSize="40px"
        f2.style.color="rgba(128, 128, 128, 0.705)"
        f2.style.fontSize="25px"
    }
    arr.push(parseFloat(s))
    f=1
    if(s==""){
        f1.value=f1.value.slice(0,-1)
        z=z.slice(0,-1)
        f2.value=eval(z)
    }
    if(f1.value!=""){
        if(f1.value.substring(f1.value.length,f1.value.length-1)=="."){
            f1.value+="0÷"
            o++
            z+="0/"
            pc=0
            s=""
            f2.value=eval(z)
        }
        else{
            f1.value+="÷"
            o++
            z+="/"
            pc=0
            s=""
            f2.value=eval(z)
        }
    }
})
eq.addEventListener("click",function(e){
    if(f2.value!=""){
    h=1

    f1.style.color="rgba(128, 128, 128, 0.705)"
    f1.style.fontSize="25px"
    f1.style.transform="smooth"
    f1.style.transition="0.5s"

    f2.style.color="white"
    f2.style.fontSize="40px"
    f2.style.transform="smooth"
    f2.style.transition="0.5s"
    }
})
backspace.addEventListener("click",function(e){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
    let temp1=f1.value.substring(f1.value.length,f1.value.length-1)
    if(temp1=="."){
        pc=0
    }
    if(temp1=="+" || temp1=="-" || temp1=="%" || temp1=="÷" || temp1=="×"){
        o--
        if(Number.isInteger(arr[arr.length-1])==true){
            pc=0
        }
        else{
            pc=1
        }
        arr.pop()
    }
    
    f1.value=f1.value.slice(0,-1)
    let temp2=f1.value.substring(f1.value.length,f1.value.length-1)
    if(temp2=="+" || temp2=="-" || temp2=="%" || temp2=="÷" || temp2=="×"){
        if(o==1){
            f=0
        }
        s=""
    }
    else{
        s="+"
    }
    z=z.slice(0,-1)
    if(z.length==0){
        f2.value=""
    }
    else{
        if(f==1){
            if(o>0){
            f2.value=eval(z)
            }
            else{
                f2.value=""
            }
        }
        else{
            f2.value=""
        }
    }
})










