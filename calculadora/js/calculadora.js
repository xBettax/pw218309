		window.onload= function(){
		var operador="";

			var colorAmarillo = function(){
			this.style.background="yellow";
			}
			
			var colorBlanco = function(){
			this.style.background="white";
			}

			var operando1= document.getElementById("operando1");
			operando1.addEventListener("focus", colorAmarillo);
			operando1.addEventListener("focusout",colorBlanco);
		
			var operando2=document.getElementById("operando2");
			operando2.addEventListener("focus", colorAmarillo);
			operando2.addEventListener("focusout",colorBlanco);

			var resultado=document.getElementById("resultado");
			resultado.addEventListener("focus", colorAmarillo);
			resultado.addEventListener("focusout",colorBlanco);	
		
			var numeros=function() {
				var valor= this.value;
				if(operador==""){
					var valorInput=document.getElementById("operando1").value="";
					if(operador=="0"){
						document.getElementById("operando1").value="";
						document.getElementById("operando1").value+=valor;
					}
				}
				else(operador=="0"){
						document.getElementById("operando2").value="";
						document.getElementById("operando2").value+=valor;
			// body...
			}

		}

		