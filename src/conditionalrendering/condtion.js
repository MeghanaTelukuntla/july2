import Eachrecipe from "../fooditems/fdata";

//1st one if-else
const ConditionalRendering=()=>{
    const isLogin=true;
    const isAdmin=false;
    const greeting=true;
    const subscribers=10
    if(isLogin){
        return (
            <>
            {isLogin?(
                <> 
                {isAdmin ?(<>
                         <h2>Welcome Admin</h2>
                         <Eachrecipe />
                    
                     </>
                    ) :(
                    <> 
                    <h2>Welcome user</h2>
                    
                     </>
                    )}
                    {greeting && <h2>thanks for registering</h2>}
                    {subscribers && <h2>Subscribers count {subscribers}</h2>}
                    </>

            ):(
                <> 
                <h2>Please Login to acess the content</h2>
                </>
            )}
            </>
       
                
        );
    }
    };

export default ConditionalRendering;