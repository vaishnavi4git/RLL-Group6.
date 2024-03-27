import { Component, OnInit } from '@angular/core';
import { Engineers } from './../../models/engineers';
import { EngineersService } from 'src/app/services/engineers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-engineerregister',
  templateUrl: './engineerregister.component.html',
  styleUrls: ['./engineerregister.component.css'],
})
export class EngineerregisterComponent implements OnInit {
  engineer: Engineers = new Engineers();
  constructor(private _engineersService: EngineersService) {}

  ngOnInit(): void {}

  registerEngineer(form:NgForm): any {
    console.log('inside registerEngineer() !');
    this._engineersService.registerEngineer(this.engineer).subscribe(() => {
      alert('Successfully Registered !');
      form.reset();
    });
  }
}
