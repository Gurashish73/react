import Card from './components/Card/Card';
function App() {
  const users = ["Gurashish", "Alex", "Sam", "Priya", "John"];
  return (
    <div>
      {users.map((user, index) => (
        <Card key={index} userName={user} />
      ))}
    </div>
  );
}

export default App;