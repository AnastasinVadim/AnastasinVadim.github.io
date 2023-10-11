var tovari = [
    { name: "Наушники AirPods 2 (LUX копия)", cena: 2890},
    { name: "Наушники AirPods 3 (LUX копия)", cena: 3490 },
    { name: "Наушники AirPods Max (LUX копия)", cena: 9900 },
    { name: "Наушники Major 4", cena: 5890 },
    { name: "Наручные часы Hublot (LUX)", cena: 5490 },
    { name: "Наручные часы Hublot - механика (LUX)", cena: 8490 },
    { name: "Наручные часы Rolex (LUX)", cena: 6990 },
    { name: "Наручные часы Rolex - механика (LUX)", cena: 9490 },
    { name: "Наручные часы Michael Kors (LUX)", cena: 7290 },
    { name: "Наручные часы Audemars Piguet (LUX)", cena: 7490 },
    { name: "Наручные часы Audemars Piguet - механика (LUX)", cena: 9990 },
    { name: "Наручные часы Ulysse Nardin (LUX)", cena: 9690 },
    { name: "Наручные часы Ulysse Nardin - механика (LUX)", cena: 11490 },
    { name: "Наручные часы Casio Vintage (LUX)", cena: 2490 },
    { name: "Наручные часы Casio Vintage (Original)", cena: 5190 },
    { name: "Наручные часы Casio G-Shock (LUX)", cena: 1900 },
    { name: "Наручные часы Коробка Casio (LUX)", cena: 400 },
  ];
  var tvr;
  var kol;

  function stoimost_schet() 
  {
    var price = tvr.cena * kol;
    return price;
  }

  function chs(ind) 
  {
    tvr = tovari[ind-1];
  }

  function button() 
  {
    var количество = parseInt(document.getElementById("kol").value);
    if (tvr && количество > 0) 
    {
      kol = количество;
      var price = stoimost_schet();
      document.getElementById("rezult").innerHTML = "Стоимость: " + price + " " + "рублей.";
    } 
    else 
    {
      document.getElementById("rezult").innerHTML = "Не выбран товар или неверно введено количество! Попробуйте еще раз.";
    }
  }
  document.getElementById("schet").addEventListener("click", button);
  
   
