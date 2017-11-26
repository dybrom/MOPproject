import React, {   Component} from 'react';
import '../App.css';
import Profil from './profil';
import TweetList from './TweetList';
import TweetInput from './TweetInput';
//import TodoStore from '../stores/TodoStore';
import axios from 'axios';
import moment from 'moment';

//App definicija komponente

class App extends Component {
constructor() {
    super();
    
    this.state = {
  
        firstName: 'Arif',
  lastName: 'Mahmic',
  username: 'dybrom',
  avatarUrl: 'https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.0-9/12189112_10153658732269933_3129207259494805258_n.jpg?oh=f1927ffe1e2f7aa28778585aa41662c5&oe=5A8F948A'
,

        
        tweets : [
      {
        id: 1111111111,
        created_at:"2017-10-26T13:27:14.664Z", 
        // date.toISOString()

        text: "prvi tweet"
      },
      {
        id: 22222222,
        created_at:"2017-11-26T13:27:14.664Z", 
        text: "drugi tweet"
      },
    ]

      
    
    };
  } 

  compomnenDidMount() {
    // axios
    // .get('/tweets')
    // .then((tweets) => {
    //     this.setState({
    //       tweets: tweets
    //     })
    // })


    // moment("10.10.2012").fromNow();
  }


    handleSubmit(val) {

       //  axios
       //  .post('/tweets',
       //    {tweet: {text: 'sadsadad'}})
       // .then((tweet) => {
       //      this.setState({
       //       tweets: this.state.tweets.concat([tweet])
       //     })
       //  })


      this.setState({
        tweets: this.state.tweets.concat([{id: 2132121, text: val, created_at: (new Date()).toISOString()}])
      })
    }

    render() {
      console.log(moment(this.state.tweets[0].created_at).fromNow());
      let tweetsCount = this.state.tweets.length;
    

        return ( 

          <div className = "App">  
            <div className = "row">


              <div className = "col-lg-4">
                <div className = "profilbox">
                  <Profil tweetsCount={tweetsCount} username={this.state.username} lastName={this.state.lastName} avatarUrl={this.state.avatarUrl} firstName={this.state.firstName} counter= {this.state.counter}/>
                </div>
              </div>
           
              <div className = "col-lg-8">
                <div>
                  <TweetInput handleSubmit={(val) => this.handleSubmit(val)} />
                 
                </div>
                 
                <div className="tweetsss">
                  <TweetList tweets={this.state.tweets} username={this.state.username} avatarUrl={this.state.avatarUrl} counter={this.state.counter}/>
                </div>
              </div>


            </div>
          </div>
        );
    }
}

export default App;