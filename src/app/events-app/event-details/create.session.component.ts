import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';
@Component({
    selector: '',
    templateUrl: './create.session.component.html',
    styleUrls: ['./create.session.css']
})

export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;s

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), 
                                            restrictedWords(['foo','bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }
    saveSession(formValues) {
        let session:ISession = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []

        }
        console.log(session);
    }
}   