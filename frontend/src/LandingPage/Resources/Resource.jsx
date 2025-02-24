//  import Chatbot from './component/Chatbot.jsx';
import DropDown from './component/DropDownDsa.jsx';
import SparklesPreview from './component/ResourceHeader.jsx';

function Resources() {
    return ( 
        <div className="bg-black text-white resource">
           
            <SparklesPreview />
            
            <DropDown />
            {/* <Chatbot/> */}
            
            
        </div>
     );
}

export default Resources;