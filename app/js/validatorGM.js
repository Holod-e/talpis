
      $(document).ready(function(){

        function validateForm(){
          var inputName = $(this).attr('name');
          var val = $(this).val();

           switch(inputName)
           {

                 // Проверка поля "Имя"
                 case 'name':
                    // var rv_name = /^[а-яА-ЯёЁa-zA-Z0-9]+$/; // используем регулярное выражение

                    if(val.length > 2 && val != '' )
                    { 
                       $(this).removeClass('error');
                      $(this).addClass('not_error'); 
                    }
                    else
                    { 
                      $(this).removeClass('not_error').addClass('error');
                    }
                break;

               // Проверка email
               case 'email':
                   var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                   if(val != '' && rv_email.test(val))
                   {
                      $(this).removeClass('error');
                      $(this).addClass('not_error');
                   }
                   else
                   {
                      $(this).removeClass('not_error').addClass('error');
                   }
               break;
               // Проверка поля "Телефон "
               case 'phone':
                   if(val != '' && val.length >= 10)
                   {
                     $(this).removeClass('error');
                      $(this).addClass('not_error');
                   }
                   else
                   {
                      $(this).removeClass('not_error');
                       $(this).addClass('error');
                   }
               break;

              // Проверка поля "Телефон1 код страны"
              case 'phone1':
                  if(val != '' && val.length <= 3)
                  {
                    $(this).removeClass('error');
                     $(this).addClass('not_error');
                  }
                  else
                  {
                     $(this).removeClass('not_error');
                      $(this).addClass('error');
                  }
              break;

               // Проверка поля "Телефон2 код оператора"
               case 'phone2':
                  if(val != '' && val.length <= 3)
                  {
                     $(this).removeClass('error');
                     $(this).addClass('not_error');
                  }
                  else
                  {
                     $(this).removeClass('not_error');
                    $(this).addClass('error');
                  }
              break;

              // Проверка поля "Телефона3 номер телефона"
               case 'phone3':
                  if(val != '' && val.length >= 7)
                  {
                     $(this).removeClass('error');
                     $(this).addClass('not_error');
                  }
                  else
                  {
                     $(this).removeClass('not_error');
                      $(this).addClass('error');
                  }
              break;

           } // end switch(...)
        }
         // Устанавливаем обработчик потери фокуса для всех полей ввода текста
           $('input.name, input.email, input.phone,  input.phone1, input.phone2, input.phone3').unbind().blur(validateForm); // end blur()
           $('input.name, input.email, input.phone,  input.phone1, input.phone2, input.phone3').keypress(validateForm); // end blur()
          
        
      // Теперь отправим наше письмо
      
      }); // end script