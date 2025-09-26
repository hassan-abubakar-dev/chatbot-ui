
import UserProfile from '../images/user-profile.png'
import RobotProfile from '../images/robot-profile.png'




export function Messages({message, sender, messages}){

	

	return (
		<div className='chat-messages'>
		<div className={sender === 'user' ? 'user-contents' : 'robot-contents'} >
			{sender === 'robot' && <img src={RobotProfile} alt="" className='profile-pic' />}
			<p className='text-paragraph'>{message}</p>
			{sender === 'user' && <img src={UserProfile} alt="" className='profile-pic' />}
		</div>
		</div>
	);
}