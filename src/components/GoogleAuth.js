import React from 'react'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '581832201132-dfhodmg4v58ig2fp86irolb9m311ibfg.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
}

export default GoogleAuth