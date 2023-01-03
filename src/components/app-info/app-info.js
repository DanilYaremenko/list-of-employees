import './app-info.css';

const Appinfo = ({ increasedEmployees, employees }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increasedEmployees}</h2>
        </div>
    );
}

export default Appinfo;