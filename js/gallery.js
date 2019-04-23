var seeMoreButton = document.getElementById("see-more");
seeMoreButton.addEventListener('click', seeMore);

function seeMore() {
  var divHidden = document.getElementById("div-hidden");
  divHidden.classList.remove("hidden");
  seeMoreButton.classList.add("hidden");
}