export class DestinoRango {
    private selected: boolean = false;
    public servicios: string[];
    constructor(public nombre: string, public url: string) {
        this.servicios = ['Pileta','Desayuno']
    }
    isSelected() {
        return this.selected;
    }
    setSelected(s:boolean) {
        this.selected = s;
    }
}