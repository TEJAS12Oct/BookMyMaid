import React from 'react'
import { Table } from 'react-bootstrap';
import E from './Images/E.jpg';

export default class ViewFeedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbacks: []
        }
    }

    componentDidMount = () => {

        fetch("http://localhost:8080/MaidReview/maidreviewlist")
            .then(resp => resp.json())
            .then(data => {
                this.setState({ feedbacks: data }); console.log(this.state.feedbacks)

            })
    }

    render() {

        console.log(this.state.feedbacks, "feedbacks");

        return (
            <div className="container-fluid" style={{ backgroundImage: `url(${E})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div class="nav">&nbsp;&nbsp;
                    <button><a href="AdminHome">BACK</a></button>
                </div>
                <h4 style={{ fontFamily: 'arial', fontSize: 36 }}><b>FEEDBACK LIST</b></h4>
                <div className="maids" style={{ display: this.state.flag ? 'none' : 'block', backgroundColor: 'white' }} >
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>feedback ID</th>
                                <th>Rating</th>
                                <th>Comment</th>
                                <th>Maid Name</th>
                                <th>Customer Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.feedbacks.map(
                                    feedbacks => {
                                        return (<tr>
                                            <td>{feedbacks.maidReviewId}</td>
                                            <td>{feedbacks.maidRating}</td>
                                            <td>{feedbacks.maidComments}</td>
                                            <td>{feedbacks.maid?.maidName}</td>
                                            <td>{feedbacks.userBook?.userName}</td>

                                        </tr>)
                                    })
                            }
                        </tbody>
                    </Table>

                </div>
            </div>
        )
    }
}