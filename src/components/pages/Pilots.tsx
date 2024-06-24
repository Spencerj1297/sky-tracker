import TeamPage from "./TeamPage"
import pilotImage from "../../assets/pilotsPage.jpg"
import pilotWings from "../../assets/wings.png"

const Pilots = () => {

    let title = "MEET THE PILOTS"

    let description = 'Welcome to Helicopter Strike Squadron 75, where elite pilots soar through the skies with unparalleled precision and courage. Our squadron is home to a diverse team of highly skilled aviators, each bringing unique expertise and experience to the cockpit. Our pilots are trained to handle the most challenging missions, from tactical insertions in hostile territories to air support for ground forces. With a focus on safety, efficiency, and teamwork, Helicopter Strike Squadron 75 sets the standard for excellence in aerial operations. Led by seasoned veterans and supported by cutting-edge technology, our pilots execute missions with unwavering dedication and professionalism. Whether its combat search and rescue, anti-submarine warfare, or humanitarian aid, our squadron is always ready to answer the call.'
    
    return(
        <TeamPage 
            title={title}
            picture={pilotImage}
            emblem={pilotWings}
            description={description}
        />
    )
}

export default Pilots