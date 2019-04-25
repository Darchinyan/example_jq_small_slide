$(document).ready(function(){
	var nkar=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg'];
	var count=0;
	
	$('#nkar1').attr('src',nkar[count]);
	$('#photo_list').css('width', nkar.length*160 + 'px');
	for(i=0;i<nkar.length;i++){
		$('#photo_list').append("<img src='"+nkar[i]+"'class='img1' name='"+i+"'>");
	};
	
	
	$('.img1').click(function(){
		count=$(this).attr('name');
		$('#nkar1').attr('src', $(this).attr('src'));
		$('.img1').css('opacity','0.3');
		$(this).css('opacity','1');
	});
	
	
	$('#next').click(function(){
		if(count==nkar.length-1){
			return false;
		};
		count++;
		$('#nkar1').attr('src',nkar[count]);
		
	});
	
	
	
	$('#prev1').click(function(){
		if(count==0){
			return false;
		}
		count--;
		$('#nkar1').attr('src',nkar[count]);
	});
	
	
});