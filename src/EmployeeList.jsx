import EmployeeListItem from './EmployeeListItem'
import './EmployeeList.css'

const EmployeeList = () => {

    const employees = [
        { id: 1, name: 'James King', position: 'President and CEO', img: 'https://randomuser.me/api/portraits/men/1.jpg'},
        { id: 2, name: 'Julie Taylor', position: 'VP of Marketing',  img: 'https://randomuser.me/api/portraits/women/1.jpg'},
        { id: 3, name: 'Eugene Lee', position: 'CFO', img: 'https://randomuser.me/api/portraits/men/2.jpg'},
        { id: 4, name: 'John Williams', position: 'VP of Engineering', img: 'https://randomuser.me/api/portraits/men/3.jpg'},
        { id: 5, name: 'Ray Moore', position: 'VP of Sales', img: 'https://randomuser.me/api/portraits/men/4.jpg'},
        { id: 6, name: 'Paul Jones', position: 'QA Manager', img: 'https://randomuser.me/api/portraits/men/5.jpg'}
    ];

  return (
    <div className='list-container'>
      <ul>
        {employees.map((employee) => (
            <li key={employee.id}>
                <EmployeeListItem img={employee.img} name={employee.name} position={employee.position}/>
            </li>         
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;