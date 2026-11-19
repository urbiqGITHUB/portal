/* Three ordered integer-CZK boundaries always define four nonnegative shares. */
(()=>{'use strict';
const actors=ProjectConfig.value.fee.actors.map(a=>a.label);
const phases=ProjectConfig.phases();
function distribute(total,weights){const sum=weights.reduce((a,b)=>a+b,0);if(!sum)return weights.map((_,i)=>i===0?total:0);const exact=weights.map(v=>total*v/sum),out=exact.map(Math.floor),order=exact.map((v,i)=>({i,remainder:v-out[i]})).sort((a,b)=>b.remainder-a.remainder||a.i-b.i);let remaining=total-out.reduce((a,b)=>a+b,0);for(let i=0;i<remaining;i++)out[order[i%order.length].i]++;return out;}
function cuts(a){return [a[0],a[0]+a[1],a[0]+a[1]+a[2]];}
function amounts(budget,b){return [b[0],b[1]-b[0],b[2]-b[1],budget-b[2]];}
const step=ProjectConfig.value.fee.stepCzk;
function quantize(budget,b){return cuts(distribute(budget/step,amounts(budget,b)).map(v=>v*step));}
function move(budget,b,index,value){if(!Number.isFinite(value)||!Number.isInteger(index)||index<0||index>2)return b.slice();const out=b.slice();out[index]=Math.max(index?out[index-1]:0,Math.min(index<2?out[index+1]:budget,Math.round(value/step)*step));return out;}
function valid(budget,b){return Array.isArray(b)&&b.length===3&&b.every((v,i)=>Number.isSafeInteger(v)&&v>=0&&v<=budget&&(!i||v>=b[i-1]));}
function percentages(values){return values.some(v=>v>0)?distribute(10000,values):values.map(()=>null);}
const api={actors,phases,distribute,cuts,amounts,move,valid,percentages,step,quantize};globalThis.OfferAllocation=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
