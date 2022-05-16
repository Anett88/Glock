importScripts("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");

$(function(){

    const tomb = [];
    const token = $('meta[name="csrf-token"]').attr('content');
    const myAjax = new MyAjaxTokenes(token);
    const apiVegpont = "";

    /*Adatok lekérése*/
    myAjax.getAjax(apiVegpont, tomb, adatokMegjelenites);

    function adatokMegjelenites() {
        const szuloElem = $("#szulo");   //id-val szuloként elnevezett tag az indexben
        const sablon = $("footer .sablon"); //class-al sablonként elnevezett tag az indexben
        szuloElem.empty();
        sablon.show();
        tomb.forEach(function (elem, index) {
            const node = sablon.clone().appendTo(szuloElem);
            const ujNode = new ValamiOsztaly(node, elem, index);
        });
        sablon.hide();
    };

    /*Új adat felvitele*/
    $(".ujAdatFelv").on("click", () => {
        let ujAdat = {
            "cim": $("#bekertCim").val()
        };
        myAjax.postAjax(apiVegpont, ujAdat);
    });
    
    /*Adatok törlése*/
    $(window).on("torol", (esemeny) => {
        let aktTermek = esemeny.detail.id;
        myAjax.deleteAjax(apiVegpont, aktTermek);
    });
    
    /*Adatok módosítása*/
    $(window).on("modosit", (esemeny) => {
        let aktTermek = esemeny.detail.id;
        let ujAdat = {
            "cim": $("#bekertCim").val()
        };
        myAjax.putAjax(apiVegpont, ujAdat, aktTermek);
    });
  
});