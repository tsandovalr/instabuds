import './styles/Post.css';
import Avatar from "@mui/material/Avatar";

function Post() {
    return (
        <div className="post">
            <div className='post_header'>
            <Avatar 
                className="post_avatar"
                alt="Tomsand"
                src="/assets/images/spidey.jpeg"
            />
            <h3>Username</h3>
            </div>
            
            {/**Header - avatar + username */}

            <img className="post_image" alt="" src="/assets/images/photo.png" />
            {/**Image */}
        
            <h4 className='post_text'><strong>tsandoval:</strong>WOOWWW what a day!</h4>
            
            {/**username + caption */}

        </div>
    )
}

export default Post
