import React from 'react';
import axios from "axios"
import Loader from './Loader';
import Alert from './Alert';
const Feedback = () => {
    const [email, setEmail] = React.useState();
    const [mark, setMark] = React.useState();
    const [feedback, setFeedback] = React.useState();
    const [alert, setAlert] = React.useState(false);
    const [description, setDescription] = React.useState();
    const [message, setMessage] = React.useState();
    const [type, setType] = React.useState();
    const Submit = async () => {

        let review = document.getElementsByName("review")
        for (let i = 0; i < review.length; i++) {
            if (review[i].checked) {
                setMark(review[i].value);
                console.log(review[i].value)
            }
        }
        
        await axios({
            method: 'post',
            //  url: 'https://shrouded-scrubland-67974.herokuapp.com/feedback',
            url: 'http://localhost:3800/feedback',
            data: {

                email: email,
                mark: mark,
                feedback: feedback
            }
        })
            .then(data => {
                setDescription("Added.....");
                setMessage("Feedback Added");
                setType("success");
                setAlert(true);
            })
            .catch(error => {
                setDescription("Error");
                setMessage("Try Agin");
                setType("error");
                setAlert(true)
            })
    }
    return (
        <>
            {
                alert &&
                <Alert
                    type={type}
                    description={description}
                    message={message}
                    setAlertFun={() => setAlert(false)}
                />
            }
            <div className="form-feedback">
                <center><h1>Feedback</h1></center>
                <label>Email</label>
                <div class="form-group">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div class="form-group">
                    <label>Position Mark</label>
                    <div style={{ display: "flex" }}>
                        <label class="checkbox-container">Great
                              <input type="radio" value="1" name="review" checked="checked" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Excellent
                             <input type="radio" value="2" name="review" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Bad
                       <input type="radio" value="3" name="review" />
                            <span class="checkmark"></span>
                        </label>

                    </div>
                </div>
                <label>Feedback</label>
                <div class="form-group">
                    <textarea onChange={(e) => setFeedback(e.target.value)} placeholder="Enter Message" name="" rows="4" cols="50" />
                </div>
                <div class="form-group">
                    <button
                        class="medicine-card-btn"
                        onClick={() => Submit()}
                        style={{ display: "block" }}>Submit</button>
                </div>
            </div>
        </>
    )
}



export default Feedback;