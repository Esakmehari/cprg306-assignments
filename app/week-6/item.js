export default function Item({ name, quantity, category }) {
    return (
      <div className="p-2 m-4 bg-gray-800 text-yellow-500 max-w-sm rounded-lg">
        <h2 className="font-bold text-xl">{name}</h2>
        <p>
          Buy {quantity} in {category}
        </p>
      </div>
    );
  }