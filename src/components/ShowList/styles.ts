import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints/breakpoints'
import { backgroundColor, primaryColor, primaryTextColor, secondaryColor, secondaryTextColor, tertiaryTextColor } from 'styles/theme/theme' 

export const List = styled.ul`
	display: block;
	max-width: 542px;
	margin: 0 auto;
	padding: 0 16px;
	list-style-type: none;
	box-sizing: border-box;
	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}
	@media (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
	}
`

export const ListItem = styled.li`
	margin-bottom: 24px;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.02);
	}
	@media (min-width: ${breakpoints.tablet}) {
		display: inline-block;
		max-width: 332px;
		margin-right: 24px;
		&:nth-of-type(even) {
			margin-right: 0;
		}
	}
	@media (min-width: ${breakpoints.desktop}) {
		max-width: 312px;
		&:nth-of-type(even) {
			margin-right: 24px;
		}
		&:nth-of-type(3n + 3) {
			margin-right: 0;
		}
	}
`

export const Div = styled.div`
		width: 100%;
		display: flex;
		justify-content: center;
		
`
		
export const Input = styled.input`
		width: 90%;
		margin: 5px 0;
		padding: 10px 17px;
		border: 1px solid ${backgroundColor};
		background: ${tertiaryTextColor};
		color: ${primaryTextColor};
		font-size: 20px;
`
export const Button = styled.button`
		padding: 8px 10px;
		width: 100%;
		margin-bottom: 10px;
		text-align: center;
		border: 1px solid ${backgroundColor};
		background: ${primaryColor};
		color: ${primaryTextColor};
		font-size: 18px;
		cursor: pointer;
	&:hover {
		color: ${secondaryTextColor};
	}
`

export const P = styled.p`
		padding: 8px 10px;
		width: 50%;
		margin: 0 auto;
		text-align: center;
		border: 1px solid red;
		background: white;
		color: black;
		font-size: 18px;
`