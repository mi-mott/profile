import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Grid } from  'react-loader-spinner'

const Loading = ({id}) => {

	if (id === "0") {
		return (
			<Grid color="#CCCCFF" height={150} width={150} />
		)
	}
}

export default Loading