/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/bar-chart/bar-vertical-normalized.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/zone/ng_zone';
import * as import11 from '@angular/common/src/location/location';
import * as import12 from '@angular/core/src/animation/animation_transition';
import * as import13 from '@angular/core/src/animation/animation_sequence_player';
import * as import14 from '@angular/core/src/animation/animation_styles';
import * as import15 from '@angular/core/src/animation/animation_style_util';
import * as import16 from '@angular/core/src/animation/animation_keyframe';
import * as import17 from '@angular/core/src/animation/animation_player';
import * as import18 from '@angular/core/src/linker/view_container';
import * as import19 from '../../../src/common/charts/chart.component';
import * as import20 from '../../../src/common/tooltip/tooltip.service';
import * as import21 from '../common/charts/chart.component.ngfactory';
import * as import22 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import23 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import24 from '../../../src/services/injection.service';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import27 from '@angular/common/src/directives/ng_if';
import * as import28 from '@angular/common/src/directives/ng_for';
import * as import29 from '../../../src/common/axes/x-axis.component';
import * as import30 from '../common/axes/x-axis.component.ngfactory';
import * as import31 from '../../../src/common/axes/y-axis.component';
import * as import32 from '../common/axes/y-axis.component.ngfactory';
import * as import33 from '../../../src/bar-chart/series-vertical.component';
import * as import34 from './series-vertical.component.ngfactory';
export class Wrapper_BarVerticalNormalizedComponent {
  /*private*/ _eventHandler:Function;
  context:import0.BarVerticalNormalizedComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.BarVerticalNormalizedComponent(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_scheme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.scheme = currValue;
      this._changes['scheme'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_schemeType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.schemeType = currValue;
      this._changes['schemeType'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_customColors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.customColors = currValue;
      this._changes['customColors'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_legend(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.legend = currValue;
      this._changes['legend'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_xAxis(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.xAxis = currValue;
      this._changes['xAxis'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_yAxis(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.yAxis = currValue;
      this._changes['yAxis'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_showXAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.showXAxisLabel = currValue;
      this._changes['showXAxisLabel'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_showYAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.showYAxisLabel = currValue;
      this._changes['showYAxisLabel'] = new import1.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
    }
  }
  check_xAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.xAxisLabel = currValue;
      this._changes['xAxisLabel'] = new import1.SimpleChange(this._expr_10,currValue);
      this._expr_10 = currValue;
    }
  }
  check_yAxisLabel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.yAxisLabel = currValue;
      this._changes['yAxisLabel'] = new import1.SimpleChange(this._expr_11,currValue);
      this._expr_11 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_12,currValue);
      this._expr_12 = currValue;
    }
  }
  check_showGridLines(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_13,currValue))) {
      this._changed = true;
      this.context.showGridLines = currValue;
      this._changes['showGridLines'] = new import1.SimpleChange(this._expr_13,currValue);
      this._expr_13 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_14,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_14,currValue);
      this._expr_14 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
    if (emit1) { (this.subscription1 = this.context.activate.subscribe(_eventHandler.bind(view,'activate'))); }
    if (emit2) { (this.subscription2 = this.context.deactivate.subscribe(_eventHandler.bind(view,'deactivate'))); }
  }
}
var renderType_BarVerticalNormalizedComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_BarVerticalNormalizedComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.BarVerticalNormalizedComponent>;
  _BarVerticalNormalizedComponent_0_3:Wrapper_BarVerticalNormalizedComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BarVerticalNormalizedComponent_Host0,renderType_BarVerticalNormalizedComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ngx-charts-bar-vertical-normalized',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_BarVerticalNormalizedComponent0(this.viewUtils,this,0,this._el_0);
    this._BarVerticalNormalizedComponent_0_3 = new Wrapper_BarVerticalNormalizedComponent(new import9.ElementRef(this._el_0),this.injectorGet(import10.NgZone,this.parentIndex),this.compView_0.ref,this.injectorGet(import11.Location,this.parentIndex));
    this.compView_0.create(this._BarVerticalNormalizedComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._BarVerticalNormalizedComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BarVerticalNormalizedComponent) && (0 === requestNodeIndex))) { return this._BarVerticalNormalizedComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._BarVerticalNormalizedComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._BarVerticalNormalizedComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._BarVerticalNormalizedComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const BarVerticalNormalizedComponentNgFactory:import8.ComponentFactory<import0.BarVerticalNormalizedComponent> = new import8.ComponentFactory<import0.BarVerticalNormalizedComponent>('ngx-charts-bar-vertical-normalized',View_BarVerticalNormalizedComponent_Host0,import0.BarVerticalNormalizedComponent);
const styles_BarVerticalNormalizedComponent:any[] = ([] as any[]);
var BarVerticalNormalizedComponent_animationState_states:any = {
  '*': {},
  'void': {}
}
;
function BarVerticalNormalizedComponent_animationState_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import12.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'animationState'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = BarVerticalNormalizedComponent_animationState_states['*'];
  var startStateStyles:any = BarVerticalNormalizedComponent_animationState_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = BarVerticalNormalizedComponent_animationState_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && (true && (nextState == 'void')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          'opacity': '1',
          'transform': '*'
        }

      ]
      )),[
          new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{
            'opacity': '1',
            'transform': '*'
          }
        ]))),
          new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{
            'opacity': '0',
            'transform': 'scale(0)'
          }
        ])))
      ]
    ,500,0,(null as any),previousPlayers)]);
    totalTime = 500;
  }
  if ((player == (null as any))) { (player = new import17.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import15.renderStyles(element,view.renderer,import15.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import13.AnimationSequencePlayer(previousPlayers).destroy();
  import15.renderStyles(element,view.renderer,import15.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'animationState',player);
  return new import12.AnimationTransition(player,currentState,nextState,totalTime);
}
var renderType_BarVerticalNormalizedComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_BarVerticalNormalizedComponent,{animationState: BarVerticalNormalizedComponent_animationState_factory});
export class View_BarVerticalNormalizedComponent0 extends import2.AppView<import0.BarVerticalNormalizedComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import18.ViewContainer;
  compView_1:import2.AppView<import19.ChartComponent>;
  _TooltipService_1_5:import20.TooltipService;
  _ChartComponent_1_6:import21.Wrapper_ChartComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import18.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import22.Wrapper_NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import18.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import22.Wrapper_NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import18.ViewContainer;
  _TemplateRef_9_5:any;
  _NgFor_9_6:import23.Wrapper_NgFor;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _arr_26:any;
  /*private*/ _expr_27:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BarVerticalNormalizedComponent0,renderType_BarVerticalNormalizedComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._arr_26 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_27 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ngx-charts-chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import18.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import21.View_ChartComponent0(this.viewUtils,this,1,this._el_1);
    this._TooltipService_1_5 = new import20.TooltipService(this.parentView.injectorGet(import24.InjectionService,this.parentIndex));
    this._ChartComponent_1_6 = new import21.Wrapper_ChartComponent(this._vc_1.vcRef,this._TooltipService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','bar-chart chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_5 = new import18.ViewContainer(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import25.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import22.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_7 = new import18.ViewContainer(7,3,this,this._anchor_7);
    this._TemplateRef_7_5 = new import25.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import22.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_9 = new import18.ViewContainer(9,3,this,this._anchor_9);
    this._TemplateRef_9_5 = new import25.TemplateRef_(this,9,this._anchor_9);
    this._NgFor_9_6 = new import23.Wrapper_NgFor(this._vc_9.vcRef,this._TemplateRef_9_5,this.parentView.injectorGet(import26.IterableDiffers,this.parentIndex),this.ref);
    this._text_10 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._ChartComponent_1_6.context);
    this._text_12 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray8(6,'legendLabelActivate',(null as any),'legendLabelDeactivate',(null as any),'legendLabelClick',(null as any)),this.eventHandler(this.handleEvent_1));
    this._ChartComponent_1_6.subscribe(this,this.eventHandler(this.handleEvent_1),true,true,true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11,
      this._text_12
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import27.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import25.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import27.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import25.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import28.NgFor) && (9 === requestNodeIndex))) { return this._NgFor_9_6.context; }
    if (((token === import20.TooltipService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._TooltipService_1_5; }
    if (((token === import19.ChartComponent) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ChartComponent_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_26(this.context.width,this.context.height);
    this._ChartComponent_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.legend;
    this._ChartComponent_1_6.check_showLegend(currVal_1_0_1,throwOnChange,false);
    const currVal_1_0_2:any = this.context.legendOptions;
    this._ChartComponent_1_6.check_legendOptions(currVal_1_0_2,throwOnChange,false);
    const currVal_1_0_3:any = this.context.activeEntries;
    this._ChartComponent_1_6.check_activeEntries(currVal_1_0_3,throwOnChange,false);
    if (this._ChartComponent_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.xAxis;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    const currVal_7_0_0:any = this.context.yAxis;
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_9_0_0:any = this.context.results;
    this._NgFor_9_6.check_ngForOf(currVal_9_0_0,throwOnChange,false);
    const currVal_9_0_1:any = this.context.trackBy;
    this._NgFor_9_6.check_ngForTrackBy(currVal_9_0_1,throwOnChange,false);
    this._NgFor_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    const currVal_27:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_27 == null)? (null as any): currVal_27.toString()));
      this._expr_27 = currVal_27;
    }
    this.compView_1.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_5.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this._vc_9.destroyNestedViews();
    this.compView_1.destroy();
    this._ChartComponent_1_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_11,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 5)) { return new View_BarVerticalNormalizedComponent1(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    if ((nodeIndex == 7)) { return new View_BarVerticalNormalizedComponent2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 9)) { return new View_BarVerticalNormalizedComponent3(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'legendLabelActivate')) {
      const pd_sub_0:any = ((<any>this.context.onActivate($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'legendLabelDeactivate')) {
      const pd_sub_1:any = ((<any>this.context.onDeactivate($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'legendLabelClick')) {
      const pd_sub_2:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}
class View_BarVerticalNormalizedComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import29.XAxisComponent>;
  _XAxisComponent_0_3:import30.Wrapper_XAxisComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import18.ViewContainer) {
    super(View_BarVerticalNormalizedComponent1,renderType_BarVerticalNormalizedComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'ngx-charts-x-axis',''),(null as any));
    this.compView_0 = new import30.View_XAxisComponent0(this.viewUtils,this,0,this._el_0);
    this._XAxisComponent_0_3 = new import30.Wrapper_XAxisComponent();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._XAxisComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'dimensionsChanged',(null as any)),this.eventHandler(this.handleEvent_0));
    this._XAxisComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import29.XAxisComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._XAxisComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.xScale;
    this._XAxisComponent_0_3.check_xScale(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.dims;
    this._XAxisComponent_0_3.check_dims(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.showXAxisLabel;
    this._XAxisComponent_0_3.check_showLabel(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.xAxisLabel;
    this._XAxisComponent_0_3.check_labelText(currVal_0_0_3,throwOnChange,false);
    if (this._XAxisComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._XAxisComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dimensionsChanged')) {
      const pd_sub_0:any = ((<any>this.parentView.context.updateXAxisHeight($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_BarVerticalNormalizedComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import31.YAxisComponent>;
  _YAxisComponent_0_3:import32.Wrapper_YAxisComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import18.ViewContainer) {
    super(View_BarVerticalNormalizedComponent2,renderType_BarVerticalNormalizedComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'ngx-charts-y-axis',''),(null as any));
    this.compView_0 = new import32.View_YAxisComponent0(this.viewUtils,this,0,this._el_0);
    this._YAxisComponent_0_3 = new import32.Wrapper_YAxisComponent();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._YAxisComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'dimensionsChanged',(null as any)),this.eventHandler(this.handleEvent_0));
    this._YAxisComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import31.YAxisComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._YAxisComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.yScale;
    this._YAxisComponent_0_3.check_yScale(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.context.dims;
    this._YAxisComponent_0_3.check_dims(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.context.showGridLines;
    this._YAxisComponent_0_3.check_showGridLines(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.context.showYAxisLabel;
    this._YAxisComponent_0_3.check_showLabel(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.context.yAxisLabel;
    this._YAxisComponent_0_3.check_labelText(currVal_0_0_4,throwOnChange,false);
    if (this._YAxisComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._YAxisComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'dimensionsChanged')) {
      const pd_sub_0:any = ((<any>this.parentView.context.updateYAxisWidth($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_BarVerticalNormalizedComponent3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import33.SeriesVerticalComponent>;
  _SeriesVerticalComponent_2_3:import34.Wrapper_SeriesVerticalComponent;
  _text_3:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import18.ViewContainer) {
    super(View_BarVerticalNormalizedComponent3,renderType_BarVerticalNormalizedComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,':svg:g',new import3.InlineArray4(4,'ngx-charts-series-vertical','','type','normalized'),(null as any));
    this.compView_2 = new import34.View_SeriesVerticalComponent0(this.viewUtils,this,2,this._el_2);
    this._SeriesVerticalComponent_2_3 = new import34.Wrapper_SeriesVerticalComponent();
    this.compView_2.create(this._SeriesVerticalComponent_2_3.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray8(6,'select',(null as any),'activate',(null as any),'deactivate',(null as any)),this.eventHandler(this.handleEvent_2));
    this._SeriesVerticalComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true,true,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import33.SeriesVerticalComponent) && (2 === requestNodeIndex))) { return this._SeriesVerticalComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6:any = 'active';
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_0,((this._expr_6 == import1.UNINITIALIZED)? 'void': this._expr_6),((currVal_6 == import1.UNINITIALIZED)? 'void': currVal_6));
      this._expr_6 = currVal_6;
    }
    const currVal_2_0_0:any = this.parentView.context.dims;
    this._SeriesVerticalComponent_2_3.check_dims(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = 'normalized';
    this._SeriesVerticalComponent_2_3.check_type(currVal_2_0_1,throwOnChange,false);
    const currVal_2_0_2:any = this.context.$implicit.series;
    this._SeriesVerticalComponent_2_3.check_series(currVal_2_0_2,throwOnChange,false);
    const currVal_2_0_3:any = this.parentView.context.xScale;
    this._SeriesVerticalComponent_2_3.check_xScale(currVal_2_0_3,throwOnChange,false);
    const currVal_2_0_4:any = this.parentView.context.yScale;
    this._SeriesVerticalComponent_2_3.check_yScale(currVal_2_0_4,throwOnChange,false);
    const currVal_2_0_5:any = this.parentView.context.colors;
    this._SeriesVerticalComponent_2_3.check_colors(currVal_2_0_5,throwOnChange,false);
    const currVal_2_0_6:any = this.parentView.context.gradient;
    this._SeriesVerticalComponent_2_3.check_gradient(currVal_2_0_6,throwOnChange,false);
    const currVal_2_0_7:any = this.parentView.context.activeEntries;
    this._SeriesVerticalComponent_2_3.check_activeEntries(currVal_2_0_7,throwOnChange,false);
    const currVal_2_0_8:any = this.context.$implicit.name;
    this._SeriesVerticalComponent_2_3.check_seriesName(currVal_2_0_8,throwOnChange,false);
    if (this._SeriesVerticalComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    const currVal_7:any = this.parentView.context.groupTransform(this.context.$implicit);
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementAttribute(this._el_0,'transform',((currVal_7 == null)? (null as any): currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this._SeriesVerticalComponent_2_3.ngOnDestroy();
  }
  detachInternal():void {
    var animationTransition_animationState:any = this.componentType.animations['animationState'](this,this._el_0,this._expr_6,'void');
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onClick($event,this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'activate')) {
      const pd_sub_1:any = ((<any>this.parentView.context.onActivate($event,this.context.$implicit)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'deactivate')) {
      const pd_sub_2:any = ((<any>this.parentView.context.onDeactivate($event,this.context.$implicit)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}