import React from "react";

class Card extends React.Component{

    state={user:''}

    componentDidMount(){
        let user=this.props.match.params.user;
        this.setState({user:user});
    }

    render()
    {
        return(
            <div class="alert alert-primary" role="alert">
              Welcome {this.state.user}
            </div>
        )
    }
}

export default Card;