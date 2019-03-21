import React from 'react'

class GoogleAuth extends React.Component {
    constructor() {
        super()
        this.state = {
            isSignedIn: null
        }
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '581832201132-dfhodmg4v58ig2fp86irolb9m311ibfg.apps.googleusercontent.com',
                scope: 'email'
            }).then (() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
            })
        })
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div> I dont know if we are signed in</div>
        } else if(this.state.isSignedIn){
            return <div>I am not signed In</div>
        }
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth