import { LightningElement, track} from 'lwc';

export default class StudentForm extends LightningElement {

@track name;
@track age;
@track email;

nameHandler(event){
this.name=event.target.value;
}
}