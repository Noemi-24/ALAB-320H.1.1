import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'
import './HomePage.css'

function HomePage() {
  return (
    <div className='employee-dir-container'>
        <Header title="Employee Directory" />
        <SearchBar />
        <EmployeeList />
    </div>
  );
}

export default HomePage;