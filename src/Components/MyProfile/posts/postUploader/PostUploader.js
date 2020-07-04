import React from 'react';
import './PostUploader.css'
import TextField from '@material-ui/core/TextField';

class postUploader extends React.Component {

    state = {
        title: '',
        imgUrl: ''
    }

    onSubmit = () => {
        console.log(this.state.title)
        console.log(this.state.imgUrl)
    }

    //new post fetch
    submit = async () => {
        try {
            const token = localStorage.getItem('token')
            const data = await fetch('https://nameless-stream-58853.herokuapp.com/posts/add', {
                method: 'POST',
                headers: {
                    "auth-token": token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: this.state.title, imgUrl: this.state.imgUrl })
            })
            const fetchedData = await data.json()
            console.log(fetchedData);
        } catch (error) {
            this.setState({ error: 'Try again' })
            console.log(error);
        }
    }






    render() {
        return (
            <div className='modalWrap'>
                <h2 style={{ margin: '10px' }} >Add something</h2>
                <TextField
                    id="standard"
                    label="Title"
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}
                    className='textField' />
                <TextField
                    id="standard-basic"
                    label="Image URL"
                    value={this.state.imgUrl}
                    onChange={e => this.setState({ imgUrl: e.target.value })}
                    className='textField' />

                <br />
                <br />
                <button type="submit" onClick={this.submit} >add</button>
            </div>
        );
    }


}

export default postUploader;