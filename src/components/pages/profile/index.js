import { useSelector } from 'react-redux'

export const Profile = () => {
	const profile = useSelector(
		(state) => state.profilePage.profile
	)
	return (
		<div>
			<h1>Профиль</h1>
			<h3>{profile.name}</h3>
			<h4>Возраст:{profile.age}</h4>
			<img alt='profile_Img' src={profile.img} />
		</div>
	)
}
