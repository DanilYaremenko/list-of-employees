import './app-info.css';

const Appinfo = ({ increasedEmployees, employees }) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in the company</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Bonus will receive: {increasedEmployees}</h2>
        </div>
    );
}

export default Appinfo;