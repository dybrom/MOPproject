import React, {   Component} from 'react';
import '../../App.css';
import Profil from './profil';
import TweetList from './TweetList';
import TweetInput from './TweetInput';
import ToDoStore from "../stores/TodoStore";


//App definicija komponente

class App extends Component {


    render() {
      

     

        return ( 

          <div className = "App" >  
            <div className = "row" >


              <div className = "col-lg-4">
                <div className = "profilbox">
                  <Profil />
                </div>
              </div>
           
              <div className = "col-lg-8" >
                <div>
                  <TweetInput />
                </div>

                <div className="tweetsss">
                  <TweetList />
                </div>
              </div>


            </div>
          </div>
        );
    }
}

export default App;