

let tg = window.Telegram.WebApp;
tg.expand(); //расширяем на все окно  

tg.MainButton.text = "Готово"; //изменяем текст кнопки 
tg.MainButton.setText("Кнопка для поиска"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры
tg.MainButton.show()
tg.MainButton.enable()



Telegram.WebApp.onEvent('mainButtonClicked', function(){
//    tg.sendData(dictstring);
   tg.sendData("от веба: НАЙТИ КУРСЫ!");
   
   tg.window.close();
   //при клике на основную кнопку отправляем данные в строковом виде
});

