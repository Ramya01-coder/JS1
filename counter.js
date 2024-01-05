const para = document.getElementsByTagName("p");
let count = 0;
function incr() {
  if (count < 25) {
    count++;
    if(count%2==0)
    {
        para[0].textContent = "Even"
    }
    else{
        para[0].textContent = "Odd"
    }
    para[1].textContent = count;
    para[2].textContent = "incremented";
  } else {
    alert("Cannot display greater than 25");
  }
}
function decr() {
  if (count > 0) {
    count--;
    if(count%2==0)
    {
        para[0].textContent = "Even"
    }
    else{
        para[0].textContent = "Odd"
    }
    para[1].textContent = count;
    para[2].textContent = "decremented";
  } else {
    alert("Cannot display less than 0");
  }
}
function reset() {
  count = 0;
  para[0].textContent = "";
  para[1].textContent = count;
  para[2].textContent = "";
}
