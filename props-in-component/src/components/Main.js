
import Apples from "./Apple";
import Bag from "./Bag";

export default function Main(props) {
    return (
        <main className="main-component">
            <h2>Hi Main :{props.firstname}</h2>
          {/* <div>
            <Apples color="red" number={10} />
            <Bag children={<Apples color="yellow" number="5" />} />
            <Bag>
                 <Apples color="yellow" number="5" />
            </Bag>
            </div> */}
            
        </main>
        
    );
}