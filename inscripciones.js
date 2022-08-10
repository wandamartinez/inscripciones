//usamos el metodo constructor
class Inscriptions {
    constructor(inscriptionList = []) {
        this.inscription = inscriptionList;
    }
    setInscriptions (inscriptionList) {
        this.inscription = inscriptionList;
    }
    getInscriptions(){
        return this.inscription;
    }
    getInscriptionById(id) {
        let selected =  null;
        let i = 0;
        while (selected == null){
            if(this.inscription[i].id == id){
                selected = this. inscription[i];
            }
            i++
        }
        return selected;
    }
    //operaciones crud
    createStudent(newStudent){
        this.inscription.push(newStudent);
    }
    updateInscription (student, id){
        let selected = this.getInscriptionById(id)
        selected.name = student.getName();
        selected.surname = student.getSurname();
        selected.DNI = student.getDNI();
        selected.curse = student.getCurse();
        this.inscription.splice(id, 1, selected);
    }
    deleteInscription(id){
        let index = this.getIndexById(id);
        this.inscription.splice(index, 1);
    }
    getIndexById (id){
        let i = 0;
        while (i<this.inscription.length){
            if(this.inscription[i].id == id) {
                break;
            }
            i++
        }
        if (i == this.inscription.length) {
            i = -1;
        }
        return;
    }
}