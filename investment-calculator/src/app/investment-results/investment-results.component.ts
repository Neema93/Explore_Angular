import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
private investmentService = inject(InvestmentService);
get results() {
  return this.investmentService.resultsData;
}
// @Input() results ?: {
//   year:number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested: number,
// }[];

}
