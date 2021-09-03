import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { Filial } from 'src/models/Filial';
import { FilialRestService } from 'src/services/api/filial.rest.service';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'i-filials-edit',
  templateUrl: './filials-edit.component.html',
  styleUrls: ['./filials-edit.component.scss'],
  animations: [titleAnimation]
})
export class FilialsEditComponent implements OnInit {
  id: number;
  filial: Filial;
  form: FormGroup;

  constructor(
    private filialRest: FilialRestService,
    private activatedRoute: ActivatedRoute,
    private uiService: UiService,
    private router: Router
  ) { }

  private generateForm() {
    this.form = new FormGroup({
      name: new FormControl(this.filial.name, [Validators.required]),
      description: new FormControl(this.filial.description, [Validators.required]),
      code: new FormControl(this.filial.code, [Validators.required]),
      emails: new FormControl(this.filial.emails, [Validators.required]),
      phones: new FormControl(this.filial.phones, [Validators.required]),
      addresses: new FormControl(this.filial.addresses, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.filialRest.get(this.id)
      .subscribe(
        item => {
          this.filial = item;
          this.generateForm();
        }
      );
  }

  submit() {
    this.filialRest.put(this.form.value, this.id)
      .subscribe(
        (res) => {
          this.filialRest.getAll();
          this.uiService.showSuccess();
          setTimeout(() => {
            this.uiService.hideSuccess();
            this.router.navigateByUrl('/filials');
          }, 500);
        },
        this.filialRest.handleError
      );
  }

}
