import { Component } from 'react';

import Appinfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John", salary: 800, increase: false, id: 1},
                {name: "Terentiy", salary: 3000, increase: false, id: 2},
                {name: "Helicopter", salary: 5000, increase: false, id: 3},
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
        
    }

    render() {
        return (
            <div className="app">
                <Appinfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;