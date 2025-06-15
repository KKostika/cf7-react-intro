type Props = {
    title: string;
    description: string;
}

//  The difference between Props and PropsInterface is that PropsInterface is a type and Props is a value
// also Interface is used to define the shape of the object and Props is used to define the value of the object

// interface Props {
//     title: string
// }


const ArrowFunctionalComponentWithProps = ({title, description}: Props) => {
    return (
        <>
            <h1 className="text-center text-xl font-bold mt-12 ">{title}</h1>
            <p className="text-gray-800">{description}</p>
        </>)
}
export default ArrowFunctionalComponentWithProps;