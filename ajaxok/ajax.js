class MyAjax {
    constructor() {}
  
    /*KattintásTrigger
    KattintasTrigger() {
      let esemeny = new CustomEvent("sorszam", { detail: this.id });
      window.dispatchEvent(esemeny);
    }
    */

    /*//XML HÍVÁS
    getAjaxXML(apivegpont, tombe, adat){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            tombe = JSON.parse(this.responseText)[adat];
        };
        xhttp.open("GET", apivegpont, false);
        xhttp.send();
        return tombe;
    }
    */
  
    getAjax(apivegpont, tomb, callback, seged = false) {
        tomb.splice(0, tomb.length);
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                result.forEach((value) => {
                    tomb.push(value);
                });
                if (seged === false) {
                    callback(tomb);
                } else {
                    callback(tomb, seged);
                }
            }
        });
    }
  
    postAjax(apivegpont, ujAdat) {
        $.ajax({
            url: apivegpont,
            type: "POST",
            data: ujAdat,
            success: function (result) {
                console.log(result);
            },
        });
    }
  
    deleteAjax(apivegpont, id) {
        $.ajax({
            url: apivegpont + "/" + id,
            type: "DELETE",
            success: function (result) {
                console.log(result);
            }
        });
    }
  
    putAjax(apivegpont, id, ujAdat) {
        $.ajax({
            url: apivegpont + "/" + id,
            type: "PUT",
            data: ujAdat,
            success: function (result) {
                console.log(result);
            }
        });
    }
}