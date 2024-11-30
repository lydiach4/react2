import Image from "./image";
import Name from "./name";
import Description from "./description";
import Price from "./price";

function App() {
 

  return (
    <>
    <div className="felx flex-col text-center justify-center gap-3 m-[150px] p-[40px] border border-black shadow-lg ">
      <Image />
      <Name />
      <Description />
      <Price />
    </div>
  
    </>
  );
}

export default App;
