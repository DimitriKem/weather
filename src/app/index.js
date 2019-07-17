import React from 'react';
import styles from './app.module.css';


class App extends React.Component{
    render(){
      
        return (
        
            <div className="container">
                <div className="row">
                    <div className="col col-3">
                        <ul className="list-group">
                           Hello!!  
                        </ul>
                    </div>
                    <div className="col col-9">
                        HI!!!
                    </div>
                </div>
            </div>
       
        )
    }
}

export default App;