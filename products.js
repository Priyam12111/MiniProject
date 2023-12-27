  document.querySelectorAll('.buyopt h3')[0].addEventListener('click',()=>{
      console.log("You buy one earbud");
      localStorage.setItem('CartBox',`${document.querySelector('.itemInfo h2').innerText}`)
      localStorage.setItem('CartBoxPrices', `${document.querySelector('.itemInfo h4').innerText.split(" ")[1].split("<")[0].replace("$","")}`);
      localStorage.setItem('CartBoxquant', 1);
      localStorage.setItem('CartBoxImages', `${document.querySelector('.itemImg img').src}`);
      document.querySelectorAll('.buyopt h3')[0].innerHTML = "<a style='color:black' href='/MiniProject/cart.html'>Go to Cart</a>"
  })
