import './App.css';
import Input from './components/Input';

function App() {
  return (
    <>
      <div className='px-10 m-12'>
        <h1 className='text-4xl text-blue-500 my-8'>Dự án Script generator</h1>
        <p className='my-8'>
          Cách sử dụng: Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Dignissimos quas ipsa asperiores minima, obcaecati voluptatem
          maiores reprehenderit quis ut. Voluptatum culpa enim delectus
          assumenda, qui similique modi ipsam voluptas ex.
        </p>
        <Input></Input>
      </div>
    </>
  );
}

export default App;
