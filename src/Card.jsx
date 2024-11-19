import profilepic from './assets/bosslady.jpeg'

function Card(){

    return(
        <div className="Card">
            <img className="card-image" src={profilepic}  alt="profile picture" ></img>
           <h2 className="card-title">Lady-M Business</h2>
           <p className="card-text">i am learning react with bro code</p>
        </div>
    );
}

export default Card