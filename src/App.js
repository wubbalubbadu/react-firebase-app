import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useJsonQuery } from './utilities/fetch';
import Banner from './components/Banner'
import TermPage from './components/TermPage';
import CourseForm from './components/CourseForm';

const queryClient = new QueryClient();

const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

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