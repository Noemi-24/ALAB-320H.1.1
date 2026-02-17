import Header from'./Header';
import './EmployeePage.css';

function EmployeePage() {
    const employeeDetails = [
        { id: 1, 
            name: 'Julie Taylor', 
            position: 'VP of Marketing',  
            img: 'https://randomuser.me/api/portraits/women/1.jpg',
            phone:[
                { office: 7810000002,
                  mobile: 6170000002,
                  sms: 6170000002
                }                
            ],
            email: 'jtaylor@fakeemail.com'
        }        
    ];

    return (
        <div className="employee-details-container">
            <div className="employee-header">
                <p className="back-arrow">&lt;</p>
                <Header title="Employee" />
            </div>
            
            <div className="employee-card">
                <div className='employee-pic-container'>
                    <img
                    className="employee-pic"
                    src={employeeDetails[0].img}
                    alt={`${employeeDetails[0].name} photo`}        
                    />
                </div>
                <div className='employee-info'>
                    <p className="employee-name">{employeeDetails[0].name}</p>
                    <p className="employee-contact-info-value">{employeeDetails[0].position}</p>
                </div>        
            </div>    
            
            <div className="employee-contact-info">
                <div className="employee-contact-info-item">
                    <div>
                        <p className="employee-contact-info-label">Call Office </p>
                        <p className="employee-contact-info-value">{employeeDetails[0].phone[0].office}</p>
                    </div>                    
                    <div>
                        <p className="arrow">&#62;</p>
                    </div>
                </div>
                
                <div className="employee-contact-info-item">
                    <div>
                        <p className="employee-contact-info-label">Call Mobile </p>
                        <p className="employee-contact-info-value">{employeeDetails[0].phone[0].mobile}</p>
                    </div>
                    <div>
                        <p className="arrow">&#62;</p>
                    </div>
                </div>
                
                <div className="employee-contact-info-item">
                    <div>
                        <p className="employee-contact-info-label">SMS </p>
                        <p className="employee-contact-info-value">{employeeDetails[0].phone[0].sms}</p>
                    </div>
                    <div>
                        <p className="arrow">&#62;</p>
                    </div>
                </div>
                
                <div className="employee-contact-info-item">
                    <div>
                        <p className="employee-contact-info-label">Email</p>
                        <p className="employee-contact-info-value">{employeeDetails[0].email}</p>
                    </div>
                    <div>
                        <p className="arrow">&#62;</p>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default EmployeePage;