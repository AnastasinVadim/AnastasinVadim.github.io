function calc() 
{
    var k = document.getElementById("kol-vo").value;
    var usl = document.querySelector('input[name="usl"]:checked').value;
    var op = document.getElementById("option").value;
    var SV = document.getElementById("wCB").checked;

    var cena = 0;
    document.getElementById("options").style.display = 'none';
    document.getElementById("SV").style.display = 'none';
    if (usl === "us1") 
    {
        document.getElementById("options").style.display = 'none';
        document.getElementById("SV").style.display = 'none';
        cena = 450;
    } 
    else if (usl === "us2") 
    {
        document.getElementById("options").style.display = 'block';
        document.getElementById("SV").style.display = 'none';
        if (op === "op1")
        {
            cena = 600;
        } 
        else if (op === "op2")
        {
            cena = 700;
        }
        else if (op === "op3") 
        {
            cena = 1100;
        }
        else if (op === "op4") 
        {
                cena = 6500;
        }
    }
    else if (usl === "us3") 
    {
        document.getElementById("options").style.display = 'none';
        document.getElementById("SV").style.display = 'block';
        document.getElementById("wCB").checked;
        if (SV) 
        {
            cena = 2100;
        } 
        else 
        {
            cena = 1400;
        }
    }

    var summa = cena * k;

    document.getElementById("rezult").innerHTML = "Стоимость услуги: " + summa + " " + "рублей.";
}
