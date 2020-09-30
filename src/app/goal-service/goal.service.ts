import { Injectable } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';

@Injectable({
  providedIn: 'root'
})

export class GoalComponent implements OnInit {

  goals: Goal[];

  constructor(goalService: GoalService) {
    this.goals = goalService.getGoals()
  }
  
}
