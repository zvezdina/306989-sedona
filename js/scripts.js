var lookUp = document.querySelector(".btn");
var popup = document.querySelector(".search-entry");
var form = popup.querySelector("form");
var fieldIn = popup.querySelector("[name=calendar-in]"); 
var fieldOut = popup.querySelector("[name=calendar-out]");
var adults = popup.querySelector("[name=count]");
var child = popup.querySelector("[name=count-children]");
var finish = popup.querySelector("[type=submit]");
var storageDataIn = localStorage.getItem("fieldIn");
var storageDataOut = localStorage.getItem("fieldOut");
var storageGrownUp = localStorage.getItem("adults");
var storageChild = localStorage.getItem("child");
  
  lookUp.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("search-entry-show");
    popup.classList.remove("entry-error");
          
      if (storageDataIn) {
          fieldIn.value = storageDataIn;
          fieldOut.focus();
      } else {
          fieldIn.focus();
      }
          
      if (storageDataOut) {
           fieldOut.value = storageDataOut;
           adults.focus();
      } else {
           fieldOut.focus();
      }

      if (storageGrownUp) {
           adults.value = storageGrownUp;
           child.focus();
      } else {
           adults.focus();
      }
           
      if (storageChild) {
           child.value = storageChild;
           finish.focus();
       } else {
           child.focus();
       }

       });

   form.addEventListener("submit", function(event) {
      if (!fieldIn.value || !fieldOut.value  || !adults.value) {
            event.preventDefault();
            popup.classList.remove("entry-error");
            popup.offsetWidth = popup.offsetWidth;
             popup.classList.add("entry-error");
             } else { 
                localStorage.setItem("fieldIn", fieldIn.value);
                localStorage.setItem("fieldOut", fieldOut.value);
                localStorage.setItem("adults", adults.value);
                localStorage.setItem("child", child.value);
             }
    });

            