var btnoui = document.getElementById("non")
var btnnon = document.getElementById("oui")
        function Afficher_div()
        {            
            var btnoui = document.getElementById("non")
            var btnnon = document.getElementById("oui")
            var d1 = document.getElementById("d1");
            if(btnoui.checked)
            {
                d1.style.display="none"
            }
            if(btnnon.checked)
            {
                d1.style.display="block"
            }
        }
        function valider()
        {
            var nom =document.getElementById("name");
            var password = document.getElementById("password");
            var msg = document.getElementById("msg");
            var rg = new RegExp("^[a-zA-Z]$");
            if(nom.value=="")
            {
                msg.innerHTML="Le nom est obligatoir !";
                return;
            }
            if(rg.test(nom.value)==false)
            {
                msg.innerHTML="Le nom ne doit pas contenir de chiffre ou caractères spéciaux"
                return;
            }
            if(password.value=="")
            {
                msg.innerHTML="Mots de pass est obligatoir !";
                return;
            }
            msg.innerHTML="Nom : "+nom.value+"<br/>Password : "+password.value
            return;
        }