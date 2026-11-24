const SW={y:"#D9B25F",w:"#E6EAEE",r:"#E3AE95",p:"#C4CAD1"};
const METAL=(plat)=>({key:"Metal",type:"swatch",choices:[{n:"18k yellow gold",add:0,c:SW.y},{n:"18k white gold",add:0,c:SW.w},{n:"18k rose gold",add:0,c:SW.r}].concat(plat?[{n:"Platinum",add:plat,c:SW.p}]:[])});
const PRODUCTS={
  solitaire:{name:"Classic Solitaire Ring",price:54999,mrp:69999,rating:4.9,reviews:412,badge:"Bestseller",
    tag:"A timeless six-prong solitaire that lets the diamond do the talking.",
    options:[METAL(24000),{key:"Diamond weight",type:"pill",choices:[{n:"0.50 ct",add:0},{n:"1.00 ct",add:52000},{n:"1.50 ct",add:118000}]},{key:"Ring size",type:"select",choices:["Not sure, help me","10","11","12","13","14","15","16","17","18","19","20"].map(n=>({n,add:0}))}],
    specs:[["Diamond","Lab grown, Type IIa CVD"],["Colour","D to F"],["Clarity","VVS to VS"],["Cut","Excellent / Ideal"],["Certificate","IGI or SGL"],["Setting","Six prong solitaire"]]},
  studs:{name:"Everyday Studs",price:18999,mrp:24999,rating:4.9,reviews:268,badge:"New",
    tag:"Light, secure and bright enough to wear from morning to midnight.",
    options:[METAL(16000),{key:"Total weight",type:"pill",choices:[{n:"0.50 ct",add:0},{n:"1.00 ct",add:26000},{n:"2.00 ct",add:78000}]},{key:"Backing",type:"pill",choices:[{n:"Push back",add:0},{n:"Screw back",add:1500}]}],
    specs:[["Diamond","Lab grown, round brilliant"],["Colour","D to F"],["Clarity","VVS to VS"],["Cut","Excellent"],["Certificate","IGI or SGL"],["Setting","Four prong pair"]]},
  tennis:{name:"Tennis Bracelet",price:72999,mrp:89999,rating:4.8,reviews:190,badge:"",
    tag:"A continuous line of hand-set diamonds with a flexible, secure clasp.",
    options:[METAL(0),{key:"Total weight",type:"pill",choices:[{n:"2 ct",add:0},{n:"3 ct",add:48000},{n:"5 ct",add:125000}]},{key:"Length",type:"pill",choices:[{n:"6.5 in",add:0},{n:"7 in",add:0},{n:"7.5 in",add:0}]}],
    specs:[["Diamond","Lab grown, round brilliant"],["Colour","D to F"],["Clarity","VS"],["Cut","Excellent"],["Certificate","IGI or SGL"],["Clasp","Box clasp with safety"]]},
  pendant:{name:"Floating Pendant",price:24999,mrp:31999,rating:4.9,reviews:305,badge:"Gift pick",
    tag:"A single diamond that seems to float on a fine chain.",
    options:[METAL(14000),{key:"Diamond weight",type:"pill",choices:[{n:"0.25 ct",add:0},{n:"0.50 ct",add:14000},{n:"1.00 ct",add:46000}]},{key:"Chain length",type:"pill",choices:[{n:"16 in",add:0},{n:"18 in",add:0},{n:"20 in",add:0}]}],
    specs:[["Diamond","Lab grown, round brilliant"],["Colour","D to F"],["Clarity","VVS to VS"],["Cut","Excellent"],["Certificate","IGI or SGL"],["Setting","Bezel floating"]]}
};
const inr=n=>"₹"+n.toLocaleString("en-IN");
