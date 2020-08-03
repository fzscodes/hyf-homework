window.handleHomeRequest = () => {
  document.body.innerHTML = `
  <header></header>
  <div class="main_img"></div>
  <div class="topnav" id="myTopnav">
		<footer> 
		</footer>
  `;
  $(document).ready(function(){
    $('header').load("pages/header.html");
   $('footer').load("pages/footer.html");
});
  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
