$(document).ready(function() {
    for (i = 0; i < ahmad.length; i++) {
        $("#video").append(`
			<div class='col-lg-5 video row'>
				<div class="col-lg-5 videoimg">
					<img src="${ahmad[i].image}">
				</div>
				<div class="col-lg-7 description">
					<h1>${ahmad[i].name}</h1>
					<hr>
					<h5>${ahmad[i].descrip}</h5>
				</div>
					<button class="like">${Math.floor((Math.random() * 1) + 1)}</button>
					<button id="dd">Like </button>
					</div>`);
    }
});

//$("#dd").on("click",function(){

