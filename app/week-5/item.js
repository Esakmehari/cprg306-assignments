
function Item({ name, quantity, category }) {
  return (
    <li className="border p-4 my-3">
      
      <strong>{name}</strong> <br/> buy {quantity} in {category}
    </li>
  );
}

export default Item;