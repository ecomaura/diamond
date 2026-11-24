const COLS=[
{slug:"engagement",name:"Engagement Rings",line:"Solitaires and settings made to be remembered.",intro:"Each ring begins with the stone. We select for proportion and light first, then design the setting around it."},
{slug:"earrings",name:"Diamond Earrings",line:"Light, held close to the face.",intro:"Studs, drops and huggies, balanced so the diamonds sit and move beautifully."},
{slug:"tennis",name:"Tennis Bracelets",line:"An unbroken line of brilliance.",intro:"Matched diamonds set in a fluid line that follows the wrist without a visible seam."},
{slug:"necklaces",name:"Diamond Necklaces",line:"Brilliance at the collarbone.",intro:"Pendants and rivières, from a single stone to a graduated line."},
{slug:"statement",name:"Statement Jewellery",line:"Pieces that enter the room first.",intro:"Larger stones and bolder forms for evenings that deserve them."},
{slug:"bespoke",name:"Bespoke Creations",line:"Your stone, your design, made by hand.",intro:"Commissions designed with you from the first sketch to the final polish. These are recent examples."}];
const METALS=["18k Yellow Gold","18k White Gold","18k Rose Gold","Platinum"];
// slug, collection, name, shape, carat, setting
const PRODUCTS=[
["aurelia","engagement","The Aurelia","Round","1.50 ct","Solitaire"],
["seraphine","engagement","The Seraphine","Oval","2.00 ct","Halo"],
["calliope","engagement","The Calliope","Emerald","2.50 ct","Three-stone"],
["lumiere","earrings","Lumière Studs","Round","1.00 ct total","Four-claw"],
["ondine","earrings","Ondine Drops","Pear","2.20 ct total","Bezel"],
["riviera","tennis","Riviera Line","Round","5.00 ct total","Four-claw"],
["cascade","tennis","Cascade Line","Emerald","6.00 ct total","Bezel"],
["solstice","necklaces","Solstice Pendant","Round","1.20 ct","Bezel"],
["halcyon","necklaces","Halcyon Rivière","Round","8.00 ct total","Four-claw"],
["meridian","statement","Meridian Cuff","Marquise","4.50 ct total","Bezel"],
["eclat","statement","Éclat Cocktail Ring","Cushion","3.00 ct","Cluster"],
["commission-01","bespoke","Commission Nº 01","Oval","3.10 ct","Bespoke"],
["commission-02","bespoke","Commission Nº 02","Pear","2.40 ct","Bespoke"]
].map(([slug,col,name,shape,carat,setting])=>({slug,col,name,shape,carat,setting}));
