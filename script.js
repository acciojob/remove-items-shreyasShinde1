//your JS code here. If required.

const select = document.getElementById("colorSelect");
const btn = document.querySelector("input[type=button]");

btn.addEventListener("click", ()=>{
	for(const child of select.children){
		if(child.value === select.value){
			child.remove();
		}
	}	
})