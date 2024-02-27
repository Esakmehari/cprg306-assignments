import ItemList from './item-list.js'; 

function Page() {
  return (
    <main className="text-2xl bg-black-100 min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;