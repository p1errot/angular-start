import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  public currentYear: string = '2000';
  public currentMonth: string = '12';

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentYear = this.currentRoute.snapshot.paramMap.get('year');
    this.currentMonth = this.currentRoute.snapshot.paramMap.get('month');
  }

  getHome() {
    this.router.navigate(['']);
  }

}
