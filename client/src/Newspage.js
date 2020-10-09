import React from 'react'
import profile from './linkedIn.jpeg'
const Newspage = () => {

    return (
        <div  style = {{alignContent : 'center'}} className= "container">
            <div>
                <h3>
                    Asynchronous Meetings: the next step in productivity 
                </h3>
                
            </div>
            <div className = "divider"></div>
            <div className = "section"></div>
            <div className = "row valign-wrapper">
                <div className = "left">
                    <div className = "valign-wrapper">
                        <div className = "col s2">
                            <img src ={profile} alt = "" className = "circle responsive-img"/>        
                        </div>
                        <div className = "col s10"><span className="black-text">Swagata Chakroborty<br/> 2 Minute Read </span></div> 
                    </div>
                </div>

            </div>
           
            <div className = "divider"></div>
            <div >
                <div style = {{textAlign: 'left'}}>
                    <p>
                        We have made great strides in replicating our workflow through telecommunication. I propose that we take another step forward by utilizing the telecommunication features already available to us to make meetings more asynchronous and transcripted. Though we are already allowed to record our meetings, we lack a user-friendly database to access these meetings. Furthermore, I would like to add transcription to these recordings, which will allow associates to search through these recordings for information they might have missed. With videos now recorded, associates would be able to watch meetings at 25 to 100% faster speeds. Across the board, the company can see new levels of productivity with this small change. 

                    </p>
                    <p>
                        As a student and intern, I have experienced a large degree of my life now working through zoom. Many of my classes are asynchronous, where the professor would post lectures and weekly meetings to talk about said lectures and answer questions. As an intern, I worked on a new product on the development side. I attended the initial plannings with business analysts, which were key to my understanding of the product. However, I provided no feedback or contributions. If there was a recording of the video, I could have watched it at a faster speed while reading the transcript.  As an intern, I was afraid of asking for clarification, a feeling that might be shared by a lot of associates. If these meetings were recorded, I could have just rewatched the video later on to answer my questions. This way, associates will be more prepared to go into future meetings. There are obvious and subtle ramifications of these changes, and we should explore them further.
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Newspage;