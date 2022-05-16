class ValamiOsztaly{

    constructor(node, elem, index){
        this.node = node;
        //this.cim = this.node.children(".cim/*HTML OLDALON ID VAGY CLASS NÉV*/");
        this.elem = elem;
        this.elem.index = index;
        this.setBerletAdatok(this.elem);

        this.node.children(".modositgomb").on("click", () => {
            this.KattintasTriggerModosit();
        });
        
        this.node.children(".torolgomb").on("click", () => {
            this.KattintasTriggerTorol();
        });  
    }

    setAdat(ertek){
        //this.cim.html(ertek.megnevezes/*ADATBÁZIS OSZLOPNÉV*/);
        //this.cim.attr("src", ertek.kep/*ADATBÁZIS OSZLOPNÉV*/);
    }

    KattintasTriggerModosit() {
        let esemeny = new CustomEvent("modosit", { detail: this.adat });
        window.dispatchEvent(esemeny);
    };

    KattintasTriggerTorol() {
        let esemeny = new CustomEvent("torol", { detail: this.adat });
        window.dispatchEvent(esemeny);
    };
}