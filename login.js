function confirmacao(){
   var nomeRegex= /^(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+(?:\-(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+)*(?: (?:(?:e|y|de(?:(?: la| las| lo| los))?|do|dos|da|das|del|van|von|bin|le) )?(?:(?:(?:d'|D'|O'|Mc|Mac|al\-))?(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+|(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+(?:\-(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+)*))+(?: (?:Jr\.|II|III|IV))?$/;
   var telRegex = /^[0-9]{2}\s[0-9]{9})/;
   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
   var nome = document.getElementsByName('texto').value;
   var tel = document.getElementsByName('telefone').value;
   var email = document.getElementsByName('email').value;

   if(!nomeRegex.test(nome)){
      alert("Nome inválido.")
      return false;
   }
   if(!telRegex.test(tel)){
      alert("Telefone inválido.")
      return false;
   }
   if(!emailRegex.test(email)){
      alert("E-mail inválido.")
      return false;
   }
   return true; 
}

