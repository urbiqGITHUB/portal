/* Three ordered integer-CZK boundaries always define four nonnegative shares. */
(()=>{'use strict';
const actors=['urbiq','Tečka','Perspektiv','Specialisté'];
const phases=[
 {id:'a',label:'Průzkumy a rozbory',start:0,end:3,period:'12/2026–02/2027',month:'02/2027',budget:460000,initial:[170000,130000,110000,50000]},
 {id:'b',label:'Koncept',start:3,end:5,period:'03/2027–04/2027',month:'04/2027',budget:880000,initial:[170000,270000,230000,210000]},
 {id:'c',label:'Hrubopis',start:5,end:7,period:'05/2027–06/2027',month:'06/2027',budget:800000,initial:[170000,270000,230000,130000]},
 {id:'d',label:'Čistopis',start:7,end:10,period:'07/2027–09/2027',month:'09/2027',budget:380000,initial:[110000,120000,90000,60000]}
];
function distribute(total,weights){const sum=weights.reduce((a,b)=>a+b,0);if(!sum)return weights.map((_,i)=>i===0?total:0);const exact=weights.map(v=>total*v/sum),out=exact.map(Math.floor),order=exact.map((v,i)=>({i,remainder:v-out[i]})).sort((a,b)=>b.remainder-a.remainder||a.i-b.i);let remaining=total-out.reduce((a,b)=>a+b,0);for(let i=0;i<remaining;i++)out[order[i%order.length].i]++;return out;}
function cuts(a){return [a[0],a[0]+a[1],a[0]+a[1]+a[2]];}
function amounts(budget,b){return [b[0],b[1]-b[0],b[2]-b[1],budget-b[2]];}
const step=10000;
function quantize(budget,b){return cuts(distribute(budget/step,amounts(budget,b)).map(v=>v*step));}
function move(budget,b,index,value){if(!Number.isFinite(value)||!Number.isInteger(index)||index<0||index>2)return b.slice();const out=b.slice();out[index]=Math.max(index?out[index-1]:0,Math.min(index<2?out[index+1]:budget,Math.round(value/step)*step));return out;}
function valid(budget,b){return Array.isArray(b)&&b.length===3&&b.every((v,i)=>Number.isSafeInteger(v)&&v>=0&&v<=budget&&(!i||v>=b[i-1]));}
function percentages(values){return values.some(v=>v>0)?distribute(10000,values):values.map(()=>null);}
const api={actors,phases,distribute,cuts,amounts,move,valid,percentages,step,quantize};globalThis.OfferAllocation=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
