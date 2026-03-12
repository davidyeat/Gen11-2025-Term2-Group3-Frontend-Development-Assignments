import { useState } from "react";

export default function StuffForm({onStuffForm}) {
  const [stuffName, setStaffName] = useState("");
  const [stuffPrice, setStaffPrice] = useState(0);

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={(e) => setStaffName(e.target.value)}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={(e) => setStaffPrice(parseFloat(e.target.value))}/>

      <button 
        onClick={(e) => {onStuffForm(stuffName, stuffPrice); e.preventDefault()}}
      >Add Stuff</button>
    </form>
  );
}
