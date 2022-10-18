function addFooter(el) {
  const footer = document.createElement("div");
  footer.innerHTML = `<div class="footer">
        <div class="footer-logo">
                <img src="./img/logo.png" alt="logo" class="logo" />
  
        </div>
        <div class="redes_conteiner">
            <div class="footer-inst">
            <h4 class="inst">Instagram</h4>
               <img src="./img/instagram.png" alt="" class="inst-img" />
            
         </div>
        <div class="footer-inst">
            <h4 class="link">Linkedin</h4>
            <img src="./img/linkedin.png" alt="" class="link-img" />
         
        </div>
        <div class="footer-git">
            <h4 class="git">Github</h4>
           <img src="./img/github.png" alt="" class="git-img" />
          
        </div>
        </div>
    </div>`;

  el.appendChild(footer);
}
