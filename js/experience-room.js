$(document).ready(function(){

	var rcurrentIndex = 0;
	// $($('ul li')[rcurrentIndex]).find('img')[0].src = "images/experience/" + selectArray[rcurrentIndex];
				$('ul.rtabs').each(function(){

					var normalArray = ['jd_btn1.png',"jd_btn2.png","jd_btn3.png","jd_btn4.png"];
					var selectArray = ['jd_btn1_d.png',"jd_btn2_d.png","jd_btn3_d.png","jd_btn4_d.png"];
					// For each set of tabs, we want to keep track of
					// which tab is active and it's associated content
					var $active, $content, $links = $(this).find('a');

					$this = $(this);

					// If the location.hash matches one of the links, use that as the active tab.
					// If no match is found, use the first link as the initial active tab.
					$active = $($links[rcurrentIndex]);
					// $active.addClass('active');

					$content = $($active[rcurrentIndex].hash);

					// Hide the remaining content
					$links.not($active).each(function () {
						$(this.hash).hide();
					});

					// Bind the click event handler
					$(this).on('click', 'li', function(e){

						if(rcurrentIndex == $(this).index()) return;
						if(rcurrentIndex != -1)
						{
							$($links[rcurrentIndex]).find('img').attr("src","images/experience/room/" + normalArray[rcurrentIndex]);
						}

						// Make the old tab inactive.
						// $active.removeClass('active');
						$content.hide();

						// Update the variables with the new link and content
						// $active = $(this);
						$content = $($(this).find('a')[0].hash);

						rcurrentIndex = $(this).index();
						console.log("currentxxxx = "+ rcurrentIndex);

						// Make the tab active.
						// $active.addClass('active');
						$content.show();

						// Prevent the anchor's default click action
						e.preventDefault();
					});


					
					// $links.hover(function(){
					$this.find('li').hover(function(){
						if($(this).index() == rcurrentIndex) return;
						// console.log("message");
						$(this).find('img')[0].src = "images/experience/room/" + selectArray[$(this).index()];
					},function(){
						if($(this).index() == rcurrentIndex) return;
						$(this).find('img').attr("src","images/experience/room/" + normalArray[$(this).index()]);
					});


				});
			




			});