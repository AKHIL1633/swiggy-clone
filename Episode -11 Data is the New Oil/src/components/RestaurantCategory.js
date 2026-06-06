import ItemList from "./ItemList";

 const RestaturantCategory=({data,showItems,setShowIndex}) =>{
    // console.log(data)
    // const [showItems,setShowItems]=useState(false);

    // const handleClick=()=>{
    //     // toggle
    //     setShowItems(!showItems);
    // }
   // when i click on this i will call setShowIndex of the parent


    const  handleClick=()=>{
      setShowIndex();
    }
    return ( 
    <div >
        {/* Header */}
      <div className="w-6/12  mx-auto my-4 bg-gray-50  shadow-lg p-4 "></div>
      <div  className="flex-justify-between cursor-pointer" onClick={handleClick}>
     <span className="font-bold text-lg">{data.title} ({data.itemsCards.length})</span>

     <span>⬇️ </span>
     </div>
    {/* Accordian Body */}
    {showItems && <ItemList items={data.itemsCards}/>}
    </div>
    );
 };

 

 export default RestaturantCategory
 // i want collapse and expand the accordian body
// data variable has state variable which was controlled should i show item or not
//we have built our own accordians 



