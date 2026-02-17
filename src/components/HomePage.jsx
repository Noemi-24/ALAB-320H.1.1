import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

function HomePage() {
  return (
    <div>
        <Header title="Employee Directory" />
        <SearchBar />
        <EmployeeList />
    </div>
  );
}

export default HomePage;