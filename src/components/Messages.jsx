import UserProfile from '../images/user-profile.png'
import RobotProfile from '../images/robot-profile.png'




export function Messages({message, sender, time}){

	

	return (
		<>
		<div className={sender === 'user' ? 'user-contents' : 'robot-contents'} >
			{sender === 'robot' && <img src={RobotProfile} alt="" className='profile-pic' />}
			<div  className='text-paragraph'>
				<p className='time'>{time}</p>
				<p>{message}</p>
			</div>
			{sender === 'user' && <img src={UserProfile} alt="" className='profile-pic' />}
		</div>
		</>
	);
}