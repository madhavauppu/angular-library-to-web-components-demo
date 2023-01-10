import { ChangeDetectorRef, Component, OnInit } from "@angular/core";

enum CHART_VIEWS {
  list = 'list',
  base = 'base',
  minimized = 'minimized'
}

@Component({
  selector: 'lib-asset-vs-utilization-widget',
  templateUrl: './asset-vs-utilization-widget.component.html',
  styleUrls: ['./asset-vs-utilization-widget.component.scss'],
  providers: []
})

export class AssetVsUtilizationWidgetComponent implements OnInit {
  state = 'list';
  isBaseview = false;
  
  chartTitle = 'Asset vs Utilization';
  subTitle = 'Web component to show Asset vs Utilization data';

  chartConfig1x = {
    margin: { top: 48, right: 32, bottom: 0, left: 32 },
    width: 1175,
    height: 1150,
    chartClass: 'chart-1x',
    scale: 2.5,
    legendBufferY: 1050,
    legendBufferX: 1125,
    legendTitleTransformX: -335,
    legendTitleTransformY: -10,
    labelFontSize: '2.4rem',
    labelX: 400, 
    labelY: 300,
    labelBuffer1: 40,
    labelBuffer2: 100,
    labelBuffer3: 160,
    labelTruncate: 25,
    chartViewBox: "0 0 1236 1150",
    svgPattern: 2.5,
    treemapHeight: 900,
    tooltipWidthPlusMargin: 500,
    showEmptyStateImage: true,
    threshold: 5
  };
  
  chartConfig2x = { 
    margin: { top: 40, right: 0, bottom: 0, left: 40 },
    width: 1250,
    height: 500,
    chartClass: 'chart-2x',
    scale: 1.2,
    legendBufferY: 500,
    legendBufferX: 560,
    legendTitleTransformX: -335,
    legendTitleTransformY: -10,
    labelFontSize: '1.2rem',
    labelX: 300, 
    labelY: 150,
    labelBuffer1: 20,
    labelBuffer2: 45,
    labelBuffer3: 70,
    labelTruncate: 10,
    chartViewBox: "0 0 1236 1036",
    svgPattern: 1,
    treemapHeight: 400,
    tooltipWidthPlusMargin: 500,
    showEmptyStateImage: true,
    threshold: 9
  }

  chartConfig:any = this.chartConfig1x;

  constructor(private readonly cd: ChangeDetectorRef) {
  
  }

  get isBaseView() {
    return this.state === CHART_VIEWS.base;
  }

  get isMinimizedView() {
    return this.state === CHART_VIEWS.minimized;
  }

  get isListView() {
    return this.state === CHART_VIEWS.list;
  }

  ngOnInit() {
    if (window && window['EventBus']) {
      this.widgetOnStateChange();
      this.widgetOnInit();
    }
  }

  widgetOnStateChange() {
    window['EventBus'].subscribe('asset-vs-util-wc:widgetOnStateChange', (ev: CustomEvent) => {
      if (ev.detail && ev.detail.state) {
        this.state = ev.detail.state; 
        this.isBaseview = this.state === CHART_VIEWS.base;
        this.cd.detectChanges();
      }
    });
  }

  widgetOnInit() {
    window['EventBus'].subscribe('testWidget', ev => {
      if (ev.detail && ev.detail.size && ev.detail.size.min) { 
        this.chartConfig = ev.detail.size.min.w === 2 ?  this.chartConfig2x : this.chartConfig1x;
        this.cd.detectChanges();
      } 
    });
  }
}
