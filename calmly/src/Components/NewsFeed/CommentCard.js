import React, { Component } from 'react'
import firebase from 'firebase'
import { Row, Col, Card } from 'react-materialize'


class commentCard extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        let db = firebase.firestore();
        db.collection('publicaciones').orderBy('date', 'desc').get()
            .then((querySnapshot) => {
                let allPosts = [];
                querySnapshot.forEach(function (doc) {
                    console.log(doc.data().post)
                    allPosts.push(doc.data().post)
                })
                this.setState({ data: allPosts });
            }).catch((err) => {
                console.log(err)
            });
    }

    renderComment = (data) => {
        return (
            <div>
                <Card className="commentCard">
                    <Col m={12} s={12}>
                        {data}
                    </Col>
                </Card>
            </div>
        )
    }


    getComment() {
        const comment = (this.state.data).map((data) => {
            return this.renderComment(data);
        });
        return comment
    }

    render() {
        console.log(this.state.data.map((i) => i))
        if (this.state.data.length === 0) {
            return (<div>Cargando</div>)
        } else {
            return (
                <Row>
                    <Col m={8} s={12}>
                        {this.getComment()}
                    </Col>
                </Row>
            )
        }
    }
}

export default commentCard

/*import React, {Component} from 'react'
import firebase from 'firebase'
import {Row, Col, Card} from 'react-materialize'


class commentCard extends Component {
    constructor() {
        super()
        this.state = {
         data : []
        }
    }

    
    componentDidMount() {
    let db = firebase.firestore();
    db.collection('publicaciones').orderBy('date', 'desc').get()
    .then((querySnapshot) => {
            let allPosts = [];
            querySnapshot.forEach(function(doc) {
                console.log(doc.data().post)
                allPosts.push(doc.data().post)
            })
            this.setState({data : allPosts});            
        }).catch((err) => {
            console.log(err)
        });
    }

    render() {
        console.log(this.state.data);
      //  console.log(this.state.data.map((i) => i))
        if(this.state.data.length === 0) {
            return (<div>Cargando</div>)
        } else {
                let posts = [];
                let data = this.state.data;
                for(let i = 0; i < data.length; i++) {
                            posts.push( <Row>
                                <Col m={8} s={12}>
                                   <Card className="commentCard">
                                       <Col m={12} s={12}>
                                            {posts[i]}
                                        </Col>
                                    </Card>
                                </Col>
                            </Row>)
                }
                return posts
        }
    }
}

export default commentCard*/