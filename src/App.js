import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDbData } from './utilities/firebase';
import Banner from './components/Banner'
import TermPage from './components/TermPage';
import CourseForm from './components/CourseForm';

const queryClient = new QueryClient();

const Main = () => {
  const [data, error] = useDbData('/');
  
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  return (
      <div className="container">
        <Banner title={data.title} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TermPage courses={data.courses} />} />
            <Route path="/course/:id/" element={<CourseForm courses={data.courses} />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Main />
  </QueryClientProvider>
)

export default App;