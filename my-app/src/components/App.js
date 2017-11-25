import React, {   Component} from 'react';
import '../App.css';
import Profil from './profil';
import TweetList from './TweetList';
import TweetInput from './TweetInput';



//App definicija komponente

class App extends Component {
constructor() {
    super();
    this.state = {
      counter: 0,
          
        firstName: 'Arif',
  lastName: 'Mahmic',
  username: 'dybrom',
  tweets: 0,
  avatarUrl: 'https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.0-9/12189112_10153658732269933_3129207259494805258_n.jpg?oh=f1927ffe1e2f7aa28778585aa41662c5&oe=5A8F948A'


      
    
    };
  }






    render() {
      
     const {tweets} = this.state;
     var {counter} = this.state;
    

        return ( 

          <div className = "App">  
            <div className = "row">


              <div className = "col-lg-4">
                <div className = "profilbox">
                  <Profil username={this.state.username} lastName={this.state.lastName} avatarUrl={this.state.avatarUrl} firstName={this.state.firstName} counter= {this.state.counter}/>
                </div>
              </div>
           
              <div className = "col-lg-8">
                <div>
                  <TweetInput />
                 
                </div>
                 
                <div className="tweetsss">
                  <TweetList tweets={tweets} counter={counter}/>
                </div>
              </div>


            </div>
          </div>
        );
    }
}

export default App;