import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";

enum CHART_TICKS  {
  small = 5,
  medium = 13
}

enum CHART_VIEWS {
  list = 'list',
  base = 'base',
  minimized = 'minimized'
}
@Component({
  selector: 'lib-cost-vs-budget-widget',
  templateUrl: './cost-vs-budget-widget.component.html',
  styleUrls: ['./cost-vs-budget-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CostVsBudgetWidgetComponent implements OnInit {
  chartTitle = 'Costs over time';
  subTitle = 'Cost over time line chart web component';
  state = 'list';
  isBaseview = false;
  enableForecastByDefault = true;
  showAddToGraph = false;
  hideActions = true;
  batchSize = 5;
  maxTicksLimit = 5;
  chartOptions = { 
    height: '15.5rem', 
    legendPosition: 'bottom', 
    tooltip: { enabled: true },
    comboChartTypes :[{ type: 'line', correspondingDatasets:["Costs"]}],
    color: {
      scale: {Costs: "#24a148"} 
    },
    legends: { cost: 'Costs'},
    leftLegendLabel: 'Costs in',
    multiplierLabel: 'Multiplier : '
  };

  constructor() {
  
  }

  get isListView() {
    return this.state === CHART_VIEWS.list;
  }

  get isBaseView() {
    return this.state === CHART_VIEWS.base;
  }

  get isMinimizedView() {
    return this.state === CHART_VIEWS.minimized;
  }

  ngOnInit() {
    if (window && window['EventBus']) {
      this.widgetOnInit();
      this.widgetOnStateChange();
    }
  }

  widgetOnStateChange() {
    window['EventBus'].subscribe('costvsbudget-widget:widgetOnStateChange', (ev: CustomEvent) => {
      if (ev.detail && ev.detail.state) {
        this.state = ev.detail.state; 
        this.isBaseview = this.state === 'base';
      }
    });
  }

  widgetOnInit() {
    window['EventBus'].subscribe('testWidget', ev => {
      if (ev.detail && ev.detail.size && ev.detail.size.min) { 
        this.maxTicksLimit = ev.detail.size.min.w === 2 ? CHART_TICKS.medium : CHART_TICKS.small;
      } 
    });
  }

}



