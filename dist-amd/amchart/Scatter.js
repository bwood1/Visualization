(function(e,t){typeof define=="function"&&define.amd?define(["d3","./CommonXY","amcharts.xy","../api/INDChart","css!./Bar"],t):e.amchart_Scatter=t(e.d3,e.amchart_CommonXY,e.amcharts,e.api_INDChart)})(this,function(e,t,n,r){function i(){t.call(this),this._tag="div",this._type="Scatter",this._gType="column"}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.prototype._class+=" amchart_Scatter",i.prototype.implements(r.prototype),i.prototype.publish("paletteID","default","set","Palette ID",i.prototype._palette.switch(),{tags:["Basic","Shared"]}),i.prototype.publish("tooltipTemplate","x:[[x]] y:[[y]]","string","Tooltip Text"),i.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments)},i.prototype.updateChartOptions=function(){return t.prototype.updateChartOptions.apply(this,arguments),this.buildGraphs(this._gType),this._chart},i.prototype.buildGraphs=function(e){function a(e){return e}typeof this._chart.graphs=="undefined"&&(this._chart.graphs=[]);var n=this._chart.graphs.length,r=Math.max(n,this._valueField.length);for(var i=0;i<r;i++)if(typeof this._valueField!="undefined"&&typeof this._valueField[i]!="undefined"){var s=t.prototype.buildGraphObj.call(this,e,i),o=a.call(this,s);if(typeof this._chart.graphs[i]!="undefined")for(var u in o)this._chart.graphs[i][u]=o[u];else this._chart.addGraph(o)}else this._chart.removeGraph(this._chart.graphs[i])},i.prototype.update=function(e,n){t.prototype.update.apply(this,arguments),this.updateChartOptions(),this._chart.validateNow(),this._chart.validateData()},i});