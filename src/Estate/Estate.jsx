import {useLoaderData} from 'react-router-dom';
const Estate = () => {
    const {estates} =  useLoaderData ()
    console.log (estates)
    return (
        <div>
           
        {/* //   {  estates.map (forest => <div>
        //         <h2 className='text-xl '>{forest.length}</h2>
        //     </div>)
        //    } */}
        </div>
    );
};

export default Estate;