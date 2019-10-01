import slide_2 from "./img/slide_2.jpg"
import slide_3 from "./img/slide_3.jpg"


const initialState = {
	isLogged: false,
	user:{},
	products:[
	{
		
		key: 1,
		//name of product
		name:"south-tour1",
		//product description
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus laboriosam, sed sint incidunt hic eveniet soluta dolor eos enim sequi, quisquam placeat iste, nihil consectetur fugit, minima molestias a quos.",
		//img url and altText
		img:{
			url: slide_2,
			altText: "mountains and sea"
		}
		

	},
	{
		key: 2,
		//name of product
		name:"south-tour2",
		//product description
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus laboriosam, sed sint incidunt hic eveniet soluta dolor eos enim sequi, quisquam placeat iste, nihil consectetur fugit, minima molestias a quos.",
		//img url and alt-text
		img:{
			url: slide_3,
			altText: "mountains"
		}
		

	}
],
	cart:[]
}

export default initialState