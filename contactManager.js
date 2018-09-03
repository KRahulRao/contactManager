       createContacts =  function(){
         document.getElementById('modal').style.display= "block";
       };
       closeModal = function(){
        document.getElementById('modal').style.display= "none";
       }

       function SaveItem() {
			
            var name = document.getElementById('name').value;
            var number = document.getElementById('number').value;
            while(name.length !==0 && name.length !==0){
            localStorage.setItem(name, number);
            doShowAll();
            document.getElementById('modal').style.display= "none";
            }
        }
        
        function ModifyItem() {
            var name = document.getElementById('name').value;;
            document.getElementById('number').value = localStorage.getItem(name);
            doShowAll();
        }
        
        function RemoveItem() {
            var name = document.getElementById('name').value;
            document.getElementById('number').value = localStorage.removeItem(name);
            doShowAll();
        }
        
        function ClearAll() {
            localStorage.clear();
            doShowAll();
        }

       function doShowAll() {
            if (CheckBrowser()) {
                var key = "";
                var list = "<tr><th>Name</th><th>Number</th></tr>\n";
                var i = 0;
                for (i = 0; i <= localStorage.length - 1; i++) {
                    key = localStorage.key(i);
                    list += "<tr><td>" + key + "</td>\n<td>"
                            + localStorage.getItem(key) + "</td></tr>\n";
                }
                if (list == "<tr><th>Name</th><th>Value</th></tr>\n") {
                    list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
                }
                document.getElementById('list').innerHTML = list;
            } else {
                alert('Cannot store shopping list as your browser do not support local storage');
            }
        }
        function   checkLimit (){
            let contactlen = document.getElementById('number').value.length;
                if(contactlen > 10){
                    alert('Invalid number');
                    document.getElementById('number').value = "";
                }
            
        };
        function CheckBrowser() {
            if ('localStorage' in window && window['localStorage'] !== null) {
                return true;
            } else {
                    return false;
            }
        }
       