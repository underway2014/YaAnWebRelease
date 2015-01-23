$(document).ready(function(){


	$(".lcell").hover(function() {
		$(this).find('.ldesc').animate({"top": "35%"}, 400, "swing");
		},function(){
		$(this).find('.ldesc').animate({"top": "85%"}, 400, "swing");
	});

	$(".flplaycell").hover(function() {
		$(this).find('.flplaydesc').animate({"top": "0%"}, 400, "swing");
		$(this).find('.flplaydesc .cellname a').show(200);
		},function(){
		$(this).find('.flplaydesc').animate({"top": "88%"}, 400, "swing");
		$(this).find('.flplaydesc .cellname a').hide(200);
	});

	var arr = $('.descrition p');
		for(var i = 0;i < arr.length;i++)
		{
			$clamp(arr[i], {clamp: 4});
		}

	var currentIndex = 0;
	// $($('ul li')[currentIndex]).find('img')[0].src = "images/experience/" + selectArray[currentIndex];
				$('ul.tabs').each(function(){

					var normalArray = ['food.png',"play.png","shoping.png","room.png","traffic.png"];
					var selectArray = ['food_d.png',"play_d.png","shoping_d.png","room_d.png","traffic_d.png"];
					// For each set of tabs, we want to keep track of
					// which tab is active and it's associated content
					var $active, $content, $links = $(this).find('a');

					$this = $(this);

					// If the location.hash matches one of the links, use that as the active tab.
					// If no match is found, use the first link as the initial active tab.
					$active = $($links[currentIndex]);
					// $active.addClass('active');

					$content = $($active[currentIndex].hash);

					// Hide the remaining content
					$links.not($active).each(function () {
						$(this.hash).hide();
					});

					// Bind the click event handler
					$(this).on('click', 'li', function(e){

						if(currentIndex == $(this).index()) return;
						if(currentIndex != -1)
						{
							$($links[currentIndex]).find('img').attr("src","images/experience/" + normalArray[currentIndex]);
						}

						// Make the old tab inactive.
						// $active.removeClass('active');
						$content.hide();

						// Update the variables with the new link and content
						// $active = $(this);
						$content = $($(this).find('a')[0].hash);

						currentIndex = $(this).index();
						console.log("currentxxxx = "+ currentIndex);

						// Make the tab active.
						// $active.addClass('active');
						$content.show();

						// Prevent the anchor's default click action
						e.preventDefault();
					});


					
					// $links.hover(function(){
					$this.find('li').hover(function(){
						if($(this).index() == currentIndex) return;
						// console.log("message");
						$(this).find('img')[0].src = "images/experience/" + selectArray[$(this).index()];
					},function(){
						if($(this).index() == currentIndex) return;
						$(this).find('img').attr("src","images/experience/" + normalArray[$(this).index()]);
					});


				});
			




			});