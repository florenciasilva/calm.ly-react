import React, {Component} from 'react'
import {Row, Col, Card, Button} from 'react-materialize'
import firebase from 'firebase'
import './NewsFeed.css'
import CommentCard from './CommentCard'

class NewsFeed extends Component {
    constructor() {
        super()
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.state = {
            comment: '',
        }
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleOnSubmit(event) {
        event.preventDefault();
        if(!this.state.comment) {
            alert('Escribe un mensaje')
        } else {
            let db = firebase.firestore();
            db.collection('publicaciones').add({
                post: this.state.comment,
                date: new Date(),
              })
                .then((docRef) => {
                  console.log('Document written with ID: ', docRef.id);
                })
                .catch(function(error) {
                  console.error('Error adding document: ', error);
                });
            };
    }

        render() {       
        return (   
        <div>       
            <Row>
                <Col m={8} s={12}>
                    <Card className="commentCard">
                        <Col m={12} s={12}>
                            <textarea name='comment' onChange={this.handleOnChange} value={this.state.comment} placeholder="Escribe tu comentario"></textarea>
                            <Button type='submit' onClick={this.handleOnSubmit} s={10} m={10} l={10} waves='light' className='newComment'>Enviar</Button>
                        </Col>
                    </Card>
                </Col>
            </Row>
            <Row>
                <CommentCard/>
            </Row>
        </div>
        )
    }
}

export default NewsFeed