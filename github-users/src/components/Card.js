import React, {useState} from "react";
import axios from "axios";

export default function Card(props){
    const [follower, setFollower] = useState({
        name: "",
        username: "", 
        avatar: "",
        location: "",
        bio: "", 
        profile: "",
    });


    const getFollower = e => {
        e.preventDefault();
        axios
            .get(`"https://api.github.com/users/cdlafortune/followers"`)
            .then((response) => {
                setFollower(response.data);
                console.log("Followers: ", follower);
            })
            .catch((error)=> console.log(error));
    };

    return (
        <div className="followers">
            <button className="followers-btn" onClick={getFollower}>Followers</button>

            <div className="card-container">
                {follower.map((item)=> (
                    <div className="card">
                    <img href={item.avatar} alt="profile pic"/>
                    <p>Name: {item.name}</p>
                    <p>Username: {item.username}</p>
                    <p>Location: {item.location}</p>
                    <p>Bio: {item.bio}</p>
                    <p>Profile: <a href={item.html_url}>Github</a></p>
                </div>
                ))}
                
            </div>
        </div>
    )
}