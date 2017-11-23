import React, {   Component} from 'react';
import './App.css';






// Definicija komponente Profil
var user = {
  firstName: 'Arif',
  lastName: 'Mahmic',
  username: 'dybrom',
  tweets: 0,
  imageURL: 'https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.0-9/12189112_10153658732269933_3129207259494805258_n.jpg?oh=f1927ffe1e2f7aa28778585aa41662c5&oe=5A8F948A'
};

class Profil extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-lg-6">
      <img src={user.imageURL}></img>
      </div>
      <div className="col-lg-6">
      <h3>{user.firstName + ' ' + user.lastName}</h3>
      <h3>{'@' + user.username}</h3>
      <h3>{'Tweets' + ' ' + user.tweets}</h3>
      </div>

      </div>
    );
  }
}

//Definicija tweetList

class TweetList extends Component {
  render() {
    return (
      <div className="listaTweeta">
        
      <h1>asda</h1>

    
      </div>
    );
  }
}

//Definicija tweetInput komponente

class TweetInput extends Component {

  render() {
    return (
      <div class="dodavanjeTweeta">
      <form >
        
          <textarea cols="40" id="tekst" rows="3" placeholder="blabla"class="form-control" ></textarea>
        
      </form>
      </div>
      );
  }
}


//App definicija komponente

class App extends Component {
    render() {
        return ( 
          <div className = "App" >  
            <div className = "row" >

              <div className = "col-lg-4" >
            
                <div className = "profilbox" >
            
                 <Profil />
                </div>
              </div>
           
              <div className = "col-lg-8" >
          
                <TweetInput />
            <TweetList />
            


                </div>
            </div>
          </div>
        );
    }
}

export default App;