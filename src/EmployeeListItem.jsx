import './EmployeeListItem.css';

function EmployeeListItem({ img, name, position }) {
  return (
    <div className="employee-item-card">
        <div className='employee-photo-container'>
            <img
            className="employee-photo"
            src={img}
            alt={`${name} photo`}        
            />
        </div>
        <div className='employee-info-container'>
            <p className="employee-name">{name}</p>
            <p className="employee-position">{position}</p>
        </div>        
    </div>    
  )
}

export default EmployeeListItem;