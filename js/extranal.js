 
  function allcurfc(){
					
				    eurf();
					
					 
				}
				
				
				function eurf(){
				
				      var allcurfcf= document.getElementById("allcurfc").value;
					
				    if(allcurfcf=="BTC"){
					   document.getElementById("allcurf").value=(document.getElementById("eurf").value)*11435.80;
					  

					
					}
				    if( allcurfcf=="LTC"){
					    document.getElementById("allcurf").value=( document.getElementById("eurf").value)*47.39;
			          

					}
					if( allcurfcf=="ETH"){
					    document.getElementById("allcurf").value=( document.getElementById("eurf").value)*117.39;
			          

					}
					
				    if( allcurfcf=="DASH"){
					    document.getElementById("allcurf").value=( document.getElementById("eurf").value)*67.8183 ;
	                    

					}
				    if( allcurfcf=="BCH"){
					    document.getElementById("allcurf").value=(document.getElementById("eurf").value)*69.8183;
					    					                         

					}
				
				}
		  
		  
		  
		  
		  
		  
				function allcurf(){
				
				    var allcurfce= document.getElementById("allcurfc").value;
					

				    if(allcurfce=="BTC"){
					   document.getElementById("eurf").value=(document.getElementById("allcurf").value)*11435.80;
					  

					
					}
				    if( allcurfce=="LTC"){
					    document.getElementById("eurf").value=( document.getElementById("allcurf").value)*47.39;
			          

					}
					if( allcurfce=="ETH"){
					    document.getElementById("eurf").value=( document.getElementById("allcurf").value)*117.39;
			          

					}
					
				    if( allcurfce=="DASH"){
					    document.getElementById("eurf").value=( document.getElementById("allcurf").value)*67.8183 ;
	                    

					}
				    if( allcurfce=="BCH"){
					    document.getElementById("eurf").value=(document.getElementById("allcurf").value)*69.8183;
					    					                         

					}
				
				}
 
 

 

	
	
	
	
	
	
		
		
		
		
		
		
		
		
		

		
		
		
var usd, btc;
				function init()
				{
					usd = document.getElementById("USD");
					btc = document.getElementById("BTC");
				   
				}

				function usdfunc()
				{
					btc.value = (parseFloat(usd.value)*10200.30).toFixed(2) ;
					
document.getElementById("save").innerHTML = (btc.value/100*0.10).toFixed(2)+ " EUR";
document.getElementById("save2").innerHTML = (btc.value/100*2).toFixed(2)+ " EUR";


				}

				function btcfunc()
				{
					usd.value = (parseFloat(btc.value)* 0.000084).toFixed(8);

document.getElementById("save").innerHTML = (btc.value/100*0.10).toFixed(2)+ " EUR";
document.getElementById("save2").innerHTML = (btc.value/100*2).toFixed(2)+ " EUR";

				   
				}
init();














/////////////........content animate



