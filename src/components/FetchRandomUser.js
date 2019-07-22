import  React,{Component} from 'react';
import './FetchRandomUser.css';
export default class FetchRandomUser extends Component{
    state={
        loading: true,
        person: null
    };
    async componentDidMount(){
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data =await response.json();
        this.setState({person: data.results[0], loading: false});
    }
    render(){
        return( <div> {this.state.loading|| !this.state.person ?
        (
        <div>loading . . .</div>
        ):(
        <div className="personInfoWrapper">
            <div className="personInfoText">{this.state.person.name.title} </div>
            <div className="personInfoText">{this.state.person.name.first} </div>
            <div className="personInfoText">{this.state.person.name.last} </div>
            <img className="fetchedImage" src={this.state.person.picture.large} />
            <p className="personInfoText">{this.state.person.dob.age}</p>
        </div>
        )}
        </div>
        );
    }
}

